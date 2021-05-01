import React from "react";
import "./css/style.css";

export default function Messages({ currentMember, messages }) {
  return (
    <ul className="list">
      {messages.map((message) => {
        return <li key={message.id}>{message.data}</li>;
      })}
    </ul>
  );
}
