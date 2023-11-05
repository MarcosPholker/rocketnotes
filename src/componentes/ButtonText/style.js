import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: none;
    border: none;
    color: ${({theme, $isactive})=> $isactive? theme.COLORS.ORANGE : theme.COLORS_GRAY_100};
    font-size: 16px;
    font-weight: 400;
`;