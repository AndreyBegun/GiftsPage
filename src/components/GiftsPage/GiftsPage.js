import React from "react";
import GiftComponent from "../GiftComponent/GiftComponent";
import style from "./Page.module.css";

let GiftsPage = props => {
  const gifts = props.data.map(elem => {
    return (
      <GiftComponent
        key={elem.id}
        description={elem.description}
        end={elem.end}
        image={elem.image}
        name={elem.name}
        total={elem.probability_total}
        start={elem.start}
        itemsLength={elem.items.length}
        items={elem.items}
      />
    );
  });
  return <div className={style.mainBlock}>{gifts}</div>;
};

export default GiftsPage;
