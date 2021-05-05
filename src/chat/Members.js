import React from "react";
import "./css/style.css";

export default function Members(members) {
  return (
    <div className="members">
      <span>Online: </span>
      {members.members.map((member, index) => {
        const { name, color } = member.clientData;
        if (members.members.length === index + 1) {
          return (
            <span style={{ color: color }} key={member.id}>
              {name}{" "}
            </span>
          );
        } else {
          return (
            <span style={{ color: color }} key={member.id}>
              {name},{" "}
            </span>
          );
        }
      })}
    </div>
  );
}
