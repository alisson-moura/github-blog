import { CardInfo } from "../../components/Card-Info";
import { ProfileContainer, Container, Avatar, Name, GitLink, Description, Infos, Header, Cards } from "./style";
import arrowUp from '../../assets/arrow-up.svg'
import git from '../../assets/git.svg'
import company from '../../assets/company.svg'
import group from '../../assets/group.svg'
import { Post } from "./Card";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../contexts/profileContext";

export function Home() {
    const { profile, articles } = useContext(ProfileContext)
    const [filteredArticles, setFilteredArticles] = useState(articles)

    function filterArticles(event: ChangeEvent<HTMLInputElement>): void {
        const filter = event.target.value
        if (filter) {
            setFilteredArticles(state =>
                [...articles.filter(article => article.title.includes(filter))])
        } else {
            setFilteredArticles(articles)
        }
    }

    useEffect(() => { setFilteredArticles(articles) }, [articles])


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
                    <span>{articles.length == 0
                        ? (`nada publicado ainda`)
                        : articles.length > 1
                            ? (`${articles.length} publicações`)
                            : (`${articles.length} publicação`)}</span>
                </div>
                <input onChange={filterArticles} type="text" placeholder="Buscar conteúdo" />
            </Header>
            <Cards>
                {filteredArticles && filteredArticles.map(article => (
                    <Post key={article.id} article={article} />
                ))}

            </Cards>
        </Container>
    )
}