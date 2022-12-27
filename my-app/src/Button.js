import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "변경 전 텍스트",
    };
  }

  changeText = () => {
    this.setState({
      text: "변경 성공!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.changeText}>버튼</button>
      </div>
    );
  }
}
