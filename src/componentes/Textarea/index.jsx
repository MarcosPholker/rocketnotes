import { Container } from "./style";

export function Textarea({title}){
    return(
        <Container>
            <textarea placeholder={title}></textarea>
        </Container>
    )
}