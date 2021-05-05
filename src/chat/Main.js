import React, { useState, useEffect, useMemo, useCallback } from "react";
import Input from "./Input";
import Messages from "./Messages";
import "./css/style.css";
import Members from "./Members";

const CHANNEL_ID = "meflNXPM4zkSd7rh";

const random_name = require("node-random-name");

var randomColor = require("randomcolor");

const ROOM_NAME = "observable-room";

const getRandomColor = () => {
  const color = randomColor({
    luminosity: "light",
    format: "rgb",
  });
  return color;
};

export default function Main() {
  const [member, setMember] = useState({
    name: random_name(),
    color: getRandomColor(),
  });
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const drone = useMemo(
    () => new window.Scaledrone(CHANNEL_ID, { data: member }),
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

      room.on("members", (members) => {
        setMembers(() => [...members]);
      });

      room.on("member_join", (member) => {
        setMembers((members) => [...members, member]);
      });

      room.on("member_leave", ({ id }) => {
        setMembers((members) => members.filter((member) => member.id !== id));
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
        <Members members={members} />
        <Messages
          currentMember={member}
          messages={messages}
          members={members}
        />
        <Input isLoading={isLoading} sendMessage={sendMessage} />
      </div>
    </div>
  );
}
