import { useState, useEffect } from 'react';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { FiPlus, FiSearch } from 'react-icons/fi'


import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services';


export function Home(){
    const [search, setSearch] = useState('');
    const [notes, setNotes] = useState([]);
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    
    const navigate = useNavigate();

    function handleTagSelected(tagName){
        if(tagName === "all"){
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }

    };

    function handleDetails(id){
        navigate(`/details/${id}`)

    };

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get('/tags');
            setTags(response.data);
            console.log(tags)
        }
        fetchTags();
    },[])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data);
        }

        fetchNotes();
    }, [tagsSelected, search])

    return(
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <l1>
                    <ButtonText
                        title="Todos"
                        onClick={() => handleTagSelected("all")}
                        isActivate = {tagsSelected.length === 0}
                    />
                </l1>

                {
                    tags && tags.map(tag => (
                        <l1 key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActivate = {tagsSelected.includes(tag.name)}
                            />
                        </l1>
                    ))
                }
            </Menu>

            <Search>
                <Input
                    placeholder='Pesquisar pelo t??tulo'
                    icon={FiSearch}
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title='Minhas Notas'>
                {   
                    notes.map(note => (
                        <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                        />
                     
                    ))
                }
                </Section>
            </Content>
            
            
            <NewNote to='/createnote'>
                <FiPlus />
                Criar Nota
            </NewNote>
           
        </Container>
    )
}