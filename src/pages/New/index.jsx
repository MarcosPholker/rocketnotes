import { Container, Content } from "./style";
import HeaderIndex from "../../componentes/header";
import { ButtonText } from "../../componentes/ButtonText";
import { Input } from "../../componentes/Input";
import { Section } from "../../componentes/Section";
import { Button } from "../../componentes/button";
import { Textarea } from "../../componentes/Textarea";
import { NoItem } from "../../componentes/NoteItem";
import { Link } from "react-router-dom";


export function New(){
    return(
        <Container>
            <HeaderIndex />
            <main>
                <Content>
                    <h1>Criar Nota</h1>
                    <ButtonText title="Voltar" to="/"/>
                </Content>
                    
                <Input placeholder="Titulo" type="text"/>
                
                <Textarea title="Observações"/>
                <Section title="Links Uteis">
                        <Input type="Email" placeholder="email"/>

                        <NoItem 
                        value={"https://rocketseat.com.br"}
                        />

                        <NoItem
                        placeholder = "Novo Link"
                        isnew= "true"
                        />
                </Section>

                <Section title="Marcadores">

                        <div className="tags">

                            <NoItem
                                value="react"
                            />

                            <NoItem
                            placeholder = "Novo Link"
                            isnew= "true"
                            />
                        </div>
                </Section>

                <Button label="Salvar"/>
            </main>
        </Container>
    )
}