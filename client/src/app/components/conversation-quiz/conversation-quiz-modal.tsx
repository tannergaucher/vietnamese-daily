import { Transition } from "@headlessui/react";
import React, { useState } from "react";

import { Button } from "../button";

export function ConversationQuizModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Quiz</Button>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}

function Modal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Transition show={open}>
      <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-bg-2-light dark:bg-bg-2-dark p-4 rounded-lg">
          <h2>Quiz</h2>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </div>
    </Transition>
  );
}
