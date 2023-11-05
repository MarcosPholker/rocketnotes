import { Container } from "./style";


export function Input({icon: Icon, placeholder, type, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input type={type} placeholder={placeholder}/>
        </Container>
    )
}