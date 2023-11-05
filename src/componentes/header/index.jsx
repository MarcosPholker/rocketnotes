import {Container, Profile, Logout} from "./style.js"
import { RiShutDownLine } from "react-icons/ri"
import {Link} from "react-router-dom"

export default function HeaderIndex({to}){
    return(
        <Container>
            <Profile>
                    <Link to={to}>
                        <div>
                            <div>
                                <img src="https://avatars.githubusercontent.com/u/29373713?v=4" alt="" />
                            </div>

                            <div>
                                <span>bem vindo,</span>
                                <strong>nome do usuario</strong>
                            </div>
                        </div>
                    </Link>   
            </Profile>
            
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}