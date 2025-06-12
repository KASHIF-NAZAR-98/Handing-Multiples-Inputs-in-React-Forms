import { useState } from 'react'
import ContactForm from './ContactForm'
import './App.css'
import Hello from './Hello'
import  Joker from './Joker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ContactForm/> */}
     {/* <Hello/> */}

     <Joker/>
    </>
  )
}

export default App
