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

    > main {
        width: 100%;
        justify-content: center;
        display: flex;
        grid-area: 'content';
        overflow-y: auto;
    }
`

export const Form = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 36px 0 24px 0
    }

    .tags {
        display: flex;
        flex-direction: row;
        gap: 12px;
        flex-wrap: wrap;
        
        > :nth-child(n){
        width: 192px;
    }   
    
    }



`