import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Header.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__left">
          <InstagramIcon style={{ height: "16px" }} />
          <TwitterIcon style={{ height: "16px" }} />
          <FacebookIcon style={{ height: "16px" }} />
          <GitHubIcon style={{ height: "16px" }} />
        </div>
        <div className="header__top__right">
          <span className="header__top__text">{currentUser?.username}</span>
          {currentUser ? (
            <Link className="header__top__link" to="/logout">
              <LogoutIcon style={{ height: "16px" }} onClick={logout} />
            </Link>
          ) : (
            <Link className="header__top__link" to="/login">
              <span>Login</span>
            </Link>
          )}
          <SearchIcon style={{ height: "16px" }} />{" "}
          <Link className="header__top__link" to="/write">
            <UploadIcon style={{ height: "16px" }} />
          </Link>
        </div>
      </div>
      <div className="header__bottom">
        <Link className="header__bottom__title" to="/">
          <h1 className="header__bottom__title">FOOD & LIVING</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
