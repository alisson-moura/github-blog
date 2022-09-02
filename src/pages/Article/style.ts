import styled from "styled-components";

export const Container = styled.div`
    max-width: 864px;
    margin: 0 auto;
`;
export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-around;
  h1 {
    color: ${props => props.theme["base-text"]};
    font-size: 1.5rem;
  }
`;

export const Links = styled.div`
 padding: 0!important;
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h2`
    grid-area: title;
    font: bold 1.5rem;
    color: ${props => props.theme['base-title']};
`

export const GitLink = styled.a`
    cursor: pointer;
    color: ${props => props.theme['blue']};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    align-self: center;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    img {
        width: 14px;
        margin-top: -2px;
    }
`

export const Infos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    padding: 0!important;
   div {
    display: flex;
    gap: 0.5rem;
    padding: 0!important;
    img {
        height: 24px;
    }
   }
`