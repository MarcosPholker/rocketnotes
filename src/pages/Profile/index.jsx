import {FiArrowLeft} from "react-icons/fi";
import { Container, ImgUser } from "./style";
import { Input } from "../../componentes/Input"; 
import { Button } from "../../componentes/button";
import { Link } from "react-router-dom";


export function Profile(){
    return(
        <Container>
            <ImgUser>

                <Link to="/">
                    <FiArrowLeft />
                </Link>
                
                <p> 
                    <img src="https://avatars.githubusercontent.com/u/29373713?v=4" alt="" />
                </p>
            </ImgUser>

            <Input placeholder=""/>
            <Input placeholder=""/>
            <Input placeholder="Senha Atual"/>
            <Input placeholder="Nova Senha"/>
            <Button label="Salvar"/>
        </Container>
    )
}