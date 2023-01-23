import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  return (
    <motion.div
      initial={{ x: "-100vh" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="Navbar"
    >
      <div onClick={menuTogglerHandler} className="hamburger">
        {active ? (
          <AiOutlineClose className="_icon" />
        ) : (
          <GiHamburgerMenu className="_icon" />
        )}
      </div>
      {active ? (
        <div className="side-menu">
          <ul className="side-menu-list">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="logo">Logo</div>

      <ul className="nav-menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default Navbar;
