import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi'


import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import { Link } from 'react-router-dom';


export function Home(){
    return(
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <l1> <ButtonText title="Todos" isActivate/> </l1>
                <l1> <ButtonText title="React" /> </l1>
                <l1> <ButtonText title="NodeJS" /> </l1>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
            </Search>

            <Content>
                <Section title='Minhas Notas'>
                    <Note data={{
                        title: 'React',
                        tags:[
                            {id: '1', name: 'react'},
                            {id: '2', name:'rocketseat'}
                        ]
                    }}
                    />
                </Section>
            </Content>
            
            
            <NewNote to='/createnote'>
                <FiPlus />
                Criar Nota
            </NewNote>
           
        </Container>
    )
}