import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Header, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Profile(){
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

      await updateProfile({user})
    }

    return(
        <Container>
            <Header>
                <Link to='/'><FiArrowLeft/></Link>
            </Header>

            
                <Avatar>
                    <img src="http://github.com/lucasfreittas.png" alt="Foto do Usuário" />
                    
                    <label htmlFor="avatar"> 
                    <FiCamera/>      
                    <input type="file" id='avatar' name='avatar' accept='image/png, image/jpeg' />
                    </label>
                </Avatar>

            <Form>
                <Input
                    type='text'
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type='email'
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    type='password'
                    icon={FiLock}
                    placeholder='Senha atual'
                />

                <Input
                    type='password'
                    icon={FiLock}
                    placeholder='Nova senha'
                />
                <Button title='Salvar' onClick={handleUpdate} />
            </Form>
        </Container>
    )
}