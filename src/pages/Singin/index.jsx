import {Container, Form, BackgroundIMG } from "./style"
import { Input } from "../../componentes/Input"
import { Button } from "../../componentes/button"
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import { ButtonText } from "../../componentes/ButtonText"
import { Link } from "react-router-dom"
export function SingIn({title, ...rest}){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>aplicação para salvar e gerenciar seus links uteis</p>
                <h2>faça seu Login</h2>

                <Input type="email" placeholder="Email" icon={FiMail}/>

                <Input type="password" placeholder="Senha" icon={FiLock}></Input>

                <Button label="Entrar"/>

                <Link to="/Register">
                    <ButtonText title="Criar Conta"/>
                </Link>
            </Form>
            <BackgroundIMG/>
        </Container>
    )
}