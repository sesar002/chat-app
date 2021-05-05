import React from "react";
import "./css/style.css";

export default function Messages({ currentMember, messages, members }) {
  return (
    <ul className="list">
      {messages.map((message) => {
        const myMessage = message.clientId === currentMember.id;

        const { name, color } = message.member.clientData;

        return (
          <li
            className={myMessage ? "message fromMe" : "message"}
            key={message.id}
          >
            <span style={{ color: color }} className="member">
              {name}
            </span>
            <span style={{ background: color }} className="text">
              {message.data}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
