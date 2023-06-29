import React from "react";
import "./Header.scss";

import { Nav } from "./Nav/Nav";

export const Header = () => {
  return (
    <header>
      <img src="/img/fon.png" className="header__fon" alt="" />
      <Nav />
      <div className="header__subTitleBlock">
        <div className="block__title">
          <h1 className="header__title">Blend Store</h1>
          <h3 className="header__subTitle">
            Ласкаво просимо до BlendStore - твоєї джерела найароматнішої та
            найякіснішої кави зернової! Ми пропонуємо широкий вибір блендів,
            створених з любов'ю та мистецтвом, щоб занурити вас у світ
            унікальних смаків та ароматів кавових зерен.
          </h3>
          <button className="header__btn">Перейти до покупок</button>
        </div>
      </div>
    </header>
  );
};

{
  /*       <div className="header_wrapper">
      <img src={logo} alt="" />
          <ul className={inBurger ? "activ" : "header_nav" } >
            <li>Про нас</li>
            <li>Асортимент</li>
            <li>Блог</li>
            <li>Контакти</li> 
          </ul>
          <div>
            
          </div>
       
            <div ><img width={40} className="backet" src={basket} alt="" /></div>  
            <div onClick={()=>setInBurger((prev)=>!prev)} ><img width={40} className="header_nav_burger " src={burger} alt="" /></div>
    
      </div>
      <div className="header__subTitleBlock">
        <div className="block__title">
          <h1 className="header__title">Blend Store</h1>
          <h3 className="header__subTitle">
            Добро пожаловать в BlendStore - твой источник самого ароматного и
            качественного зернового кофе! Мы предлагаем широкий выбор блендов,
            созданных с любовью и искусством, чтобы погрузить вас в мир
            уникальных вкусов и запахов кофейных зерен.
          </h3>
          <button className="header__btn">Перейти к покупкам</button>
        </div>
      </div>
      <div>
          <img className="header_img" src="/img/fon.png" alt="" />
        </div> */
}
