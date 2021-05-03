import React from "react";
import "./css/style.css";

export default function Messages({ currentMember, messages }) {
  return (
    <ul className="list">
      {messages.map((message) => {
        const myMessage = message.clientId === currentMember.id;
        console.log(message);
        return (
          <li
            className={myMessage ? "message fromMe" : "message"}
            key={message.id}
          >
            <span>{message.data}</span>
          </li>
        );
      })}
    </ul>
  );
}
