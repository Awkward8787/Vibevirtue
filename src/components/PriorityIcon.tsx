import type { IssuePriority } from "@/models";

interface PriorityIconProps {
  priority: IssuePriority;
}

/** Linear-style priority indicator: urgent badge, bar meter, or dashes. */
export function PriorityIcon({ priority }: PriorityIconProps) {
  if (priority === "urgent") {
    return (
      <span className="priority-urgent" title="Urgent" aria-label="Urgent">
        !
      </span>
    );
  }
  if (priority === "no_priority") {
    return (
      <span className="priority-bars" title="No priority" aria-label="No priority">
        <span style={{ height: 3 }} />
        <span style={{ height: 3 }} />
        <span style={{ height: 3 }} />
      </span>
    );
  }

  const levels: Record<Exclude<IssuePriority, "urgent" | "no_priority">, number> = {
    high: 3,
    medium: 2,
    low: 1,
  };
  const filled = levels[priority];

  return (
    <span className="priority-bars" title={priority} aria-label={priority}>
      <span className={filled >= 1 ? "on" : ""} style={{ height: 5 }} />
      <span className={filled >= 2 ? "on" : ""} style={{ height: 8 }} />
      <span className={filled >= 3 ? "on" : ""} style={{ height: 11 }} />
    </span>
  );
}
