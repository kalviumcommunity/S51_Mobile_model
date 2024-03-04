import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
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
  const deleteData = (id) =>{
    axios.delete(`https://mobile-models.onrender.com/delete/${id}`)
   .then((response) =>{ console.log(response.data);
    window.location.reload();})
    .catch((error) => console.error(error))
  }
  const handleAddData = (newData) => {
    // Update the state to include the new data
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <>
      <h1>Welcome</h1>
      <Link to='/add'><button>Add</button></Link>

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
        <p>Release_Year:{ele.Release_Year} </p>
        <p> Model Id :{ele.modelId}</p>
        <Link to={`/update/${ele.modelId}`} state={ele}><button id="update">Update</button></Link>
        <button onClick={()=>deleteData(ele._id)}>Delete</button>

          </div>
        ))}
      </div>
    </>
  );
}

export default App;
