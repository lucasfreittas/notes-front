import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    'header'
    'content';

    width: 100%;
    height: 100vh;
    
    justify-items: center;
`

export const Form = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;

    > header {
        display: flex;
        justify-content: space-between;
        margin: 36px 0 24px 0
    }
`