import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef(null)

  useEffect(() => {
    const hideMenu = (e) => {
      if (!headerRef.current.contains(e.target) && showMenu) {
        setShowMenu(false)
      }
    }
    window.addEventListener("click", hideMenu);
    return () => window.removeEventListener("click", hideMenu)
  }, [showMenu])


  // HIDE MENU WHEN WINDOW SIZE >  600PX
  const menu = window.matchMedia("(max-width: 600px)");
  menu.addEventListener("change", () => {
    if (menu.matches) {
      setShowMenu(false);
    }
  });

  //   show menu when the window screen  <= 600px
  const DisplayMenu = () => {
    setShowMenu(!showMenu);
  };

  const HideMenuOnLinkClicked = () => {
    setShowMenu(false);
  };

  return (
    <header ref={headerRef}>
      <span className="brand">
        <Link className="logo" to={"/users"}>
          webPhere
        </Link>
      </span>
      <nav className={showMenu ? "navActive" : "nav"}>
        <ul className="navBar">
          <li>
            <Link to={"/users"} onClick={HideMenuOnLinkClicked}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={HideMenuOnLinkClicked}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/users"} onClick={HideMenuOnLinkClicked}>
              Users
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={HideMenuOnLinkClicked}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div id="menuBar" onClick={DisplayMenu}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};

export default Header;
