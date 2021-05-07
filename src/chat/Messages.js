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

  const mappedMessages = messages
    .map((message) => {
      const { name, color } = message.member.clientData;
      const { id } = message.member;
      const { data } = message;
      return { id: id, name: name, color: color, messages: [data] };
    })
    .reduce((array, message) => {
      const { id, name, color } = message;
      const data = message.messages;
      if (array.length !== 0) {
        if (array[array.length - 1].name === name) {
          const newMessage = {
            id: id,
            name: name,
            color: color,
            messages: [...array[array.length - 1].messages, data],
          };

          array[array.length - 1] = newMessage;

          return array;
        } else {
          const newArray = [
            ...array,
            { id: id, name: name, color: color, messages: [data] },
          ];
          return (array = newArray);
        }
      } else {
        return (array = [
          { id: id, name: name, color: color, messages: [data] },
        ]);
      }
    }, []);

  return (
    <ul className="list">
      {mappedMessages.map((message) => {
        const { id, name, color } = message;

        const myMessage = id === currentMember.id;

        console.log(id);
        console.log(currentMember.id);

        return (
          <li className={myMessage ? "message fromMe" : "message"} key={id}>
            <span style={{ color: color }} className="member">
              {name}
            </span>
            {message.messages.map((mess, i) => {
              return (
                <span key={i} style={{ background: color }} className="text">
                  {mess}
                </span>
              );
            })}
          </li>
        );
      })}
      <div ref={messagesEndRef} />
    </ul>
  );
}
