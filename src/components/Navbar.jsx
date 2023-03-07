import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import PopupMenu from "./PopupMenu";

const Navbar = ({ navlinks }) => {
  const [popupState,setPopupState] = useState(false);

  const onTriggerPopup = () => setPopupState(!popupState);
  return (
    <>
      <header className="flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0">
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={"/"} className="flex items-center">
            <img src={logo} alt="" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink to={"#"} className="text-lg text-slate-900">
                  {" "}
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button className="button-emrald px-7 text-base" type="button">
                Join Us
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li><img src={menu} onClick={onTriggerPopup} alt="" className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"/></li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState}/>
    </>
  );
};

export default Navbar;
