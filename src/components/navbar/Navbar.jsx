// hace parte de la nevegacion de header__________________
import "./navbar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
          <Link to="/" style={{ textDecoration: "none" }}>
            Atras
            </Link>
          </div>
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            Español
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEh-k8LuPRCBvZp80lskW4d4FXtwjvFJcjmM9Ew2eDA0cbbhi7jdzDv3oMYMoyy0QGzG4KKmZDUB9lsvYUDMD2uJThyuj2u_iGKhyshYGul5sA-7Oo9EU8mh7_-JlJKmMkOE2IPva9Qrmj6V9JRTha3M1hXUoGeAgoZPzB7Rq4WpOim2-ryuH7USOHEu"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
