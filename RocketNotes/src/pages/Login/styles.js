import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;


`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    padding: 0 136px;
    

    > h1 {
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size: 52px;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 14px;
    }

    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 24px;
        margin-top: 84px;
        font-size: 24px;
    }

    > button{
        margin-bottom: 124px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

`