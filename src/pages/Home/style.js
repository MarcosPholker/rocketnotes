import styled from "styled-components";
import { Link } from "react-router-dom";    


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content"
    ;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    ul button{
        margin-top: 25px;
    }
`; 


export const Brand = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    grid-area: brand;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};

    > h1{
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`; 

export const Menu = styled.ul`
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    grid-area: menu;
    > a{
        margin-top: 25px;
        justify-content: center;
    }

`; 

export const Search = styled.div`
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    margin-top: 25px;
    grid-area: search;
    width: 100%;
    height: 50px;
    padding: 0 64px;
`; 

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px 0;
    overflow-y: auto;
`; 

export const NewNote = styled(Link)`
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    border: none;
    grid-area: newnote;
    background-color:  ${({theme})=> theme.COLORS.ORANGE};
    font-size: 20px;
    font-weight: 400;

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
