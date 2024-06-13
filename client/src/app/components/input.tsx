import React from "react";

export const INPUT_CLASSES =
  "my-4 p-2 rounded h-12 dark:bg-bg-2-light dark:text-accent-1-dark dark:border-accent-2-dark border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-accent-2-light focus:ring-opacity-50 hover:ring-2 hover:ring-accent-2-light hover:ring-opacity-50";

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
      className={INPUT_CLASSES}
      value={value}
      onChange={onChange}
    />
  );
}
