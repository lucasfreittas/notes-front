import { Container, Header, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile(){
    return(
        <Container>
            <Header>
                <a href="#"><FiArrowLeft/></a>
            </Header>

            
                <Avatar>
                    <img src="http://github.com/lucasfreittas.png" alt="Foto do Usuário" />
                    
                    <label htmlFor="avatar"> 
                    <FiCamera/>      
                    <input type="file" id='avatar' name='avatar' accept='image/png, image/jpeg' />
                    </label>
                </Avatar>

            <Form>
                <Input type='text' placeholder='Lucas Freitas' icon={FiUser} />
                <Input type='email' placeholder='l.freittas@outlook.com' icon={FiMail} />
                <Input type='password' placeholder='Senha atual' icon={FiLock} />
                <Input type='password' placeholder='Nova senha' icon={FiLock} />
                <Button title='Enviar' />
            </Form>
        </Container>
    )
}