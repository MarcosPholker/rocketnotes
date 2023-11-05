import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main{
        width: 100%;
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
`;

export const Links = styled.ul`
    list-style: none;
    > li{
        margin-top: 12px;
    }
    a{
        color: ${({theme}) => theme.COLORS.WHITE}
    }
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    > h1{
        font-size: 36px;
        font-weight: 500;
        padding-top: 50px;
    }
    >p{
        font-size: 16px;
        margin-top: 18px;
        margin-bottom: 18px;
        text-align: justify;
    }
`;

export const ButtonFormat = styled.div`
    max-width: 550px;
    margin: 0 auto;
`;