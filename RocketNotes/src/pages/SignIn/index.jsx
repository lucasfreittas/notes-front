import { Container, Form, Background } from './styles';
import {FiLock, FiMail, FiUser} from 'react-icons/fi'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignIn () {
    return(
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input type='text' placeholder='Usuário' icon={FiUser}/>
                <Input type='text' placeholder='E-mail' icon={FiMail}/>
                <Input type='password' placeholder='Senha' icon={FiLock}/>
                <Button title='Criar Conta'/>
                <ButtonText title='Voltar para o Login' isActivate/>
            </Form>

            

        </Container>
    )
}