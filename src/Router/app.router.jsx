import {Routes, Route} from "react-router-dom";

import { New } from "../pages/New";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/New" element={<New/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Details/:id" element={<Details/>}/>   
        </Routes>
    )
}
