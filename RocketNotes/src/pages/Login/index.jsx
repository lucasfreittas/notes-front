import { Container, Form, Background } from './styles';
import {FiLock, FiMail} from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function Login () {
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input type='text' placeholder='E-mail' icon={FiMail}/>
                <Input type='password' placeholder='Senha' icon={FiLock}/>
                <Button title='Entrar'/>
                <ButtonText title='Criar Conta' isActivate/>
            </Form>

            <Background />

        </Container>
    )
}