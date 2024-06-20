import styled from "styled-components";
import { pokemonTypeStyles } from "../../style/pokemon-types-style";

export const Container = styled.div`
    margin: 4rem .5rem 0;
    height: calc(100vh - 94.8px);

    @media (min-width: 1024px){
        display: flex;
    }
    
`
export const NumberPageContainer = styled.div`
    display: none;
    
    @media (min-width: 1024px){
        padding: 2rem;
        display: flex;
        align-items: center;
    
        font-size: 1.2rem;
        font-weight: 700;

        a {
            color: #000;
        }
    }
`
export const LeftSideSection = styled.section`
    margin: 0 auto;
    width: 80%;
    flex: 1;
`

export const RightSideSection = styled.section`
    flex: 1;
`

export const PokemonNameContainer = styled.div`
    margin: 1rem 1rem .4rem;
    display: flex;
    align-items: center;


    h4{
        font-size: 1.4rem;
        margin-right: .5rem;
        text-transform: capitalize;
    }

    p{
        color: #aaaaaa;
        font-weight: 500;
        font-size: 1.2rem;
    }

    @media(min-width: 425px){
        h4 {
            font-size: 1.6rem;
        }
    }
`

export const SkillContainer = styled.div`
    margin-left: 1rem;

    ul{
        display: flex;
    }
    li {
        margin-right: .8rem;
        padding: 0.1rem 1rem;

        background-color: red;
        border-radius: 50px;

        color: #fff;
        text-transform: capitalize;
        font-size: .8rem;
        font-weight: 500;

        ${pokemonTypeStyles}
    }
`

export const PokemonImageContainer = styled.div`
    margin: 2rem auto;
    height: 10rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    @media(min-width: 1024px) {
        position: relative;
    }

    ${pokemonTypeStyles}
    
    .pokemon-image {
        height: 10rem;
        width: 10rem;
        z-index: 1;

        @media(min-width: 1024px) {
            position: absolute;
            height: 20rem;
            width: 20rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }

    .pokeball-image {
        display: none;

        @media(min-width: 1024px) {
            position: absolute;
            left: 15%;
            right: 0;
            top: 0;
            bottom: 15%;
            margin: auto;

            height: 20rem;
            width: 20rem;
            
            display: flex;
            opacity: 0.5;

            @keyframes runningball {
                0% {
                    transform: rotate(0);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            animation: runningball 3s linear infinite;
        }
    }

    @media(min-width: 1024px){
        padding: 3rem 0;
        height: 50vh;

        
    }
`


export const EvolutionContainer = styled.ul`
    margin: 1rem;
   
    h6 {
        margin-bottom: 1rem;
        @media(min-width: 425px){
            font-size: 1rem;
        }
    }

    @media (min-width: 1024px){
        margin: 0;
    }
        
`

export const EvolutionImageContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    @media(min-width: 425px){
        margin: auto;
        width: 80%;
        padding: 0;
    }

    @media (min-width: 1024px){
        width: 100%;
    }
`

export const InfoTabListContainer = styled.section`
    @media(min-width: 425px){
        padding: 0 10%;
    }

`