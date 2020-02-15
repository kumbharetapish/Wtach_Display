import React, { Component } from "react";
import timeStyle from "./Time.module.css";

class Time extends Component {
  state = { time: new Date() };

  time = () => {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  };

  render() {
    return (
      <div className={timeStyle.timeShow}>
        <div className={timeStyle.clock}>
          {this.state.time.toLocaleTimeString()}{" "}
        </div>
        {this.time()}
      </div>
    );
  }
}

export default Time;
