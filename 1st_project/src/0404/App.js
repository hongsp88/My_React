// MAP, img

import React from 'react';

function Food({fav}) {
  return <h1>I like { fav }</h1>;
}

function FoodProperty({name, photo}) {
  return (
    <div>
      <Food fav={name} />
      <img src={photo} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    name: 'kimchi',
    image: 'https://img.etoday.co.kr/pto_db/2019/05/600/20190520155753_1330258_1200_1802.jpg',
  },
  {
    name: 'ramen',
    image: 'https://i.ytimg.com/vi/Hf0b_-hVBS4/maxresdefault.jpg',
  },
]

function App() {
  return (
    <div className="App">
      <h1>Hellow</h1>
      {/*<Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="sam" />
      <Food fav="beef" />*/}
      {foodILike.map(dish => (
        <FoodProperty name = {dish.name} photo = {dish.image} />
      ))}
    </div>
  );
}

export default App;
