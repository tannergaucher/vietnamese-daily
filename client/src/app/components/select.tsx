import { Select as HeadlessSelect } from "@headlessui/react";

type SelectOption = { value: string | number; label: string };

export function Select({
  selected,
  setSelected,
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  selected: string | number;
  setSelected: (selected: string | number) => void;
  options: SelectOption[];
}) {
  return (
    <HeadlessSelect
      name={name}
      aria-label={label}
      value={selected}
      onChange={(e) => {
        console.log("e.target.value", e.target.value);
        console.log(options, "options");

        const selectedOption = options.find(
          (option) => option.value === e.target.value
        );

        if (!selectedOption?.value) {
          throw new Error("Invalid option value");
        }

        setSelected(selectedOption.value);
      }}
      className="block p-2 border border-gray-300 rounded-md background-color: bg-bg-2-light dark:bg-bg-2-dark dark:border-accent-1-dark focus:outline-none focus:border-accent-1-light dark:focus:border-accent-1-dark transition-colors duration-200"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </HeadlessSelect>
  );
}
