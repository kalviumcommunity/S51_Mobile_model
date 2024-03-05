import axios from "axios";
import React, { useState } from 'react';
import './AddData.css';
import { useNavigate,useLocation } from 'react-router-dom';



function AddData() {
    const location = useLocation()
    const navigate = useNavigate();
    const data = location.state;

  const [manufacturer, setManufacturer] = useState(data.Manufacturer);
  const [specification, setSpecification] = useState(data.Specification);
  const [price, setPrice] = useState(data.Price);
  const [back_camera, setBack_Camera] = useState(data.Back_Camera);
  const [battery_capacity, setBattery_Capacity] = useState(data.Battery_Capacity);
  const [front_camera, setFront_Camera] = useState(data.Front_Camera);
  const [mobile_model, setMobile_Model] = useState(data.Mobile_Model);
  const [operating_system, setOperating_System] = useState(data.Operating_System);
  const [release_year, setRelease_Year] = useState(data.Release_Year);
  const [modelid, setmodelId] = useState(data.modelId);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newData = {
        modelId: modelid,
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
      console.log(modelid)

      const response = await axios.patch(`https://mobile-models.onrender.com/update/${modelid}`, newData);
      console.log(response)
      navigate("/")

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
          <input type="text" defaultValue={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        </label>

        <label>
          Specification:
          <input type="text" defaultValue={specification} onChange={(e) => setSpecification(e.target.value)} />
        </label>

        <label>
          Price:
          <input type="text" defaultValue={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        {}
        <label>
          Back Camera:
          <input type="text" defaultValue={back_camera} onChange={(e) => setBack_Camera(e.target.value)} />
        </label>

        <label>
          Battery Capacity:
          <input type="text" defaultValue={battery_capacity} onChange={(e) => setBattery_Capacity(e.target.value)} />
        </label>

        <label>
          Front Camera:
          <input type="text" defaultValue={front_camera} onChange={(e) => setFront_Camera(e.target.value)} />
        </label>

        <label>
          Mobile Model:
          <input type="text" defaultValue={mobile_model} onChange={(e) => setMobile_Model(e.target.value)} />
        </label>

        <label>
          Operating System:
          <input type="text" defaultValue={operating_system} onChange={(e) => setOperating_System(e.target.value)} />
        </label>

        <label>
          Release Year:
          <input type="text" defaultValue={release_year} onChange={(e) => setRelease_Year(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddData;
