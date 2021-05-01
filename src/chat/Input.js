import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter message and press enter or Send Button"
          onChange={() => {}}
        />
        <input type="Submit" value="Send" />
      </form>
    );
  }
}
