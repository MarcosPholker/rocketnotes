import styled from "styled-components";

export const Container = styled.div`
    max-width: 550px;
    margin: 0 auto;
    button{
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        margin-top: 30px;
        height: 56px;
        padding: 0 16px;
        border-radius: 10px;
        border: none;
        font-weight: 500;
        &:disabled {
            opacity: 0.5;
        }
    }
`