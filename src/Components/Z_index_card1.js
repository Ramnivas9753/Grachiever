import "./Home.css"
import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

const Carousel = ({ items, active }) => {
  const [state, setState] = useState({
    items: items,
    active: active,
    direction: ''
  });

  const rightClick = () => moveRight();
  const leftClick = () => moveLeft();

  const generateItems = () => {
    const generatedItems = [];
    let level;
    console.log(state.active);

    for (let i = state.active - 2; i < state.active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;
      generatedItems.push(
        <Item key={index} id={state.items[index]} level={level} />
      );
    }
    return generatedItems;
  };

  const moveLeft = () => {
    const newActive = state.active - 1;
    setState({
      ...state,
      active: newActive < 0 ? state.items.length - 1 : newActive,
      direction: 'left'
    });
  };

  const moveRight = () => {
    const newActive = (state.active + 1) % state.items.length;
    setState({
      ...state,
      active: newActive,
      direction: 'right'
    });
  };

  return (
    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={leftClick}>
        <i className="fi-arrow-left"></i>
      </div>
      <div transitionName={state.direction}>
         {generateItems()} 
      </div>
      <div className="arrow arrow-right" onClick={rightClick}>
        {/* <i className="fi-arrow-right"></i> */}
        <FaAngleRight className="text-3xl"/>
      </div>
      <p className="text-center text-3xl my-5 font-bold pb-10">  Based on: andyNroses</p>
    </div>
  );
};

const Item = ({ level }) => {
  const className = `item level${level}`;
  return (
    <div
      className={className}
      style={{
        backgroundImage: "url(https://5.imimg.com/data5/SELLER/Default/2021/9/GA/TG/FB/137750033/23sep21-software-500x500.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
};

const Z_index_card1 = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
  return <Carousel items={items} active={0} />;
};

export default Z_index_card1;
