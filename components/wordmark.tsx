export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "text-2xl sm:text-3xl"
      : size === "sm"
        ? "text-lg"
        : "text-xl";

  return (
    <span
      className={`font-serif font-semibold tracking-tight text-ink ${sizeClass} ${className}`}
    >
      Verrick <span className="text-accent">AI</span>
    </span>
  );
}
