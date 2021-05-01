import React from "react";

export default function Messages({ currentMember, messages }) {
  console.log(currentMember);

  return (
    <div>
      <div style={{ background: currentMember.color, width: 100, height: 100 }}>
        <span>{currentMember.name}</span>
      </div>
    </div>
  );
}
