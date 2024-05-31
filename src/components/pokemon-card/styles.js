import styled from "styled-components";

export const Container = styled.li`
    margin-bottom: 1rem;
`

export const ImageContainer = styled.div`
    height: 200px;
    width: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    
    
    &.normal {
            background-color: #a6a87790;
        }

    &.grass {
        background-color: #77c850;
    }

    &.fire {
        background-color: #ee7f30;
    }

    &.water {
        background-color: #678fee;
    }

    &.electric {
        background-color: #f7cf2e;
    }

    &.ice {
        background-color: #98d5d7;
    }

    &.ground {
        background-color: #dfbf69;
    }

    &.flying {
        background-color: #a98ff0;
    }

    &.poison {
        background-color: #a040a0;
    }

    &.fighting {
        background-color: #bf3029;
    }

    &.psychic {
        background-color: #f65687;
    }

    &.dark {
        background-color: #725847;
    }

    &.rock {
        background-color: #b8a137;
    }

    &.bug {
        background-color: #a8b720;
    }

    &.ghost {
        background-color: #6e5896;
    }
    
    &.steel {
        background-color: #b9b7cf;
    }

    &.dragon {
        background-color: #6f38f6;
    }

    &.fairy {
        background-color: #f9aec7;
    }

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