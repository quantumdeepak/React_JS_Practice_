import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'


//  Remember the name of the function should allways start with a capital letter
function My_app(){
  return(
    <div>
      <h1>New Test Case ~</h1>
    </div>
  )
}


// let  React_element = {
//   type: 'a',  // this mentiojn the type of the tag
//   // props is properties  this is an object
//   props : {
//       href: 'https://www.google.com',
//       target : '_blank',
//   },
//   children : "Click to visit google"
// }


let new_element =(
  <a href="https://www.google.co.in/" target="_blank" rel="noreferrer">Vesit Google</a>
)


let React_element = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target : '_blank',
  },
  "Click to visit google"
  //  we can directely pass the text here
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <App />
    <My_app />
    {/* <React_element/> */}
    {new_element}
    <br/>
    {/* React_element => this will not not work here */}
    </>
  // </React.StrictMode>,
)


// ReactDOM.createRoot(document.getElementById('root')).ap(
//   React_element
// )
