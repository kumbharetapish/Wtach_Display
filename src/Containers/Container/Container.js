import React, { Component } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import Watch from "../../Components/Watch/Watch";
import Heading from "../../Components/Heading/Heading";
import BandStrap from "../../Components/BandStraps/BandStrap";
import Buttons from "../../Components/Buttons/Buttons";
import HeartRate from "../../Components/HeartRate/HeartRate";
import Time from "../../Components/Time/Time";
import ContainerStyle from "./Container.module.css";
class Container extends Component {
  constructor(props) {
    super(props);

    this.state = { src: "", status: true };
  }
  handleClick = props => {
    this.setState({ src: props });
    return props;
  };

  showTime = () => {
    this.setState({
      status: true
    });
  };

  showHeartRate = () => {
    this.setState({
      status: false
    });
  };

  render() {
    let watchDisplay = this.state.status !== true ? <HeartRate /> : <Time />;

    return (
      <div>
        <TopBar />
        <div className={ContainerStyle.section}>
          <Watch BandStrap={this.state.src}>{watchDisplay}</Watch>
          <div>
            <Heading />
            <BandStrap handleClick={this.handleClick} />
            <Buttons time={this.showTime} heartRate={this.showHeartRate} />
            <button className={ContainerStyle.btn}>{"BUY NOW"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
