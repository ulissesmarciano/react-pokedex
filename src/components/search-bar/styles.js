import styled from "styled-components";

export const Container = styled.div`
    margin: 0 1.2rem;
    display: flex;
    justify-content: center;

    @media (min-width: 650px){
        margin-bottom: 1.2rem;
    }

`

export const SearchLabel = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    border: 1px solid #b44b5060;
    border-radius: 5px;
    background-color: #b44b5010;
    img {
        height: 1rem;
        margin: .2rem;

        opacity: 0.3;
        
    }

    @media (min-width: 650px){
        width: 70%;
    }

    @media (min-width: 1024px){
        max-width: 650px;
    }

    input {
        width: 100%;
        border: none;
        background-color: transparent;
        outline: none;
        color: #00000090;
        &::placeholder {
            color: #00000040;
            font-size: .9rem;
            font-weight: 600;
        }
    }
`

