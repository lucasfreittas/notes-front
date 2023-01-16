import {Container, Profile, Logout} from './styles';
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://avatars.githubusercontent.com/u/102767773?v=4" alt="Imagem do usuário" />
                
                <div>
                    <span>Bem-Vindo!</span>
                    <strong>Lucas Freitas</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>   
            </Logout>
            
        </Container>
    )
}