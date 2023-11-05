import styled from "styled-components";


export const Container = styled.div`
    margin: 0 auto;
    max-width: 550px;
    height: 56px;
    padding: 20px 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 18px;

    display: flex;

    input{
        margin-left: 10px;
        width: 100%;
        border-style: none;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        &placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};}
    }
    textarea{
        margin-left: 10px;
        width: 100%;
        border-style: none;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        &placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};}
    }

    
`;