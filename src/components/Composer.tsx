import { useEffect, useRef, useState } from "react";
import type { IssuePriority, IssueStatus } from "@/models";
import { ISSUE_PRIORITIES, ISSUE_STATUSES, priorityLabel, statusLabel } from "@/models";
import type { CreateIssueInput } from "@/services/issueService";
import { issueService } from "@/services/issueService";

interface ComposerProps {
  onCreate: (input: CreateIssueInput) => void;
  onClose: () => void;
}

export function Composer({ onCreate, onClose }: ComposerProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<IssueStatus>("todo");
  const [priority, setPriority] = useState<IssuePriority>("no_priority");
  const [assigneeId, setAssigneeId] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const users = issueService.listUsers();

  useEffect(() => {
    titleRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const canSubmit = title.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;
    onCreate({
      title,
      description,
      status,
      priority,
      assigneeId: assigneeId || null,
    });
  };

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div
        className="composer"
        role="dialog"
        aria-label="New issue"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="composer__crumb">Vibevirtue › New issue</div>
        <input
          ref={titleRef}
          className="composer__title"
          placeholder="Issue title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onKeyDown={(event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "Enter") submit();
          }}
        />
        <textarea
          className="composer__desc"
          placeholder="Add description…"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <div className="composer__controls">
          <select
            className="select"
            value={status}
            onChange={(event) => setStatus(event.target.value as IssueStatus)}
            aria-label="Status"
          >
            {ISSUE_STATUSES.map((s) => (
              <option key={s} value={s}>
                {statusLabel(s)}
              </option>
            ))}
          </select>
          <select
            className="select"
            value={priority}
            onChange={(event) => setPriority(event.target.value as IssuePriority)}
            aria-label="Priority"
          >
            {ISSUE_PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {priorityLabel(p)}
              </option>
            ))}
          </select>
          <select
            className="select"
            value={assigneeId}
            onChange={(event) => setAssigneeId(event.target.value)}
            aria-label="Assignee"
          >
            <option value="">Unassigned</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="composer__footer">
          <button className="btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={submit} disabled={!canSubmit}>
            Create issue
          </button>
        </div>
      </div>
    </div>
  );
}
