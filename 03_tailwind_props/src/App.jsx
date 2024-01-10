import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './Copmponents/card'
import New_card from './Copmponents/card_1'


function App() {
  const [count, setCount] = useState(0)

  return (
    //  Empty Tags arse called Fragments
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card name="student" stu= {[1,2,3]} btnText="Click to Vesit the page"/>
    <Card name="Larner of scientific Studies" btnText="Vesit the Page" />
    <New_card />
    <>
        {/* The Code of New_card is Trafered to ./Component/card_1.jsx */}
    </>

    <>
    {/* we will create an component insted of the tag  */}
    {/* <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Delba</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div> */}
    </>

    </>
  )
}

export default App
