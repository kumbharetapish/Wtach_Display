import React, { Component } from "react";
import TimeStyle from "./Buttons.module.css";
class Buttons extends Component {
  render() {
    return (
      <div className={TimeStyle.featuresBtnWrapper}>
        <h1>{"Features"}</h1>
        <div className={TimeStyle.features}>
          <button className={TimeStyle.timeBtn} onClick={this.props.time}>
            {"Time"}
          </button>
          <button className={TimeStyle.heartBtn} onClick={this.props.heartRate}>
            {"Heart Rate"}
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
