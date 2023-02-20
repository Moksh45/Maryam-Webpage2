import React from "react";
import "./Home.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="homeSetting">
          <SettingsIcon />
        </div>
        <div className="homeApps">
          <AppsIcon />
        </div>
      </div>

      <div className="home_body"></div>
    </div>
  );
}

export default Home;
