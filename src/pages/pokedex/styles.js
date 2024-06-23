import styled from "styled-components";

export const Container = styled.main`
    background-color: #f1f1f1;
`

export const TitleContainer = styled.section`
    margin: .8rem 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        margin-bottom: .3rem;
    }

    p{
        margin-bottom: 2rem;
        color: #b44b5095;
        font-weight: 500;
    }

    @media (min-width: 1024px){
        margin: 2rem;
    }
`

export const PokemonCardContainer = styled.ul`
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #b44b5090;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 1fr;
    gap: .5rem;

    @media (min-width: 425px){
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 650px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: .8rem;
    }

    @media (min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        margin: 4rem;
    }
    
    @media (min-width: 1440px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 1.4rem;
        padding: 2rem;
    }

`