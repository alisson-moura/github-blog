import { CardInfo } from "../../components/Card-Info";
import { ProfileContainer, Container, Avatar, Name, GitLink, Description, Infos, Header, Cards } from "./style";
import arrowUp from '../../assets/arrow-up.svg'
import git from '../../assets/git.svg'
import company from '../../assets/company.svg'
import group from '../../assets/group.svg'
import { Post } from "./Card";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/profileContext";

export function Home() {
    const { profile, articles } = useContext(ProfileContext)

    return (
        <Container>
            <CardInfo>
                <ProfileContainer>
                    <Avatar src={profile.avatar_url} />
                    <Name>{profile.name}</Name>
                    <GitLink target="_blank" href={profile.github}>Github <img src={arrowUp} alt="" /></GitLink>
                    <Description>{profile.bio}</Description>
                    <Infos>
                        <div>
                            <img src={git} alt="" />
                            <span>{profile.user}</span>
                        </div>
                        <div>
                            <img src={company} alt="" />
                            <span>{profile.company || 'Funfarme'}</span>
                        </div>
                        <div>
                            <img src={group} alt="" />
                            <span>{profile.followers}</span>
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
                {articles && articles.map(article => (
                    <Post key={article.id} article={article}/>
                ))}
                
            </Cards>
        </Container>
    )
}