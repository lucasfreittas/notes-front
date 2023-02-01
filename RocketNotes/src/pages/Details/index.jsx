import { useEffect, useState } from 'react';
import { Container, Links, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services';


export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate()


    function handleBack(){
        navigate(-1)
    }

    async function handleRemove(){
        const confirm = window.confirm('Deseja realmente remover a note?');

        if(confirm){
            await api.delete(`/notes/${params.id}`);
            navigate(-1)
        }
    }

    useEffect(() => {
        async function fetchNote(){
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data);
        }

        fetchNote();
    }, [])

    return(
        <Container>
            <Header/>

            { 
            data &&
                <main>
                <Content>

                    <ButtonText title='Excluir Nota' isActivate onClick={handleRemove}/>
                    
                    <h1>{data.note.title}</h1>
                    <p>{data.note.description}</p>

                { 
                data.links &&        
                    <Section title='Links Úteis'>
                        <Links>
                            {
                            data.links.map(link => (
                                <li key={String(link.id)}>
                                    <a href={link.url} target='_blank' > {link.url} </a>
                                </li>
                            ))
                            }
                        </Links>
                    </Section>

                }

                {
                data.tags &&
                    <Section title='Marcadores'>
                        {
                        data.tags.map(tag => (
                            <Tag key={String(tag.id)} title={tag.name}/>
                        ))
                        }
                    </Section>
                }

                    <Link to='/'> 
                        <Button title = "Voltar" onClick={handleBack}/>
                    </Link>
                </Content>
                </main>
            }

        </Container>
    )
}