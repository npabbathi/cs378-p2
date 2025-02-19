import './App.css';
import MenuItem from './components/MenuItem';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const MenuHeader = ({ logo, slogan, description }) => {
  return (
    <div className='row'>
      <div className='col'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/images/${logo}.png`} alt={`O's campus cafe`} />
        <div className='catch_phrase'>
          <h3>{slogan}</h3>
          <h1>{description}</h1>
        </div>
      </div>
    </div>
  );
};



function App() {
  // sharing state between components: https://react.dev/learn/sharing-state-between-components
  const [orders, setOrders] = useState(new Array(10).fill(0));
  const [subtotal, setSubtotal] = useState(0);

  // function passed to menu items in order to update the order amounts
  // also calculates the subtotal
  // index: item in the array of menu items to update
  // isAdding: true if the user is adding the item to cart, false if removing
  const updateOrder = (index, isAdding) => {
    // deep copy
    const newOrders = structuredClone(orders)

    if (isAdding) {
      newOrders[index]++
      setSubtotal(subtotal + menuItems[index].price)
    } else if (newOrders[index] > 0) { // only decreasing if possible (no negatives)
      newOrders[index]--
      setSubtotal(subtotal - menuItems[index].price)
    }

    //update orders
    setOrders(newOrders)
  }

  // clear all the items in the cart and the subtotal
  const clearAll = () => {
    setOrders(new Array(10).fill(0))
    setSubtotal(0)
  }

  // orders the items if there is items in the car
  const order = () => {
    if (subtotal === 0) {
      alert("Error! No Items in Cart.")
    } else {
      let orderSummary = ""
      for (let i = 0; i < menuItems.length; i++) {
        if (orders[i] > 0) {
          orderSummary += "- " + menuItems[i].title + " (x" + orders[i] + ")\n"
        }
      }

      alert("Order placed!\n\nOrder Summary:\n" + orderSummary + "\nTotal: " + Math.abs(subtotal).toFixed(2))
      //clear all items from cart once order is placed
      clearAll()
    }
  }
    

  return (
    <div>
      <MenuHeader logo={"logo"} slogan={"Delicious, From-Scratch Recipes Close at Hand"} description={"The Fresh Choice of UT!"}/>
      <div className="menu">
        {menuItems.map((item, index) => (
          <MenuItem title={item.title} description={item.description} imageName={item.imageName} price={item.price} index={index} orders={orders} updateOrder={updateOrder}/>
        ))}
      </div>
      <h1>Subtotal: ${Math.abs(subtotal).toFixed(2)}</h1>
      <div className="col">
        <button onClick={clearAll} className="round order"> Clear All </button>
        <button onClick={order} className="round order"> Order </button>
      </div>
    </div>
  );
}

export default App;
