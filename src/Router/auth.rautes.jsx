import {Routes, Route} from "react-router-dom";

import { SingUp } from "../pages/SingUp";
import { SingIn } from "../pages/Singin";

export function AuthRouter(){
    return(
        <Routes>
            <Route path="/" element={<SingIn/>}/>
            <Route path="/Register" element={<SingUp/>}/>   
        </Routes>
    )
}
