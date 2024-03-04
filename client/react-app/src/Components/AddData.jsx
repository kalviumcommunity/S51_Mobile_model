import axios from "axios";
import React, { useState } from 'react';
import './AddData.css';


function AddData({ onAddData }) {
  const [manufacturer, setManufacturer] = useState("");
  const [specification, setSpecification] = useState("");
  const [price, setPrice] = useState("");
  const [back_camera, setBack_Camera] = useState("");
  const [battery_capacity, setBattery_Capacity] = useState("");
  const [front_camera, setFront_Camera] = useState("");
  const [mobile_model, setMobile_Model] = useState("");
  const [operating_system, setOperating_System] = useState("");
  const [release_year, setRelease_Year] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    const newData = {
      Manufacturer: manufacturer,
      Specification: specification,
      Price: price,
      Back_Camera: back_camera,
      Battery_Capacity: battery_capacity,
      Front_Camera: front_camera,
      Mobile_Model: mobile_model,
      Operating_System: operating_system,
      Release_Year: release_year,
    };

    try {

      const response = await axios.post("https://mobile-models.onrender.com/post", newData);
      console.log("ok from 36", response.data)
      onAddData(response.data); 

    } catch (error) {
      console.error("Error adding data:", error);
    }
  };



  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Manufacturer:
          <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        </label>

        <label>
          Specification:
          <input type="text" value={specification} onChange={(e) => setSpecification(e.target.value)} />
        </label>

        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        {}
        <label>
          Back Camera:
          <input type="text" value={back_camera} onChange={(e) => setBack_Camera(e.target.value)} />
        </label>

        <label>
          Battery Capacity:
          <input type="text" value={battery_capacity} onChange={(e) => setBattery_Capacity(e.target.value)} />
        </label>

        <label>
          Front Camera:
          <input type="text" value={front_camera} onChange={(e) => setFront_Camera(e.target.value)} />
        </label>

        <label>
          Mobile Model:
          <input type="text" value={mobile_model} onChange={(e) => setMobile_Model(e.target.value)} />
        </label>

        <label>
          Operating System:
          <input type="text" value={operating_system} onChange={(e) => setOperating_System(e.target.value)} />
        </label>

        <label>
          Release Year:
          <input type="text" value={release_year} onChange={(e) => setRelease_Year(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddData;
