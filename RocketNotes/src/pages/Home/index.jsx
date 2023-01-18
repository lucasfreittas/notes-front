import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi'


import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

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

            </Content>

            <NewNote>
                <FiPlus />
                Criar Nota
            </NewNote>

        </Container>
    )
}