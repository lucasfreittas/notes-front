import { Container } from './styles';
import { Button } from '../../components/Button';

export function Details() {
    return(
        <Container>
            <Button title = "Entrar" loading={true}/>
            <Button title = "Cadastrar"/>
            <Button title = "Voltar"/>
        </Container>
    )
}