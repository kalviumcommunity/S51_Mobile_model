import {Route, Routes} from "react-router-dom"
import AddData from "./Components/AddData"
import Home from "./Components/Home"
import UpdateData from "./Components/UpdateData"

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddData/>}></Route>
            <Route path="/update/:id" element={<UpdateData/>}></Route>
        </Routes>

        </>
    )
}

export default AllRoutes;