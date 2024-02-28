import { useState, useEffect } from 'react'

import './App.css'
// import Home from './Components/Home'
function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const API = "https://mobile-models.onrender.com/models";
    try {
      const res = await fetch(API);
      const responseData = await res.json();
      setData(responseData);
      console.log(responseData)
    } catch (err) {
      console.error(err);
    }
  };


return (
  <>
    <h1>Welcome</h1>
    <div className="container">
      {data && data.map((ele, index) => (
        <div key={index} className="box">
          <h2>{ele.Manufacturer}</h2>
          <p><strong>Specification:</strong> {ele.Specification}</p>
          <p><strong>Price:</strong> {ele.Price} </p>
          <p><strong>Back Camera:</strong> {ele.Back_Camera}</p>
          <p><strong>Battery Capacity:</strong> {ele.Batter_Capacity}</p>
          <p><strong>Front Camera:</strong> {ele.Front_Camera}</p>
          <p><strong>Model:</strong> {ele.Mobile_Model}</p>
          <p><strong>Operating System:</strong> {ele.Operating_System}</p>
          <p><strong>Release Year:</strong> {ele.Release_Year}</p>
        </div>
      ))}
    </div>
  </>
);
      }

export default App
