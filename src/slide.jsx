import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import items from "./data";

export default function Slide() {
  const [index, setIndex] = useState(0);
  const { id, name, title, image, quote } = items[index];

  const checkNumber = (number) => {
    if (number > items.length - 1) {
      return 0;
    } else if (number < 0) {
      return items.length - 1;
    } else {
      return number;
    }
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return randomIndex !== index ? randomIndex : getRandomIndex();
  };

  const changeSlideRandomly = () => {
    setIndex(getRandomIndex());
  };

  useEffect(() => {
    const interval = setInterval(changeSlideRandomly, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="article" key={id}>
      <div className="slider">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{quote}</p>
        <FaQuoteRight className="quote" />
      </div>

      <FiChevronLeft onClick={prevPerson} className="prev" />

      <FiChevronRight onClick={nextPerson} className="next" />
    </div>
  );
}
