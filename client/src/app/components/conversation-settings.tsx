import { useState } from "react";

import { Select } from "../components/select";

type ConversationType = "conversation" | "listenAndSpeak";

export function ConversationSettings() {
  const [conversationType, setConversationType] =
    useState<ConversationType>("conversation");

  return (
    <div className="flex">
      <ConversationType
        conversationType={conversationType}
        setConversationType={setConversationType}
      />
    </div>
  );
}

function ConversationType({
  conversationType,
  setConversationType,
}: {
  conversationType: "conversation" | "listenAndSpeak";
  setConversationType: (conversationType: ConversationType) => void;
}) {
  return (
    <Select
      name="status"
      label="Project status"
      aria-label="Project status"
      selected={conversationType}
      setSelected={(selected) => {
        setConversationType(selected.value as ConversationType);
      }}
      options={[
        { value: "conversation", label: "Conversation" },
        { value: "listenAndSpeak", label: "Listen & Speak" },
      ]}
    ></Select>
  );
}

// function Loop({
//   enabled,
//   setEnabled,
// }: {
//   enabled: boolean;
//   setEnabled: (enabled: boolean) => void;
// }) {
//   return (
//     <fieldset className="flex">
//       <label className={`${enabled ? "text-black" : "text-gray-300"}`}>
//         <span className="text-lg font-semibold">Loop</span>
//       </label>
//       <Switch
//         checked={enabled}
//         setChecked={() => {
//           setEnabled(!enabled);
//         }}
//       />
//     </fieldset>
//   );
// }

// function ListenAndSpeakSettings() {
//   return (
//     <div className="flex">
//       {/* Repeats */}
//       <label htmlFor="">Repeats</label>
//       {/* Speed */}

//       <label htmlFor="">Speed</label>
//     </div>
//   );
// }
