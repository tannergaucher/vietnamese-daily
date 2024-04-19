export function Button({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className="p-3 rounded-r shadow h-12 bg-accent-2-light hover:bg-accent-1-light text-accent-1-light hover:text-accent-2-light dark:bg-accent-2-dark dark:hover:bg-accent-1-dark dark:text-accent-1-dark dark:hover:text-accent-2-dark border-t border-b border-r dark:border-accent-2-dark border-none"
    >
      {children}
    </button>
  );
}
