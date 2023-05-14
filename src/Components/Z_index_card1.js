import "./Home.css"
import React, { useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft, FaCircle } from "react-icons/fa";


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
      const item = state.items[index];
      generatedItems.push(
        <Item key={item.id} id={item.id}  image={item.image} level={level} />
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

  // ......... Pagination code ........
  const generatePagination = () => {
    return state.items.map((item, index) => (
      <FaCircle
        key={item.id}
        className={`pagination-circle ${state.active === index ? 'active' : ''}`}
        onClick={() => setActive(index)}
      />
    ));
  };
  // .........................

  const setActive = (index) => {
    setState({ ...state, active: index });
  };

  return (
  <>
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={leftClick}>
          <FaChevronCircleLeft className="text-4xl" />
        </div>
        <div transitionname={state.direction}>
          {generateItems()} 
        </div>
        <div className="arrow arrow-right" onClick={rightClick}>
          <FaChevronCircleRight className="text-4xl"/>
        </div>
      </div>
      <div className="pagination">{generatePagination()}</div>
  </>
  );
};


const Item = ({ level,image}) => {
  const className = `item level${level}`;
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
};

const Z_index_card1 = () => {
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
  const items = [
    { id: 1, image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/GA/TG/FB/137750033/23sep21-software-500x500.jpg' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksUVDvpgixnjOM6vKR1NpEoZ4_tZW3AL0ww&usqp=CAU' },
    { id: 3, image: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/11/11/Pictures/_3486e57c-2413-11eb-9c71-c26c1d2bb974.jpg' },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBBmDXNGQ4lEuLE8G2dNG7lG0okzAKRtsIK3IUEGvpzmlDIvz7wun5VcIZD7Dw1fX62A&usqp=CAU' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SpylBD-urNhm-aqN8qhEBeYRTsumoiskqog30B70xxi-ZmaznwHr_OGdyv2_Pvizfng&usqp=CAU' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUaOAxJ0Uk3fXVcyxhxnm7npX9JWj-VeXZ4ObZD6IeCs7OII5cQBNXd0JLSfjBvEBSj8&usqp=CAU' },
    { id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KayUwR1S_-_hiscHtIpgJKx1UufcZz3H7A&usqp=CAU' },
    // { id: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gc7kIIgoAEaOxrsQ7HIeBJy4iifEvD00jMhkWPrZwuRTn_csges6JdFCxpdZ-gVIPj8&usqp=CAU' },
    // { id: 9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdm4lafZWh_B6XuZ3POFadUW9ZVs5X2fB-w&usqp=CAU' },
    // { id: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0brOvbY723vLFj6R0hXhalg8C0LurN9smjJS46pYBjP7I8aGpN7Ixys_begBM6YjZCo&usqp=CAU' },
    // { id: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0brOvbY723vLFj6R0hXhalg8C0LurN9smjJS46pYBjP7I8aGpN7Ixys_begBM6YjZCo&usqp=CAU' },
    // Add more items with their respective images
  ];
  return <Carousel items={items} active={0} />;
};

export default Z_index_card1;
