import styled from "styled-components";

export const Container = styled.section`
    text-align: left;
    margin: 0px 0 28px;
    max-width: 550px;
    margin: 0 auto;
    
    > h2{
        border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
        padding-bottom: 16px;
        margin-bottom: 24px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;