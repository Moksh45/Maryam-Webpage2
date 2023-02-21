import React from "react";
import "./Home.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="homeSetting">
          <SettingsIcon fontSize="large" />
        </div>
        <div className="homeApps">
          <AppsIcon fontSize="large" />
        </div>
      </div>

      <div className="home_body">
        <div className="webName">Webpage</div>
        <div className="home_inputContainer">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
