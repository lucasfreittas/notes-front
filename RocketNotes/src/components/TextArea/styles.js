import styled from 'styled-components';

export const Container = styled.textarea`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    height: 150px;
    width: 100%;
    padding: 12px;

    margin-bottom: 8px;
    border-radius: 4px;
    border: none;

    &::placeholder{
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`
