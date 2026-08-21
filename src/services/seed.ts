import type { Issue, Label, User } from "@/models";

/**
 * Deterministic seed data. All timestamps are fixed literals so the mock
 * service produces identical state on every load (no Date.now / Math.random).
 */

export const SEED_USERS: readonly User[] = [
  { id: "u_ada", name: "Ada Lovelace", initials: "AL", avatarColor: "#6e56cf" },
  { id: "u_grace", name: "Grace Hopper", initials: "GH", avatarColor: "#0ea5e9" },
  { id: "u_alan", name: "Alan Turing", initials: "AT", avatarColor: "#f97316" },
  { id: "u_katherine", name: "Katherine Johnson", initials: "KJ", avatarColor: "#10b981" },
];

export const SEED_LABELS: readonly Label[] = [
  { id: "l_bug", name: "Bug", color: "#eb5757" },
  { id: "l_feature", name: "Feature", color: "#5e6ad2" },
  { id: "l_design", name: "Design", color: "#d160c4" },
  { id: "l_infra", name: "Infra", color: "#4cb782" },
];

export const SEED_ISSUES: readonly Issue[] = [
  {
    id: "i_1",
    identifier: "VV-1",
    title: "Set up Cloud Agent development environment",
    description:
      "Bootstrap the app, configure .cursor/environment.json, and validate an end-to-end run.",
    status: "in_progress",
    priority: "urgent",
    assigneeId: "u_ada",
    labelIds: ["l_infra"],
    createdAt: "2026-08-01T09:00:00.000Z",
    updatedAt: "2026-08-01T09:00:00.000Z",
  },
  {
    id: "i_2",
    identifier: "VV-2",
    title: "Design the issue list layout",
    description: "Linear-inspired grouped list with status headers and priority indicators.",
    status: "todo",
    priority: "high",
    assigneeId: "u_katherine",
    labelIds: ["l_design", "l_feature"],
    createdAt: "2026-08-02T11:30:00.000Z",
    updatedAt: "2026-08-02T11:30:00.000Z",
  },
  {
    id: "i_3",
    identifier: "VV-3",
    title: "Fix priority sort order on backlog",
    description: "Urgent issues should always float to the top within a group.",
    status: "backlog",
    priority: "medium",
    assigneeId: "u_grace",
    labelIds: ["l_bug"],
    createdAt: "2026-08-03T14:10:00.000Z",
    updatedAt: "2026-08-03T14:10:00.000Z",
  },
  {
    id: "i_4",
    identifier: "VV-4",
    title: "Add keyboard shortcut to create issue",
    description: "Pressing C anywhere opens the composer, matching Linear behavior.",
    status: "todo",
    priority: "low",
    assigneeId: null,
    labelIds: ["l_feature"],
    createdAt: "2026-08-04T08:45:00.000Z",
    updatedAt: "2026-08-04T08:45:00.000Z",
  },
  {
    id: "i_5",
    identifier: "VV-5",
    title: "Wire up deterministic mock service",
    description: "Seeded in-memory store so the UI has stable data with no backend.",
    status: "done",
    priority: "high",
    assigneeId: "u_alan",
    labelIds: ["l_infra"],
    createdAt: "2026-08-05T16:20:00.000Z",
    updatedAt: "2026-08-06T10:05:00.000Z",
  },
  {
    id: "i_6",
    identifier: "VV-6",
    title: "Deprecated auth flow cleanup",
    description: "Old token exchange path is no longer needed.",
    status: "canceled",
    priority: "no_priority",
    assigneeId: "u_grace",
    labelIds: [],
    createdAt: "2026-08-06T12:00:00.000Z",
    updatedAt: "2026-08-07T09:15:00.000Z",
  },
];
