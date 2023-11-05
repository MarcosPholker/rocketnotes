import {Container, Form, Backgroundimg } from "../SingUp/style";
import { Input } from "../../componentes/Input"
import { Button } from "../../componentes/button"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { ButtonText } from "../../componentes/ButtonText"
import { Link } from "react-router-dom";
export function SingUp({title, ...rest}){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>aplicação para salvar e gerenciar seus links uteis</p>
                <h2>Crie Sua Conta</h2>

                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="email" placeholder="Email" icon={FiMail}/>

                <Input type="password" placeholder="Senha" icon={FiLock}></Input>

                <Button label="Cadastrar"/>

                <Link to="/">
                    <ButtonText title="Volte para Login"/>
                </Link>
            </Form>
            <Backgroundimg />
        </Container>
    )
}