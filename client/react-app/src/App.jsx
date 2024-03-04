import { useState, useEffect } from 'react';
import AddData from './Components/AddData';; // Import the AddData component
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API = "https://mobile-models.onrender.com/models";
    try {
      const res = await fetch(API);
      const responseData = await res.json();
      setData(responseData);
      console.log(responseData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddData = (newData) => {
    // Update the state to include the new data
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <>
      <h1>Welcome</h1>
      <AddData onAddData={handleAddData} />

      <div className="container">
        {data && data.map((ele, index) => (
          <div key={index} className="box">
            {/* Display data as before */}
            <p>Manufacturer: {ele.Manufacturer}</p>
        <p>Specification: {ele.Specification}</p>
        <p>price: {ele.Price}</p>
         <p> Back_Camera: {ele.Back_Camera}</p>
        <p>Battery_Capacity: {ele.Battery_Capacity}</p>
        <p>Front_Camera: {ele.Front_Camera} </p>
       <p> Mobile_Model: {ele.Mobile_Model} </p>
        <p>Operating_System: {ele.Operating_System} </p>
        <p>Release_Year:{data.Release_Year} </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
