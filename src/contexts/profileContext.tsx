import { createContext, useEffect, useState } from "react";
import { formatDistanceToNow } from 'date-fns'
import { apiClient } from "../lib/axios";
import { ptBR } from "date-fns/locale";

interface I_Profile {
    name: string
    bio: string
    github: string
    user: string
    company: string
    followers: number
    avatar_url: string
}
interface I_Article {
    title: string
    url: string
    comments: string
    date: string
    content: string
    id: number
}
interface I_ProfileContext {
    profile: I_Profile
    articles: I_Article[]
    getArticle(id: number): I_Article
}

export const ProfileContext = createContext({} as I_ProfileContext)

export function ProfileProvider({ children }: React.PropsWithChildren) {
    const [profile, setProfile] = useState<I_Profile>({} as I_Profile)
    const [articles, setArticles] = useState<I_Article[]>([] as I_Article[])

    async function getProfile(): Promise<void> {
        const { data } = await apiClient.get('user')
        setProfile({
            name: data.name,
            bio: data.bio,
            github: data.html_url,
            user: data.login,
            company: data.company,
            followers: data.followers,
            avatar_url: data.avatar_url
        })
    }
    async function getArticles(): Promise<void> {
        const { data } = await apiClient.get('repos/alisson-moura/github-blog/issues')
        const elements = data.map((element: any) => ({
            comments: element.comments,
            date: formatDistanceToNow(new Date(element.created_at), {locale: ptBR, addSuffix: true}),
            title: element.title,
            url: element.html_url,
            content: element.body,
            id: element.id
        }))
        setArticles(elements)
    }

    function getArticle(id: number): I_Article {
        const article = articles.find(item => item.id === id)
        return article!
    }

    useEffect(() => {
        getArticles()
        getProfile()
    }, [])

    return (
        <ProfileContext.Provider value={{ profile, articles, getArticle }}>
            {children}
        </ProfileContext.Provider>
    )
}