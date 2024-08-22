"use client";

import { HandleEmailSignupRequestBody } from "@functional-vietnamese/cloud-function-events";
import React, { useState } from "react";

import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";

export function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!process.env.NEXT_PUBLIC_EMAIL_SIGNUP_URL) {
      throw new Error("EMAIL_SIGNUP_URL is required");
    }

    const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_SIGNUP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email } as HandleEmailSignupRequestBody),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="my-4 text-3xl text-center max-w-xl">
        Subscribe now for daily Viatnamese conversations, delivered to your
        inbox.
      </label>
      <div className="flex justify-evenly items-center">
        <Input
          value={email}
          className="rounded-r-none"
          type="email"
          name="email"
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="rounded-l-none"> Subscribe</Button>
      </div>
    </form>
  );
}
