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
      transition={{ type: "spring", stiffness: 50 }}
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
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="side-menu"
        >
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
        </motion.div>
      ) : null}
      <Link to={"/"}>
        <div className="logo">
          <img src="https://i.ibb.co/H7DtFmb/1.png" alt="LemonAdler-9 Logo" />
        </div>
      </Link>
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
