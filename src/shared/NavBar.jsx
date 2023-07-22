import { CakeOutlined } from "@mui/icons-material";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link href="/home" underline="hover">
      <CakeOutlined
        fontSize="large"
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        />
        </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/home"
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/birthDay"
          >
            Hoy es cumpleaños de 🥳 🎂
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/birthMonth"
          >
            Este mes cumplen años 📅 🎉
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/birthTable"
          >
            Todos los cumpleaños 📇
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/greetingCard"
          >
            Envía una tarjeta al cumpleañero 🎴
          </NavLink>
        </div>

      </div>
    </nav>
  );
};
