import React from "react";
import "./css/style.css";

export default function Members(members) {
  console.log(members);
  return (
    <div className="members">
      <span>Online: </span>
      {members.members.map((member, index) => {
        if (members.members.length === index + 1) {
          return <span key={member.id}>{member.clientData.name} </span>;
        } else {
          return <span key={member.id}>{member.clientData.name}, </span>;
        }
      })}
    </div>
  );
}
