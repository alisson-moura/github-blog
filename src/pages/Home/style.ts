import styled from "styled-components";

export const Container = styled.div`
    max-width: 864px;
    margin: 0 auto;
`;
export const ProfileContainer = styled.div`
    display: grid;
    grid-template:       "avatar title link" 50px
                         "avatar subtitle subtitle" 70px
                         "avatar info info" 30px
                         / 150px 2fr 70px;
    column-gap: 2rem;
`;
export const Avatar = styled.img`
    grid-area: avatar;
    width: 150px;
    height: 150px;
    border-radius: ${props => props.theme["radius-10"]};
`
export const Name = styled.h2`
    grid-area: title;
    font: bold 1.5rem;
    color: ${props => props.theme['base-title']};
`;
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
export const Description = styled.span`
    grid-area: subtitle;
`
export const Infos = styled.div`
    grid-area: info;
    max-height: 32px;
    display: flex;
    gap: 1.5rem;
    justify-content: start;
    padding: 0!important;
   div {
    display: flex;
    gap: 6px;
    padding: 0!important;
    img {
        height: 24px;
    }
   }
`
export const Header = styled.div`
    margin-top: 100px;
    max-width: 864px;
    width: 100%;
   div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        color: ${props => props.theme['base-title']};
    }
    margin-bottom: 12px;
   }
   input {
        width: 100%;
        height: 50px;
        border-radius: ${props => props.theme["radius-6"]};
        padding: 12px;
        font-size: 1.2rem;
        background: ${props => props.theme['base-input']};
        border: none;
        color: ${props => props.theme['base-text']};
        &::placeholder {
            color:  ${props => props.theme['base-label']};
        }
   }
`
export const Cards = styled.div`
    margin-top: 36px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
`