import styled from "styled-components";

export const CardInfoContainer = styled.div`
    background: ${props => props.theme['base-profile']};
    max-width: 864px;
    width: 100%;
    min-height: 100px;
    margin-top: -80px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
    border-radius: ${props => props.theme["radius-10"]};
    position: relative;
    div {
        width: 100%;
        height: 100%;
        padding: 2rem;
    }
`