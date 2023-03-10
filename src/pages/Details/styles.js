
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    'header'
    'content';

    > main{
        grid-area: 'content';
        overflow-y: scroll;
    }

`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;
        
        a{
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const Content = styled.div`
    
    display: flex;
    flex-direction: column;
    max-width: 650px;
    margin: 0 auto;

    > :nth-child(1){
        margin-top: 50px;
        text-align: left;
        width: 100%;

    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 40px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }

    > button:first-child{
        align-self: end;
    }
`

