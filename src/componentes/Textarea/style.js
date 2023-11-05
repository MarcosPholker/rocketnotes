import styled from "styled-components";

export const Container = styled.div`
        width: 550px;
        margin: 0 auto;
        textarea{
            resize: none;
            padding: 20px 16px;
            width: 100%;
            height: 150px;
            margin-left: 10px;
            border-style: none;
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.WHITE};
            background: transparent;
            &placeholder{
            background-color: ${({theme}) => theme.COLORS.GRAY_300};}
        }
`;