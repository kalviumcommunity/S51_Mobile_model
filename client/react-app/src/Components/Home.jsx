import React from 'react'
import data from "./Data.json"
function Home() {
  return (
    <div>
        <p>Manufacturer: {data.Manufacturer}</p>
        <p>Specification: {data.Specification}</p>
        <p>price: {data.Price}</p>
         <p> Back_Camera: {data.Back_Camera}</p>
        <p>Battery_Capacity: {data.Battery_Capacity}</p>
        <p>Front_Camera: {data.Front_Camera} </p>
       <p> Mobile_Model: {data.Mobile_Model} </p>
        <p>Operating_System: {data.Operating_System} </p>
        <p>Release_Year:{data.Release_Year} </p>
    </div>
  )
}

export default Home