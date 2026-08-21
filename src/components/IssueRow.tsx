import type { Issue } from "@/models";
import { issueService } from "@/services/issueService";
import { Avatar } from "./Avatar";
import { PriorityIcon } from "./PriorityIcon";

interface IssueRowProps {
  issue: Issue;
}

export function IssueRow({ issue }: IssueRowProps) {
  const assignee = issueService.getUser(issue.assigneeId);
  const labels = issueService.getLabels(issue.labelIds);

  return (
    <div className="issue-row" data-testid="issue-row">
      <span className="issue-row__priority">
        <PriorityIcon priority={issue.priority} />
      </span>
      <span className="issue-row__id">{issue.identifier}</span>
      <span className="issue-row__title">{issue.title}</span>
      <span className="issue-row__labels">
        {labels.map((label) => (
          <span key={label.id} className="label-chip">
            <span className="label-chip__dot" style={{ background: label.color }} />
            {label.name}
          </span>
        ))}
      </span>
      <Avatar user={assignee} />
    </div>
  );
}
