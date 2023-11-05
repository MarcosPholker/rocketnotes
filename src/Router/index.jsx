import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.router";
import { AuthRouter } from "./auth.rautes";

export function Routes(){
    return(
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}