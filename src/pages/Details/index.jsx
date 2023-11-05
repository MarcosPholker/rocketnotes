import { Container, Links, Content, ButtonFormat } from "./styles.js"
import { Button } from "../../componentes/button/"
import { Section } from "../../componentes/Section"
import Header from "../../componentes/header"
import { Tag } from "../../componentes/Tag/index.jsx"
import { ButtonText } from "../../componentes/ButtonText/index.jsx"


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" isactive/>

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Iste eum nobis suscipit laudantium 
            ipsam, cumque voluptatum blanditiis consequuntur. 
            Molestiae minus illum, voluptatibus distinctio 
            porro repellendus deserunt. Atque maiores explicabo 
            praesentium. Lorem, ipsum dolor sit amet consectetur a
            dipisicing elit. 
            Facere alias numquam consequuntur 
            exercitationem atque temporibus, quis 
            vel? Hic dicta, ut vitae esse perferendis 
            vero, vel, sint tempore harum sit deserunt.
            </p>

          <Section title='links uteis'>
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
        </Content>

        <ButtonFormat>
          <Button label="voltar" />
        </ButtonFormat>
      </main>


      
    </Container>
  )
}