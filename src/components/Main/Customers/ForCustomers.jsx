import React from "react";
import "./Customers.scss";

export const ForCustomers = ({ title, ucons, subTitle }) => {
  return (
    <div className="ForCustomers_wrapper">
      <div className="ForCustomers_blockTitle">
        <div className="ForCustomers_ucons">{ucons}</div>
        <h2 className="ForCustomers_title">{title}</h2>
      </div>

      <p className="ForCustomers_subTitle">{subTitle}</p>
    </div>
  );
};
