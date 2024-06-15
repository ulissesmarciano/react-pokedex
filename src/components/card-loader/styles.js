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
    
    
    background-color: #c1c1c1;
    border-radius: 6px;
`

export const PokemonCardBottomContainer = styled.div`
    height: 4rem;
    padding: .5rem 0;

    display: flex;
    justify-content: space-between;

`

export const CardTitleContainer = styled.ul`
    display: flex;
    flex-direction: column;

    text-transform: capitalize;

    li {
        height: 10px;
        width: 70px;

        margin-bottom: .6rem;

        background-color: #c1c1c1;
        border-radius: 4px;
    }
    
` 
export const TypeContainer = styled.ul`
    height: 100%;

    display: flex;
    flex-direction: column;

    text-transform: capitalize;

    li {
        height: 14px;
        width: 70px;

        margin-bottom: .4rem;

        background-color: #c1c1c1;
        border-radius: 10px;
    }

    
`