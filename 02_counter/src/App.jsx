import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;

  //  useState Hook is responsible for changing the state of variable and the propegate the change to the UI
  let [counter, set_countetr] = useState(1)  // we can provide any defalut value to the useState Hook
  //  useState Hook returns an array of two elements one is value and other is function to change the value


  let addValue = () => {
    console.log("Value Added", Math.random());
    // counter = counter + 1;
    if(counter > 9){
      alert("You can't go beyond 10");
      return;
    }
    set_countetr(counter + 1);
    //  We can also fallow the method 
    // counter = counter + 1;
    // set_countetr(counter);
    console.log(counter);

    //   In the DOM all the states of the variable will be changed
  }

  let decrement = () => {
    if(counter < 1){
      alert("You can't go below 0");
      return;
    }
    set_countetr(counter - 1);
  }


  return (
    <>
    <h1>Creating new Counter Practice Project in Vite</h1>
    <h2> Counter Value : {counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button onClick={decrement}>Decrease Value</button>
    <p>`Lorem ipsum <br />{counter} dolor sit amet consectetur adipisicing elit. In animi dicta <br /> {counter} id eaque soluta reiciendis iure odit error culpa voluptates, mollitia <br /> {counter} eum nihil assumenda provident nostrum molestiae nisi. Libero, fugit.`</p>
    </>
  )
}

export default App
