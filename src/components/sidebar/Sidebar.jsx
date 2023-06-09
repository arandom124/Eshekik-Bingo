import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import SportsEsportsSharpIcon from '@mui/icons-material/SportsEsportsSharp';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { signOut  } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"



const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <img style={{ width: '180px',height: '60px'}}
          src="https://blogger.googleusercontent.com/img/a/AVvXsEj4iSdonc91PymdRHwj6gvMA12dU4FPcZayleyF2PLE6h0YN_a6y3YJWNPQJ6OAJenKTRruhNDoS0DfyA96793K93I-yHJptLPS2XwB9lryWj4sBPGnKQtVvBLcTCa0xB2t-SY8LmouO3J4lMDkClwG1eWa1dB_hX1suL1rn9VpdO9l1-CSEX1NHHRm"
          alt=""
          className=""
        />
        {/* <span className="logo"><img src=""></img></span> */}
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Principal</p>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTAS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupAddSharpIcon className="icon" />
              <span>Usuarios</span>
            </li>
          </Link>
          

          <Link to="/users/test" style={{ textDecoration: "none" }}>
              <li>              
            <SportsEsportsSharpIcon className="icon" />
              <span>Jugar Ahora</span>
            </li>
            </Link>  
          <p className="title">OPCIÓN</p>          
          <li onClick={handleSignOut}>
            <ExitToAppIcon className="icon" />
            <span>Cerrar sesión</span>
          </li>
          <p className="title">👇🏻 INFO DEL DESARROLLADOR 👇🏻</p>
          <Link to="https://portafolio-arandom.vercel.app/" style={{ textDecoration: "none" }}>
            <li>
              <GroupAddSharpIcon className="icon" />
              <span>Acerca de</span>
            </li>
          </Link>
        </ul>
      </div>
      {/*<div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>*/}
    </div>
  );
};

export default Sidebar;