import styled from "styled-components";

export const Container = styled.header`

    width: 100%;
    height: 105px;

    
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    grid-area: header;
    //margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;

    
`;
export const Profile = styled.div`
    display: flex;
    a div:nth-child(1){
        display: flex;
        align-items: center
    }

    span{
        display: block;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    strong{
        font-size: 18px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    div img{
        margin-right: 15px;
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
`;

export const Logout = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > svg{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`;
