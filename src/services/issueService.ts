import type { Issue, IssuePriority, IssueStatus, Label, User } from "@/models";
import { SEED_ISSUES, SEED_LABELS, SEED_USERS } from "./seed";

export interface CreateIssueInput {
  title: string;
  description?: string;
  status?: IssueStatus;
  priority?: IssuePriority;
  assigneeId?: string | null;
  labelIds?: string[];
}

/**
 * In-memory mock backend seeded with deterministic data. State lives for the
 * lifetime of the page session; there is no network or persistence layer.
 */
class IssueService {
  private issues: Issue[];
  private readonly users: User[];
  private readonly labels: Label[];
  private nextSequence: number;

  constructor() {
    this.issues = SEED_ISSUES.map((issue) => ({ ...issue }));
    this.users = SEED_USERS.map((user) => ({ ...user }));
    this.labels = SEED_LABELS.map((label) => ({ ...label }));
    this.nextSequence =
      this.issues.reduce((max, issue) => {
        const n = Number(issue.identifier.split("-")[1] ?? "0");
        return Number.isFinite(n) ? Math.max(max, n) : max;
      }, 0) + 1;
  }

  listIssues(): Issue[] {
    return this.issues.map((issue) => ({ ...issue }));
  }

  listUsers(): User[] {
    return this.users.map((user) => ({ ...user }));
  }

  listLabels(): Label[] {
    return this.labels.map((label) => ({ ...label }));
  }

  getUser(id: string | null): User | null {
    if (!id) return null;
    const user = this.users.find((u) => u.id === id);
    return user ? { ...user } : null;
  }

  getLabels(ids: string[]): Label[] {
    return ids
      .map((id) => this.labels.find((label) => label.id === id))
      .filter((label): label is Label => Boolean(label))
      .map((label) => ({ ...label }));
  }

  createIssue(input: CreateIssueInput): Issue {
    const sequence = this.nextSequence++;
    const timestamp = new Date().toISOString();
    const issue: Issue = {
      id: `i_${sequence}`,
      identifier: `VV-${sequence}`,
      title: input.title.trim(),
      description: input.description?.trim() ?? "",
      status: input.status ?? "todo",
      priority: input.priority ?? "no_priority",
      assigneeId: input.assigneeId ?? null,
      labelIds: input.labelIds ?? [],
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    this.issues = [issue, ...this.issues];
    return { ...issue };
  }

  updateStatus(id: string, status: IssueStatus): Issue | null {
    const issue = this.issues.find((i) => i.id === id);
    if (!issue) return null;
    issue.status = status;
    issue.updatedAt = new Date().toISOString();
    return { ...issue };
  }
}

export const issueService = new IssueService();
