import ReactMarkdown from 'react-markdown'
import { CardInfo } from "../../components/Card-Info";
import { ArticleContainer, Container, Title, GitLink, Infos, Links, TextContainer } from "./style";
import arrowUp from '../../assets/arrow-up.svg'
import git from '../../assets/git.svg'
import comments from '../../assets/comment.svg'
import back from '../../assets/chevron-left.svg'
import calendar from '../../assets/calendar.svg'


export function Article() {
    return (
        <Container>
            <CardInfo>
                <ArticleContainer>
                    <Links>
                        <GitLink target="_blank" href="https://github.com/alisson-moura"><img src={back} alt="" />voltar</GitLink>
                        <GitLink target="_blank" href="https://github.com/alisson-moura">ver no Github <img src={arrowUp} alt="" /></GitLink>
                    </Links>
                    <Title>JavaScript data types and data structures</Title>
                    <Infos>
                        <div>
                            <img src={git} alt="" />
                            <span>alisson-moura</span>
                        </div>
                        <div>
                            <img src={calendar} alt="" />
                            <span>Há um dia</span>
                        </div>
                        <div>
                            <img src={comments} alt="" />
                            <span>2 comentários</span>
                        </div>
                    </Infos>
                </ArticleContainer>
            </CardInfo>
            <TextContainer>
                <ReactMarkdown># Hello, *world*!</ReactMarkdown>
            </TextContainer>
        </Container>
    )
}