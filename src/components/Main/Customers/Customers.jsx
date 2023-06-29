import React from "react";
import "./Customers.scss";
import { ForCustomers } from "./ForCustomers";
import { Delimiter } from "../Delimiter/Delimiter";

export const Customers = ({ ForCustomersArray }) => {
  return (
    <section>
      <div className="Customers_wrapper">
      
        <div className="Customers_body">
        <h2 className="Customers_title">Чому клієнти <br /> обирають нас?</h2>
          {ForCustomersArray.map((card) => {
            return <ForCustomers key={card.id} {...card} />;
          })}
        </div>
      </div>
      <Delimiter />
    </section>
  );
};
