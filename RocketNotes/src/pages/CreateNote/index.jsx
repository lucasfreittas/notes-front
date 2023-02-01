import { useState } from 'react';
import { api } from '../../services';
import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Link, useNavigate } from 'react-router-dom';


export function CreateNote(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

     const [links, setLinks] = useState([]);
     const [newLink, setNewLink] = useState('');

     const [tags, setTags] = useState([]);
     const [newTag, setNewTag] = useState('');

     const navigate = useNavigate()
     

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(linkToDelete){
        setLinks(prevState => prevState.filter(allLinks => allLinks !== linkToDelete))
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(tagToDelete){
        setTags(prevState => prevState.filter(allTags => allTags !== tagToDelete))
    }

    async function handleNewNote(){
        if(!title){
            return alert('Digite o título da nota')
        }

        if(newLink){
            return alert('Você não clicou para adicionar todos os links')
        }

        if(newTag){
            return alert('Você não clicou em adicionar todas as tags')
        }

      

        await api.post('/notes', {
            title,
            description,
            tags,
            links
    
        })
            alert('Nota criada com sucesso!');
            navigate(-1);
    }

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to='/'>
                            <ButtonText title='voltar' isActivate={true} />
                        </Link>
                    </header>

                    <Input
                        type='text'
                        placeholder='Título'
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea
                        placeholder='Observações'
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title='Links Úteis'>
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem
                            placeholder='Novo Link'
                            isNew={true}
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title='Tags'>
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />))
                            }

                            <NoteItem
                                placeholder='Nova Tag'
                                isNew={true}
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                            
                            
                        </div>
                    </Section>

                    <Button
                        type='button'
                        title='Enviar'
                        onClick={handleNewNote}
                    />
                </Form>
            </main>           
        </Container>
    )
}