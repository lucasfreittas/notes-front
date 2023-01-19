import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { TextArea } from '../../components/TextArea';

export function CreateNote(){
    return(
        <Container>
            <Header/>

            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <ButtonText title='voltar'/>
                </header>
                <Input type='text' placeholder='Título'/>
                <TextArea placeholder='Observações'/>
            </Form>
        </Container>
    )
}