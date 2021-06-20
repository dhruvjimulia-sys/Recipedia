import React, { Component } from "react";
import "../styles/style.css";

import SideBar from "./sideBar";
import SearchPage from "./searchPage";

class MainPage extends Component {
  render() {
    return <div className="mainpage">{this.renderMainPage()}</div>;
  }

  renderMainPage() {
    if (window.screen.width >= 768) {
      return (
        <React.Fragment>
          <SideBar />
          <SearchPage />
        </React.Fragment>
      );
    }
  }
}

export default MainPage;
