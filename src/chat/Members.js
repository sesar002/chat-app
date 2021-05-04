import React from "react";
import "./css/style.css";

export default function Members(members) {
  console.log(members);
  return (
    <div className="members">
      <span>Online: </span>
      {members.members.map((member) => (
        <span>{member.clientData.name}, </span>
      ))}
    </div>
  );
}
