import React from "react";
import topBarCss from "./TopBar.module.css";
const topBar = props => {
  return (
    <div className={topBarCss.navigation}>
      <img
        className={topBarCss.logo}
        src="https://images-eu.ssl-images-amazon.com/images/G/02/gc/designs/livepreview/amzn_logo_squid_noto_email_v2016_uk-main._CB463270308_.png"
        alt="Amazon-logo"
      />
    </div>
  );
};

export default topBar;
