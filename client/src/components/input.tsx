export function Input({
  value,
  type,
  id,
  name,
  placeholder,
  onChange,
}: {
  id?: string;
  value: string;
  name: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="my-4 p-2 flex-grow rounded-l h-12 dark:bg-bg-2-light dark:text-accent-1-dark border-t border-b border-l dark:border-accent-2-dark border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-accent-2-light focus:ring-opacity-50"
      value={value}
      onChange={onChange}
    />
  );
}
