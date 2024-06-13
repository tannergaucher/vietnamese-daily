import { useState } from "react";

import { Select } from "../components/select";
import { Switch } from "../components/switch";

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
      {conversationType === "listenAndSpeak" ? (
        <div>
          <ListenAndSpeakPlaySettings />
        </div>
      ) : null}
      {conversationType === "conversation" ? (
        <div>
          <ConversationPlaySettings />
        </div>
      ) : null}
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
        setConversationType(selected as ConversationType);
      }}
      options={[
        { value: "conversation", label: "Conversation" },
        { value: "listenAndSpeak", label: "Listen & Speak" },
      ]}
    ></Select>
  );
}

function ConversationPlaySettings() {
  const [loop, setLoop] = useState(false);
  return (
    <div className="flex">
      <label htmlFor="">Loop</label>
      <Switch checked={loop} setChecked={setLoop} />
    </div>
  );
}

function ListenAndSpeakPlaySettings() {
  const [selected, setSelected] = useState(3);

  return (
    <div className="flex">
      <Select
        name="repeats"
        label="repeats"
        selected={selected}
        setSelected={(selected) => {
          setSelected(selected as number);
        }}
        options={[
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
        ]}
      />
    </div>
  );
}
