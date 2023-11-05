import {Container, Brand, Menu, Search, Content, NewNote} from "./style"
import HeaderIndex from "../../componentes/header"
import { ButtonText } from "../../componentes/ButtonText";
import { FiPlus } from "react-icons/fi"
import { FiSearch } from "react-icons/fi";

import { Tag } from "../../componentes/Tag";
import {Input} from "../../componentes/Input"
import { Section } from "../../componentes/Section";
import { Nota } from "../../componentes/Nota";


export function Home({title}){
    return(
        <Container>
            
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <HeaderIndex to="/profile"/>

            <Menu>
                <ButtonText title="Todos" isactive/>
                <ButtonText title="Front-end"/>
                <ButtonText title="Node"/>
                <ButtonText title="React"/>
            </Menu>

            <Search>
                <Input 
                placeholder = "Pesquisar pelo título"
                icon={FiSearch}
                >
                </Input>
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Nota data={{
                        title: 'react',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rocketseat'},
                            {id: '3', name: 'JavaScript'}
                        ]
                    }}>
                    </Nota>
                    <Nota data={{
                        title: 'Javascritp',
                        tags: [
                            {id: '1', name: 'html'},
                            {id: '2', name: 'CSS'},
                            {id: '3', name: 'JavaScript'}
                        ]
                    }}>
                    </Nota>
                </Section>
                
            </Content>

            <NewNote to="/New">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}