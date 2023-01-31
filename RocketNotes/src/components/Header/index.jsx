import {Container, Profile, Logout} from './styles';
import {RiShutDownLine} from 'react-icons/ri'

import { useAuth } from '../../hooks/auth';

export function Header(){
    const { signOut } = useAuth();

    return(
        <Container>
            <Profile to='/profile'>
                <img src="https://avatars.githubusercontent.com/u/102767773?v=4" alt="Imagem do usuário" />
                
                <div>
                    <span>Bem-Vindo!</span>
                    <strong>Lucas Freitas</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>   
            </Logout>
            
        </Container>
    )
}