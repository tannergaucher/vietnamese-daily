import React from "react";

export const SHARED =
  "transition-all duration-200 ease-in-out rounded p-3 shadow h-12 text-lg font-semibold";

export const PRIMARY = `${SHARED} bg-accent-2-light hover:bg-accent-1-light focus:bg-accent-1-light text-accent-1-light hover:text-accent-2-light focus:text-accent-2-light dark:bg-accent-2-dark dark:hover:bg-accent-1-dark dark:focus:bg-accent-1-dark dark:text-accent-1-dark dark:hover:text-accent-2-dark dark:focus:text-accent-2-dark dark:border-accent-2-dark`;

export const SECONDARY = `${SHARED} bg-bg-1-light border-2 border-bg-2-light text-accent-2-light hover:bg-bg-2-light focus:bg-bg-2-light hover:text-bg-1-light focus:text-bg-1-light dark:bg-bg-1-dark dark:border-2 dark:border-accent-1-dark  dark:text-accent-1-dark dark:hover:bg-accent-1-dark dark:focus:bg-accent-1-dark dark:hover:text-bg-1-dark dark:focus:text-bg-1-dark`;

export function Button({
  onClick,
  children,
  disabled,
  secondary,
  className,
  selected,
  label,
}: {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
  selected?: boolean;
  label?: string;
}) {
  return (
    <button
      aria-label={label}
      role="button"
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={`${className} leading-none ${secondary ? SECONDARY : PRIMARY}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${selected ? "dark:bg-accent-1-dark dark:text-bg-1-dark" : ""}
      `}
    >
      {children}
    </button>
  );
}
