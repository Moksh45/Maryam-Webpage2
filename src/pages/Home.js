import React from "react";
import "./Home.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="homeSetting">
          <SettingsOutlinedIcon fontSize="large" style={{color:"white"}}/>
        </div>
        <div className="homeApps">
          <AppsOutlinedIcon fontSize="large" style={{color:"white"}}/>
        </div>
      </div>

      <div className="home_body">
        <div className="webName">Webpage</div>
        <div className="home_inputContainer">
          {/* Search */}
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Home;
