import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
    height: 112px;
    margin: 0 auto;
    padding: 16px 22px;
    border-radius: 18px;
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: space-between;
`;