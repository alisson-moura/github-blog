import ReactMarkdown from "react-markdown";
import { Card } from "./style";

interface I_Article {
    id: number
    title: string
    date: string
    content: string
}
interface PostProps {
    article: I_Article
}

export function Post({ article }: PostProps) {
    return (
        <Card to={`/article/${article.id}`}>
            <header>
                <h3>{article.title}</h3>
                <span>{article.date}</span>
            </header>
            <span><ReactMarkdown children={article.content.substring(0, 140) + ' ...'} /></span>
        </Card>
    )
}