import React, { Component } from "react";
import BandStrapsStyle from "./BandStrap.module.css";
class BandStrap extends Component {
  state = {
    ImgSrc: [
      { src: "https://i.imgur.com/PTgQlim.png" },
      { src: "https://i.imgur.com/iOeUBV7.png" },
      { src: "https://i.imgur.com/Mplj1YR.png" },
      { src: "https://i.imgur.com/xSIK4M8.png" }
    ]
  };
  handleClick = props => {
    this.props.handleClick(props);
    return props;
  };
  render() {
    return (
      <div className={BandStrapsStyle.colorsBtnWrapper}>
        <h1>{"Select Color"}</h1>
        <div className={BandStrapsStyle.colors}>
          <div
            className={BandStrapsStyle.redBand}
            onClick={() => {
              this.handleClick(this.state.ImgSrc[0].src);
            }}
          ></div>

          <div
            className={BandStrapsStyle.blueBand}
            onClick={() => {
              this.handleClick(this.state.ImgSrc[2].src);
            }}
          ></div>

          <div
            className={BandStrapsStyle.blackBand}
            onClick={() => {
              this.handleClick(this.state.ImgSrc[1].src);
            }}
          ></div>

          <div
            className={BandStrapsStyle.purpleBand}
            onClick={() => {
              this.handleClick(this.state.ImgSrc[3].src);
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default BandStrap;
