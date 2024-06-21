import styled from "styled-components";
import { pokemonTypeStyles } from "../../constants/colors";

export const Container = styled.li`
    margin-bottom: 1rem;
`

export const ImageContainer = styled.div`
    height: 200px;
    width: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    
    ${pokemonTypeStyles}

    border-radius: 8px;

    img{
        height: 8rem;
        width: 8rem;
    }
`

export const PokemonCardBottomContainer = styled.div`
    height: 4rem;
    padding: .5rem 0;

    display: flex;
    justify-content: space-between;

`

export const CardTitleContainer = styled.div`
    display: flex;
    flex-direction: column;

    text-transform: capitalize;

    p {
        margin-bottom: .5rem;
        color: #c7c7c7;
        font-weight: 700;
        @media(min-width: 425px) {
            font-size: .8rem;
        }

        @media (min-width: 650px){
        font-size: 1rem;
    }
    }

    h4 {
        color: #7d3438;
        font-weight: 800;

        @media (min-width: 425px){
            font-size: .9rem;
        }
    }
    
` 
export const TypeContainer = styled.ul`
    height: 100%;

    display: flex;
    flex-direction: column;

    text-transform: capitalize;

    
`