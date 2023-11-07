import React, { useState, useEffect } from "react";
import ExpandCard from "../pure/ExpandCard";
import { getImages } from "../../service/get-images";
import "../../styles/cards.expand.scss";
const ExpandCardsContainer = () => {
  const [data, setData] = useState([]);
  const [element, setElement] = useState(null);
  useEffect(() => {
    setData(getImages());
  }, []);

  const onHover = (id) => {
    const card = document.getElementById(id);

    if (!element) {
      card.classList.add("hover");
      setElement(card);
    } else if (element && card.id === element.id) {
      card.classList.toggle("hover");
    } else {
      element.classList.remove("hover");
      card.classList.add("hover");
      setElement(card);
    }
  };
  const dataImages = () => {
    return data.map((url, i) => {
      return (
        <div
          key={i}
          id={i}
          className="img-container"
          onClick={() => {
            onHover(i);
          }}
        >
          <img src={url} alt=""></img>
        </div>
      );
    });
  };

  return <ExpandCard data={dataImages} />;
};

export default ExpandCardsContainer;
