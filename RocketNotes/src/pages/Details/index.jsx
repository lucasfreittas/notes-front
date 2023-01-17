import { Container, Links, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <ButtonText title='Excluir Nota'/>
                    
                    <h1>Exemplo de Nota</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores ut similique veritatis fugiat eaque a odio adipisci,
                        explicabo voluptatum porro. Ipsa, corporis veniam perferendis
                        nostrum quas dolor dolore similique doloremque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores ut similique veritatis fugiat eaque a odio adipisci,
                        explicabo voluptatum porro. Ipsa, corporis veniam perferendis
                        nostrum quas dolor dolore similique doloremque?</p>
                        
                    <Section title='Links Úteis'>
                        <Links>
                            <li> <a href="#">https://www.rocketseat.com.br</a> </li>
                            <li> <a href="#">https://www.rocketseat.com.br</a> </li>
                            <li> <a href="#">https://www.rocketseat.com.br</a> </li>
                        </Links>
                    </Section>

                    <Section title='Marcadores'>
                        <Tag title="express"/>
                        <Tag title='NodeJS'/>
                    </Section>

                    <Button title = "Voltar"/>
                </Content>
            </main>
        </Container>
    )
}