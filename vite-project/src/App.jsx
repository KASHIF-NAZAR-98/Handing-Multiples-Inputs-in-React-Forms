import { useState } from 'react'
import ContactForm from './ContactForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ContactForm/>
    </>
  )
}

export default App
