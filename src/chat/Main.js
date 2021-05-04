import React, { useState, useEffect, useMemo, useCallback } from "react";
import Input from "./Input";
import Messages from "./Messages";
import "./css/style.css";

const random_name = require("node-random-name");

var randomColor = require("randomcolor");

const ROOM_NAME = "observable-room";

function getRandomColor() {
  const color = randomColor({
    luminosity: "light",
    format: "rgb",
  });
  return color;
}

export default function Main() {
  const [member, setMember] = useState({
    name: random_name(),
    color: getRandomColor(),
  });
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
