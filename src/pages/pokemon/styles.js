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
    max-width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    
    img {
        height: 10rem;
        width: 10rem;

        //TESTAR NOVO BACKGROUND

        &.normal {
            filter:  drop-shadow(0 0 2rem #a6a87770);
        }
        
        &.grass {
            filter:  drop-shadow(0 0 2rem #77c85070);
        }
        
        &.fire {
            filter:  drop-shadow(0 0 2rem #ee7f3070);
        }
        
        &.water {
            filter:  drop-shadow(0 0 2rem #678fee70);
        }

        &.electric {
            filter: drop-shadow(0 0 2rem #f7cf2e70);
        }
        
        &.ice {
            filter: drop-shadow(0 0 2rem #98d5d770);
        }
        
        &.ground {
            filter: drop-shadow(0 0 2rem #dfbf6970);
        }
        
        &.flying {
            filter: drop-shadow(0 0 2rem #a98ff070);
        }
        
        &.poison {
            filter: drop-shadow(0 0 2rem #a040a070);
        }
        
        &.fighting {
            filter: drop-shadow(0 0 2rem #bf302970);
        }
        
        &.psychic {
            filter: drop-shadow(0 0 2rem #f6568770);
        }
        
        &.dark {
            filter: drop-shadow(0 0 2rem #72584770);
        }
        
        &.rock {
            filter: drop-shadow(0 0 2rem #b8a13770);
        }
        
        &.bug {
            filter: drop-shadow(0 0 2rem #a8b72070);
        }
        
        &.ghost {
            filter: drop-shadow(0 0 2rem #6e589670);
        }
        
        &.steel {
            filter: drop-shadow(0 0 2rem #b9b7cf70);
        }
        
        &.dragon {
            filter: drop-shadow(0 0 2rem #6f38f670);
        }
        
        &.fairy {
            filter: drop-shadow(0 0 2rem #f9aec770);
        }
    }
    @media(min-width: 1024px){
        padding: 3rem 0;
        height: 50vh;

        img {
            height: 20rem;
            width: 20rem;
        }
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