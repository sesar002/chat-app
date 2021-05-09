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
      const { data, timestamp } = message;
      return {
        id: id,
        name: name,
        color: color,
        messages: [{ data: data, timestamp: timestamp }],
      };
    })
    .reduce((array, message) => {
      console.log(message);
      const { id, name, color } = message;
      const { data, timestamp } = message.messages[0];
      if (array.length !== 0) {
        if (array[array.length - 1].name === name) {
          const newMessage = {
            id: id,
            name: name,
            color: color,
            messages: [
              ...array[array.length - 1].messages,
              { data: data, timestamp: timestamp },
            ],
          };

          array[array.length - 1] = newMessage;

          return array;
        } else {
          const newArray = [
            ...array,
            {
              id: id,
              name: name,
              color: color,
              messages: [{ data: data, timestamp: timestamp }],
            },
          ];
          return (array = newArray);
        }
      } else {
        return (array = [
          {
            id: id,
            name: name,
            color: color,
            messages: [{ data: data, timestamp: timestamp }],
          },
        ]);
      }
    }, []);

  console.log(messages);

  return (
    <ul className="list">
      {mappedMessages.map((message) => {
        const { id, name, color } = message;

        const myMessage = id === currentMember.id;

        return (
          <li className={myMessage ? "message fromMe" : "message"} key={id}>
            <span style={{ color: color }} className="member">
              {name}
            </span>
            {message.messages.map((mess, i) => {
              const time = new Date(mess.timestamp * 1000);

              const hours = time.getHours();
              const minutes = time.getMinutes();
              return (
                <div key={i} style={{ background: color }} className="text">
                  <span>{mess.data}</span>
                  <span className="time">
                    {(hours > 9 ? hours : "0" + hours) +
                      ":" +
                      (minutes > 9 ? minutes : "0" + minutes)}
                  </span>
                </div>
              );
            })}
          </li>
        );
      })}
      <div ref={messagesEndRef} />
    </ul>
  );
}
