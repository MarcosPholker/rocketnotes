import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content"; 
    

    > main {
        width: 100%;
        grid-area: content;
        overflow-y: auto;
    }
    main div:nth-child(1){
        margin-top: 38px;
        margin-bottom: 26px;
        display: flex;
        width: 100%;
        align-items: center;
    }
    main div:nth-child(1) h1{
        width: 100%;
    }
    main div:nth-child(3){
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        border-radius: 18px;
    }
    div:nth-child(2){
        margin-bottom: 16px;
    }
    section{
        margin-top: 36px;
    }
    button:last-child{
        margin-top: 0px;
        margin-bottom: 30px;
    }
    button:nth-child(2){
        margin: 0;
    }
    .tags{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-direction: row;
    }
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;
`