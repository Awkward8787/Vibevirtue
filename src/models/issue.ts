export type IssueStatus =
  | "backlog"
  | "todo"
  | "in_progress"
  | "done"
  | "canceled";

export type IssuePriority = "no_priority" | "urgent" | "high" | "medium" | "low";

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface Issue {
  id: string;
  /** Human-facing identifier, e.g. "VV-12". */
  identifier: string;
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  assigneeId: string | null;
  labelIds: string[];
  createdAt: string;
  updatedAt: string;
}

export const ISSUE_STATUSES: readonly IssueStatus[] = [
  "backlog",
  "todo",
  "in_progress",
  "done",
  "canceled",
] as const;

export const ISSUE_PRIORITIES: readonly IssuePriority[] = [
  "urgent",
  "high",
  "medium",
  "low",
  "no_priority",
] as const;

export function statusLabel(status: IssueStatus): string {
  switch (status) {
    case "backlog":
      return "Backlog";
    case "todo":
      return "Todo";
    case "in_progress":
      return "In Progress";
    case "done":
      return "Done";
    case "canceled":
      return "Canceled";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}

export function priorityLabel(priority: IssuePriority): string {
  switch (priority) {
    case "urgent":
      return "Urgent";
    case "high":
      return "High";
    case "medium":
      return "Medium";
    case "low":
      return "Low";
    case "no_priority":
      return "No priority";
    default: {
      const exhaustive: never = priority;
      return exhaustive;
    }
  }
}
