import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import imageIcon from "./image/image_icon.png";
import newsIcon from "./image/news_icon.png";
import socialIcon from "./image/social_icon.png";
import videoIcon from "./image/video_icon.png";
import { useNavigate } from "react-router-dom";

function Search({hideShortCut = false}) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate("/search");
    }
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search anything"
        />
        <MicIcon />
      </div>

      {!hideShortCut ?(
        <div className="shortCut">
        <a href="/Image">
          <img src={imageIcon} alt="Images" />
          <span>Images</span>
        </a>
        <a href="/News">
          <img src={newsIcon} alt="News" />
          <span>News</span>
        </a>
        <a href="/Social">
          <img src={socialIcon} alt="Social" />
          <span>Social</span>
        </a>
        <a href="/Video">
          <img src={videoIcon} alt="Shopping" />
          <span>Video</span>
        </a>
      </div>
      ):(
        <div className="shortCut">
        <div className="shortCut_hidden">
        <a href="/Image">
          <img src={imageIcon} alt="Images" />
          <span>Images</span>
        </a>
        <a href="/News">
          <img src={newsIcon} alt="News" />
          <span>News</span>
        </a>
        <a href="/Social">
          <img src={socialIcon} alt="Social" />
          <span>Social</span>
        </a>
        <a href="/Video">
          <img src={videoIcon} alt="Shopping" />
          <span>Video</span>
        </a>
        </div>
      </div>
      )}
      
    </form>
  );
}

export default Search;
