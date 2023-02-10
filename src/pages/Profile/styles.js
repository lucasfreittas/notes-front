import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.header`

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: 100%;
    height: 250px;
    padding: 100px 300px;

    > a {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 32px;
    }
`

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 240px;
    height: 240px;
    margin-top: -125px;
    margin-bottom: 40px;

     img {
        width: 240px;
        height: 240px;
        border-radius: 50%;
        object-fit: cover;
       
    }

    > label{
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        display: flex;
        height: 64px;
        width: 64px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0px;
        right: 7px;

        input {
        display: none;
        }

        svg {
            width: 200px;
            font-size: 28px;
           
            
        }
    } 

`

export const Form = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;

    > :nth-child(3){
        margin-top: 24px;
    }
`