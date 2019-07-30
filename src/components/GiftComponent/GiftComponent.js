import React, { useState} from "react";
import style from "./GiftComponent.module.css";
import { format } from "date-fns";
import ItemsComponent from "../ItemsComponent/ItemsComponent";
import giftBox from "../../images/458-yellow-and-red-gift-box.png";

let GiftComponent = props => {
  let [shownElement, setElement] = useState(false);
  let toggleShownElement = ()=> {
    setElement(!shownElement)
  }

  const background = {
    backgroundImage: `url("data:image/svg+xml;base64,${props.image}")`
  };

  return (
    <div className={style.cardBlock}>
      <div className={style.imageBlock} style={background}>
        
        {shownElement ? <ItemsComponent items={props.items} /> : <img src={giftBox} alt="" />}
        
      </div>

      <div>
        <p className={style.title}>{props.name}</p>
        <div className={style.items}>
          <div>
            <p className={`${style.title} ${style.titleData}`}>
              {format(new Date(props.start), "DD-MM-YYYY")}
            </p>

            <p className={`${style.title} ${style.subtitle}`}>Start</p>
          </div>
          <div>
            <p className={`${style.title} ${style.subtitle} ${style.titleData}`}>
              
              {format(new Date(props.end), "DD-MM-YYYY")}
            </p>
            <p className={`${style.title} ${style.subtitle}`}>End</p>
          </div>
        </div>

        <div>
          <p className={style.descr}>
            {props.description.length > 98
              ? `${props.description.substring(0, 98)} ...`
              : props.description}
          </p>
        </div>

        <div className={style.items}>
          <div>
            <p className={`${style.title} ${style.titleValue}`}>
              {props.itemsLength}
            </p>
            <p className={`${style.title} ${style.subtitle}`}>Items</p>
          </div>
          <div>
            <p className={`${style.title} ${style.titleValue}`}>
              {props.total}
            </p>
            <p className={`${style.title} ${style.subtitle}`}>Chancetotal</p>
          </div>
        </div>
        <div className={style.items}>
          <button className={style.btn} onClick={toggleShownElement}>Explane</button>
        </div>
      </div>
    </div> 
  );
};

export default GiftComponent;
