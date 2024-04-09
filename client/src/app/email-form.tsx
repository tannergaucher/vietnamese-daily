"use client";

import React, { useState } from "react";

import { HandleEmailSignupRequestBody } from "cloud-function-events";

export function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(process.env);

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
      <label htmlFor="email" className="my-4 text-xl text-center">
        Subscribe for daily Vietnamese conversations.
      </label>
      <div className="flex justify-evenly items-center">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          className="my-4 p-2 flex-grow rounded border h-12"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="p-3 rounded shadow h-12">
          Sign Up
        </button>
      </div>
    </form>
  );
}
