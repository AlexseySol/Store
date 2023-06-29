import React from "react";
import "./Assortment.scss";

export const AssortmentCard = ({ img, title, subTitle }) => {




  return (
    <div className="AssortmentCard_wrapper">
      <img className="AssortmentCard_img" src={img} alt="" />
      <h3 className="AssortmentCard_title"> <b>{title}</b> </h3>
      <p>{subTitle}</p>
      <button className="AssortmentCard_btn">Придбати</button>
    </div>
  );
};
