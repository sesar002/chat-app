import React, { useEffect, useRef } from "react";
import "./css/style.css";

export default function Messages({ currentMember, messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  let newMessages = messages.reduce((array, message) => {
    const { name } = message.member.clientData;
    const { data } = message;
    if (array.length !== 0) {
      if (array.name === name) {
        const messagesArray = [...array.messages, data];
        return (array = [{ name: name, messages: [...messagesArray] }]);
      }
    } else {
      return (array = [{ name: name, messages: [data] }]);
    }
  }, []);

  console.log(newMessages);

  return (
    <ul className="list">
      {messages.map((message, i, a) => {
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
      <div ref={messagesEndRef} />
    </ul>
  );
}
