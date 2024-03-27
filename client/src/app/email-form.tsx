import React, { useState } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!process.env.EMAIL_SIGNUP_URL) {
      throw new Error("EMAIL_SIGNUP_URL is required");
    }

    try {
      const response = await fetch(process.env.EMAIL_SIGNUP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };
  return (
    <form className="flex flex-col items-center justify-center">
      <label htmlFor="email" className="my-4 text-xl">
        Subscribe for daily Vietnamese conversations.
      </label>
      <div className="flex justify-evenly items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className="my-4 mr-2 p-2 flex-grow rounded border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="my-4 px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </form>
  );
}
