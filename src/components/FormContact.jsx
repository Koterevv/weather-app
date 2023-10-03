import axios from "axios";
import React, { useState } from "react";

export default function FormContact() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const sendForm = async () => {
    await axios.post('http://localhost:3000/', {
      email,
      text,
      name,
    })
  };

  return (
    <form
      // method="post"
      // action="http://localhost:3000"
      className="border-my-dark-cyan border rounded-xl p-3"
    >
      <div className="block mb-3">
        <label className="mr-2" htmlFor="name">
          Name:
        </label>
        <input
          className=" bg-white text-black"
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="block mb-3">
        <label className="mr-2" htmlFor="email">
          Email:
        </label>
        <input
          className=" bg-white text-black"
          type="text"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="block">
        <label className="mr-2 block" htmlFor="message">
          Your message
        </label>
        <textarea
          className="scrollbar w-full bg-white outline-none text-black p-2 resize-none []"
          name="text"
          id="text"
          cols="30"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          sendForm();
        }}
      >
        Send
      </button>
    </form>
  );
}
