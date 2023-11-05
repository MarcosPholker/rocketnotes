import styled from "styled-components";
import imgLoginPage from "../../assets/imgLoginPage.png"
export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: row-reverse;
    a button{
        justify-content: center;
        margin-top: 25px;
    }
`;

export const Form = styled.form`
    padding: 0 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    >  h1{
        font-size: 48px;
        color: ${({theme}) =>theme.COLORS.ORANGE};
    }
    > p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-bottom: 48px;
    }
    div{
        margin-bottom: 9px;
    }
    > h2{
        font-size: 24px;
        margin-bottom: 48px;
    }

    > button{
        margin-top: 31px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > button:last-child{
        margin-top: 90px;
    }
`;

export const Backgroundimg = styled.div`
    flex: 1;
    background: url(${imgLoginPage}) no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;