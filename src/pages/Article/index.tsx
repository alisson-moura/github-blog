import { CardInfo } from "../../components/Card-Info";
import { ArticleContainer, Container, Title, GitLink, Infos, Links, TextContainer, LinkBack } from "./style";
import arrowUp from '../../assets/arrow-up.svg'
import git from '../../assets/git.svg'
import comments from '../../assets/comment.svg'
import back from '../../assets/chevron-left.svg'
import calendar from '../../assets/calendar.svg'
import { useContext } from 'react';
import { ProfileContext } from '../../contexts/profileContext';
import { useParams } from 'react-router-dom';
import Markdown from '../../components/Markdown';


export function Article() {
    const { getArticle, profile } = useContext(ProfileContext)
    const { id } = useParams()
    const article = getArticle(Number(id))

    return (
        <Container>
            <CardInfo>
                <ArticleContainer>
                    <Links>
                        <LinkBack to="/"><img src={back} alt="" />voltar</LinkBack>
                        <GitLink target="_blank" href={article.url}>ver no Github <img src={arrowUp} alt="" /></GitLink>
                    </Links>
                    <Title>{article.title}</Title>
                    <Infos>
                        <div>
                            <img src={git} alt="" />
                            <span>{profile.user}</span>
                        </div>
                        <div>
                            <img src={calendar} alt="" />
                            <span>{article.date}</span>
                        </div>
                        <div>
                            <img src={comments} alt="" />
                            <span>{article.comments} comentários</span>
                        </div>
                    </Infos>
                </ArticleContainer>
            </CardInfo>
            <TextContainer>
                <Markdown markdown={article.content} />
            </TextContainer>
        </Container>
    )
}