import { Container } from "./style";

export function ButtonText({title, isactive = false, to, ...rest}){
    return(
        <Container 
        type="button"
        $isactive={isactive.toString()}
        {...rest}
        to={to}
        >
            {title}
            
        </Container>
    )
}