import styled from "styled-components";

export const Container = styled.div``

export const TitleContainer = styled.div`
    margin: .8rem 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        margin-bottom: .3rem;
    }

    p{
        color: #b44b5095;
        font-weight: 500;
    }
`

export const PokemonCardContainer = styled.ul`
    margin: 1rem;
    padding: 1rem;
    border: 2px solid #b44b50;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 1fr;
    gap: .5rem;

`