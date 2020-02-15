import React, { Component } from "react";
import HeartRateStyle from "./HeartRate.module.css";
class HeartRate extends Component {
  render() {
    return (
      <div className={HeartRateStyle.heartShow}>
        <p className={HeartRateStyle.beats}>73</p>
        <i
          className={HeartRateStyle.iconWrapper +" fas fa-heartbeat"}
        ></i>
      </div>
    );
  }
}

export default HeartRate;
