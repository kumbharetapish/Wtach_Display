import React, { Component } from "react";
import WatchCss from "./Watch.module.css";

class Watch extends Component {
  constructor(props) {
    super(props);
    this.state = { src: "https://i.imgur.com/iOeUBV7.png" };
  }

  change = () => {
    this.setState({ src: this.props.BandStrap });
  };

  render() {
    var src =
      this.props.BandStrap === "" ? this.state.src : this.props.BandStrap;
    return (
      <div className={WatchCss.watchWrapper}>
        <div className={WatchCss.watch}>
          <img className={WatchCss.watchBand} src={src} alt={"band"} />
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Watch;
