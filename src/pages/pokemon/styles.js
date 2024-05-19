import styled from "styled-components";

export const Container = styled.div`
    margin: 0 .5rem;
    
`
export const PokemonNameContainer = styled.div`
    margin: 1rem 1rem .4rem;
    display: flex;
    align-items: center;

    h5{
        font-size: 1.4rem;
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

        color: #000000;
        text-transform: capitalize;
        font-size: .8rem;
        font-weight: 500;
    }
`

export const PokemonImageContainer = styled.div`
    margin: 2rem auto;
    height: 15rem;
    max-width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    //background: radial-gradient( green 10%, transparent 70%);
    border-radius: 20px;
    
    img {
        filter:  drop-shadow(0 0 2rem #00ff0070);
        height: 100%;
    }
`