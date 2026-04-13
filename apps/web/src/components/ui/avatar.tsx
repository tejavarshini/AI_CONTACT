type AvatarProps = {
  name: string;
  size?: number;
};

export function Avatar({ name, size = 42 }: AvatarProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className={`avatar ${size > 42 ? "avatar--lg" : ""}`.trim()} aria-label={name}>
      {initials || "?"}
    </div>
  );
}
