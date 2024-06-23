import styled from "styled-components";

export const Container = styled.header`
    height: 2.4rem;
    position: absolute;
    top: 15px;
    left: 10%;

    display: flex;
    align-items: center;
    svg {
        height: 1.2rem;
        margin: 0 .4rem -.3rem;
    }

    p {
        font-size: 1rem;
        font-weight: 600;
        color: #00000095;
    }

    @media(min-width: 425px){
        height: 2.8rem;
    }

    @media(min-width: 1024px){
        left: 120px;
    }
`