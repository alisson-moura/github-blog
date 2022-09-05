import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
    display: block;
    text-decoration: none;
    color: ${props => props.theme["base-text"]};
    background: ${props => props.theme['base-profile']};
    padding: 32px;
    border-radius: ${props => props.theme["radius-10"]};
    cursor: pointer;
    header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 1rem;
        h3 {
            color: ${props => props.theme['base-title']};
            display: inline-flex;
            font-size: 24px;
            flex: 1;
        }
        margin-bottom: 20px;
   }
   &:hover{
        color: ${props => props.theme["base-text"]};
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green']};
   }
`