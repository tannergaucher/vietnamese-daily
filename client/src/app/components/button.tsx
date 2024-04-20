export const PRIMARY =
  "transition-all duration-200 ease-in-out bg-accent-2-light hover:bg-accent-1-light focus:bg-accent-1-light text-accent-1-light hover:text-accent-2-light focus:text-accent-2-light dark:bg-accent-2-dark dark:hover:bg-accent-1-dark dark:focus:bg-accent-1-dark dark:text-accent-1-dark dark:hover:text-accent-2-dark dark:focus:text-accent-2-dark dark:border-accent-2-dark";

export const SECONDARY =
  "transition-all duration-200 ease-in-out bg-bg-1-light border border-bg-2-light text-accent-2-light hover:bg-bg-2-light focus:bg-bg-2-light hover:text-bg-1-light focus:text-bg-1-light dark:bg-bg-1-dark dark:border dark:border-accent-1-dark  dark:text-accent-1-dark dark:hover:bg-accent-1-dark dark:focus:bg-accent-1-dark dark:hover:text-bg-1-dark dark:focus:text-bg-1-dark";

export function Button({
  onClick,
  children,
  disabled,
  secondary,
  className,
}: {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={`${className} rounded p-3 shadow h-12 text-lg font-semibold ${
        secondary ? SECONDARY : PRIMARY
      }
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}
