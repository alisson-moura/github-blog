import { CardInfo } from "../../components/Card-Info";
import { ProfileContainer, Container, Avatar, Name, GitLink, Description, Infos, Header, Cards } from "./style";
import arrowUp from '../../assets/arrow-up.svg'
import git from '../../assets/git.svg'
import company from '../../assets/company.svg'
import group from '../../assets/group.svg'
import { Post } from "./Card";

export function Home() {
    return (
        <Container>
            <CardInfo>
                <ProfileContainer>
                    <Avatar src="https://avatars.githubusercontent.com/u/48321754?v=4" />
                    <Name>Alisson Moura</Name>
                    <GitLink target="_blank" href="https://github.com/alisson-moura">Github <img src={arrowUp} alt="" /></GitLink>
                    <Description>Me divertindo por aqui e aprendendo coisas novas.</Description>
                    <Infos>
                        <div>
                            <img src={git} alt="" />
                            <span>alisson-moura</span>
                        </div>
                        <div>
                            <img src={company} alt="" />
                            <span>Funfarme</span>
                        </div>
                        <div>
                            <img src={group} alt="" />
                            <span>2</span>
                        </div>
                    </Infos>
                </ProfileContainer>
            </CardInfo>
            <Header>
                <div>
                    <h3>Publicações</h3>
                    <span>6 publicações</span>
                </div>
                <input type="text" placeholder="Buscar conteúdo" />
            </Header>
            <Cards>
                <Post />
            </Cards>
        </Container>
    )
}