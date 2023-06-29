import React from "react";
import "./Nav.scss";
import logo from "../svg/logo.svg";
import basket from "../svg/basket.svg";
import burger from "../svg/burger.svg";
import exit from "../svg/exit_menu.svg";
import { motion, AnimatePresence } from "framer-motion";
export const Nav = () => {
  const [inBurger, setInBurger] = React.useState(false);

  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__container">
          <div className="nav__body">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
<AnimatePresence initial={false}>
            <nav className={inBurger ? "nav__list activ" : "nav__list"}>
              <ul className="nav__list_body">
                <li>Про нас</li>
                <li>Асортимент</li>
                <li>Блог</li>
                <li>Контакти</li>
              </ul>
            </nav>
            </AnimatePresence>
            <div className="basket">
              <img src={basket} width={40} alt="" />
            </div>
            <div
              onClick={() => setInBurger((prev) => !prev)}
              className="burger_menu"
            >
              <img width={40} src={inBurger ? exit : burger} alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

/*     <nav>
      <div className="nav__wrapper">
        <div className="nav__container">
          <div className="nav__body">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <AnimatePresence>
              <motion.nav 
              className={inBurger ? "nav__list activ" : "nav__list"}
              initial ={{left:0,transition:1 }}
              >
                <ul className="nav__list_body">
                  <li>Про нас</li>
                  <li>Асортимент</li>
                  <li>Блог</li>
                  <li>Контакти</li>
                </ul>
              </motion.nav>
            </AnimatePresence>
            <div className="basket">
              <img src={basket} width={40} alt="" />
            </div>
            <div
              onClick={() => setInBurger((prev) => !prev)}
              className="burger_menu"
            >
              <img width={40} src={inBurger ? exit : burger} alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav> */
