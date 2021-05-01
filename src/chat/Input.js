import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const inputTrim = this.state.inputText.trim();
    if (inputTrim.length > 0) {
      this.props.sendMessage(this.state.inputText);
      this.setState({ inputText: "" });
    } else {
      return;
    }
  };

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter message and press enter or Send Button"
          value={this.state.inputText}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          disabled={this.props.isLoading}
          type="Submit"
          value="Send"
          autoFocus={true}
        />
      </form>
    );
  }
}
