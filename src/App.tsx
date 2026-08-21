import { useEffect, useMemo, useState } from "react";
import type { Issue, IssueStatus } from "@/models";
import { ISSUE_PRIORITIES, ISSUE_STATUSES, statusLabel } from "@/models";
import type { CreateIssueInput } from "@/services/issueService";
import { issueService } from "@/services/issueService";
import { Sidebar } from "@/components/Sidebar";
import { IssueRow } from "@/components/IssueRow";
import { Composer } from "@/components/Composer";

const PRIORITY_ORDER = new Map(ISSUE_PRIORITIES.map((p, index) => [p, index]));

function sortByPriority(a: Issue, b: Issue): number {
  return (PRIORITY_ORDER.get(a.priority) ?? 0) - (PRIORITY_ORDER.get(b.priority) ?? 0);
}

export function App() {
  const [issues, setIssues] = useState<Issue[]>(() => issueService.listIssues());
  const [filter, setFilter] = useState<IssueStatus | "all">("all");
  const [composerOpen, setComposerOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (!typing && (event.key === "c" || event.key === "C")) {
        event.preventDefault();
        setComposerOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const counts = useMemo(() => {
    const base: Record<IssueStatus, number> = {
      backlog: 0,
      todo: 0,
      in_progress: 0,
      done: 0,
      canceled: 0,
    };
    for (const issue of issues) base[issue.status] += 1;
    return base;
  }, [issues]);

  const grouped = useMemo(() => {
    const visibleStatuses = filter === "all" ? ISSUE_STATUSES : [filter];
    return visibleStatuses.map((status) => ({
      status,
      items: issues.filter((issue) => issue.status === status).sort(sortByPriority),
    }));
  }, [issues, filter]);

  const handleCreate = (input: CreateIssueInput) => {
    issueService.createIssue(input);
    setIssues(issueService.listIssues());
    setComposerOpen(false);
  };

  const totalVisible = grouped.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="app">
      <Sidebar counts={counts} active={filter} onSelect={setFilter} />

      <main className="main">
        <header className="topbar">
          <span className="topbar__title">
            {filter === "all" ? "All issues" : statusLabel(filter)}
          </span>
          <span className="topbar__count">{totalVisible}</span>
          <span className="topbar__spacer" />
          <button className="btn-primary" onClick={() => setComposerOpen(true)}>
            New issue <kbd>C</kbd>
          </button>
        </header>

        <div className="list">
          {totalVisible === 0 ? (
            <div className="empty-state">No issues here yet. Press C to create one.</div>
          ) : (
            grouped.map((group) =>
              group.items.length === 0 ? null : (
                <section key={group.status}>
                  <div className="group__header">
                    {statusLabel(group.status)}
                    <span className="group__count">{group.items.length}</span>
                  </div>
                  {group.items.map((issue) => (
                    <IssueRow key={issue.id} issue={issue} />
                  ))}
                </section>
              )
            )
          )}
        </div>
      </main>

      {composerOpen && (
        <Composer onCreate={handleCreate} onClose={() => setComposerOpen(false)} />
      )}
    </div>
  );
}
