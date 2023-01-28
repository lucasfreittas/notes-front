import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services'

import { Container, Form, Background } from './styles';
import {FiLock, FiMail, FiUser} from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';




export function SignIn () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name, !email, !password){
            return alert('Preencha todos os campos');
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso!');
                navigate('/');
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert ('Não foi possível cadastrar')
                }
            });
    };


    return(
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input type='text' placeholder='Usuário' icon={FiUser} onChange={e => setName(e.target.value)}/>
                <Input type='text' placeholder='E-mail' icon={FiMail} onChange={e => setEmail(e.target.value)}/>
                <Input type='password' placeholder='Senha' icon={FiLock} onChange={e => setPassword(e.target.value)}/>
                <Button title='Criar Conta' onClick={handleSignUp}/>

                <Link to='/'>
                    <ButtonText title='Voltar para o Login' isActivate/>
                </Link>
            </Form>

            

        </Container>
    )
}