import { Container } from './styles';

export function ButtonText({title, isActivate = false, ...rest}){
    return(
        <Container type='button' isActivate={isActivate} {...rest} >
            {title}
        </Container>
    )
}