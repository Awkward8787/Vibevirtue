import type { IssueStatus } from "@/models";
import { statusLabel } from "@/models";

const STATUS_DOT: Record<IssueStatus, string> = {
  backlog: "#8a8a94",
  todo: "#e2c15a",
  in_progress: "#f2994a",
  done: "#5e6ad2",
  canceled: "#63636c",
};

interface SidebarProps {
  counts: Record<IssueStatus, number>;
  active: IssueStatus | "all";
  onSelect: (filter: IssueStatus | "all") => void;
}

export function Sidebar({ counts, active, onSelect }: SidebarProps) {
  const statuses: IssueStatus[] = ["backlog", "todo", "in_progress", "done", "canceled"];
  const total = statuses.reduce((sum, s) => sum + counts[s], 0);

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__logo">V</span>
        Vibevirtue
      </div>

      <button
        className={`nav-item ${active === "all" ? "nav-item--active" : ""}`}
        onClick={() => onSelect("all")}
      >
        All issues
        <span className="nav-item__count">{total}</span>
      </button>

      <div className="sidebar__section">Workflow</div>
      {statuses.map((status) => (
        <button
          key={status}
          className={`nav-item ${active === status ? "nav-item--active" : ""}`}
          onClick={() => onSelect(status)}
        >
          <span className="nav-item__dot" style={{ background: STATUS_DOT[status] }} />
          {statusLabel(status)}
          <span className="nav-item__count">{counts[status]}</span>
        </button>
      ))}
    </aside>
  );
}
