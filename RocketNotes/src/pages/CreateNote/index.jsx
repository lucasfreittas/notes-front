import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';


export function CreateNote(){
    return(
        <Container>
            <Header/>

            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <ButtonText title='voltar' isActivate={true} />
                </header>
                <Input type='text' placeholder='Título'/>
                <TextArea placeholder='Observações'/>

                <Section title='Links Úteis'>
                    <NoteItem value='http://rocketseat.com' />
                    <NoteItem placeholder='Novo Link' isNew={true} />
                </Section>

                <Section title='Tags'>
                    <div className='tags'>
                        <NoteItem value='NodeJS' />
                        <NoteItem placeholder='Nova Tag' isNew={true} />
                    </div>
                </Section>

                <Button type='button' title='Enviar'/>
            </Form>
           
        </Container>
    )
}