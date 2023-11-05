import styled from "styled-components";
import camera from "../../assets/camera.svg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-child(1){
        width: 100% !important;
        height: 120px;
    }
    div:nth-child(2){
        margin-top: 120px;
        margin-bottom: 8px;
        
    }
    div:nth-child(3){
        margin-bottom: 32px;
    }
    div, button{
        width: 340px;
    }
    div:nth-child(4){
        margin-bottom: 8px;
    }
    button{
        margin-top: 38px;
    }
`;

export const ImgUser = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    justify-content: center;

    > p img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    >  p {
        position: sticky;
        margin-top: 80px;
    }
    a{
        position: absolute;
        left: 50px;
        cursor: pointer;
    }

    p{
        background-image: url(${camera}) no-repeat;
        background-size: cover;
    }
`;