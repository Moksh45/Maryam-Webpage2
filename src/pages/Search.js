import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import imageIcon from './image/image_icon.png';
import newsIcon from './image/news_icon.png';
import socialIcon from './image/social_icon.png';
import videoIcon from './image/video_icon.png';

const Search = () => {
  return (
    <div className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input placeholder="Search anything" />
        <MicIcon />
      </div>
      <div className="shortCut">
        <a href="/Image">
          <img src= {imageIcon} alt="Images" />
          <span>Images</span>
        </a>
        <a href="/News">
          <img src= {newsIcon} alt="News" />
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
  );
};

export default Search;
