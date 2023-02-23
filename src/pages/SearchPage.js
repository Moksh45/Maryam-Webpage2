import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useWebApi from "./useWebApi";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

import Response from "../Response";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useWebApi(term);

  //Mock API CALL
  // const data = Response;
  // console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="title">Webpage</div>
        </Link>
        <div className="searchPage_headerBody">
          <Search hideShortCut />
          <div className="searchPage_option">
            <div className="searchPage_optionLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionOutlinedIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <InsertPhotoOutlinedIcon />
                <Link to="/image">Image</Link>
              </div>
              <div className="searchPage_option">
                <PlayArrowOutlinedIcon />
                <Link to="/video">Video</Link>
              </div>
              <div className="searchPage_option">
                <ShoppingCartOutlinedIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomOutlinedIcon />
                <Link to="/maps">Maps</Link>
              </div>
            </div>
            <div className="searchPage_optionRight">
              <div className="searchPage_optionRightSetting">
                <Link to="/setting">
                  <SettingsOutlinedIcon
                    style={{ color: "gray" }}
                    fontSize="large"
                  />
                </Link>
              </div>
              <div className="searchPage_optionRightApps">
                <Link to="/setting">
                  <AppsOutlinedIcon
                    style={{ color: "gray" }}
                    fontSize="large"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
      <div className="searchPage_results">
        {data.output.results.map((item) => (
          <div className="searchPage_result">
            <a className="searchPage_resultLink" href={item.c}>
              {item.a}
            </a>
            <a className="searchPage_resultTitle" href={item.a}>
              <h2>{item.t}</h2>
            </a>
            <p className="searchPage_resultSnippet">{item.d}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default SearchPage;