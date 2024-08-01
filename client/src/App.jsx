import { useState } from "react"
import { PopupButton } from "react-calendly"
import "./App.css"
import Home from "./components/home"

function App() {
  return (
    <>
      <Home />
      <PopupButton
        url="https://calendly.com/mireillemua1"
        rootElement={document.getElementById("root")}
        text="click here to schedule"
      />
    </>
  )
}

export default App
