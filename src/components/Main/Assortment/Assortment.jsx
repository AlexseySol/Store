import React from "react";
import "./Assortment.scss";
import { AssortmentCard } from "./AssortmentCard";








export const Assortment = ({AssortmentCardArray}) => {

  return (
    <section>
      <div className="Assortment_wrapper">
      
        {
          AssortmentCardArray.map((card)=>{
            return <AssortmentCard key={card.id} {...card} />
          })
        }
      </div>
    </section>
  );
};





