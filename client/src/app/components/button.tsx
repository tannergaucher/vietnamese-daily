export function Button({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="p-3 rounded-r shadow h-12 bg-accent-2-light hover:bg-accent-1-light text-accent-1-light hover:text-accent-2-light dark:bg-accent-2-dark dark:hover:bg-accent-1-dark dark:text-accent-1-dark dark:hover:text-accent-2-dark border-t border-b border-r dark:border-accent-2-dark border-none"
    >
      {text}
    </button>
  );
}
