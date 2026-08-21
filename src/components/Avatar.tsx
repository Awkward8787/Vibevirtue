import type { User } from "@/models";

interface AvatarProps {
  user: User | null;
}

export function Avatar({ user }: AvatarProps) {
  if (!user) {
    return (
      <span className="avatar avatar--empty" title="Unassigned" aria-label="Unassigned">
        ?
      </span>
    );
  }
  return (
    <span
      className="avatar"
      style={{ background: user.avatarColor }}
      title={user.name}
      aria-label={user.name}
    >
      {user.initials}
    </span>
  );
}
