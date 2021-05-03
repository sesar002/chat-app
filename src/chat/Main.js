import React, { useState, useEffect, useMemo, useCallback } from "react";
import Input from "./Input";
import Messages from "./Messages";
import "./css/style.css";

const random_name = require("node-random-name");

const ROOM_NAME = "room_name";

function getRandomColor() {
  const letters = ["B", "C", "D", "E", "F"];
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export default function Main() {
  const [member, setMember] = useState({});
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState(null);

  const drone = useMemo(
    () => new window.Scaledrone("meflNXPM4zkSd7rh", { data: member }),
    []
  );

  useEffect(() => {
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      setMember({
        name: random_name(),
        color: getRandomColor(),
        id: drone.clientId,
      });

      const room = drone.subscribe(ROOM_NAME);

      setRoom(room);

      room.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        setIsLoading(false);
      });

      room.on("message", (message) => {
        // svaki puta kada se event message pojavi u roomu, izvršiti će se funkcija u setMessages, callback ce dohvatiti zadnje stanje messages-a
        setMessages((messages) => [...messages, message]);
      });
    });
  }, []);

  const sendMessage = useCallback(
    (message) => {
      drone.publish({
        room: ROOM_NAME,
        message,
      });
    },
    [drone]
  );

  return (
    <div className="main">
      <div className="container">
        <Messages currentMember={member} messages={messages} />
        <Input isLoading={isLoading} sendMessage={sendMessage} />
      </div>
    </div>
  );
}
