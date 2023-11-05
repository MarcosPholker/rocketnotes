import {FiPlus, FiX} from "react-icons/fi"

import {Container} from "./style"

export function NoItem({isnew, value, onClick, ...rest}){
    return(
        <Container  isnew = {isnew}>
            <input 
            type="text"
            value={value}
            readOnly={!isnew}
            {...rest}
            />
            
        <button 
            type="button"
            onClick = {onClick}
            className={isnew? 'buttonAdd' : 'buttonDelete'}
        >
            { isnew ? <FiPlus/> : <FiX />}
        </button>


        </Container>
    )
}