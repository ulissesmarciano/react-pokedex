import styled from "styled-components";

export const Container = styled.li`
    margin-bottom: 1rem;
`

export const ImageContainer = styled.div`
    height: 200px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: green;
    border-radius: 8px;

    img{
        height: 8rem;
    }
`

export const PokemonCardBottomContainer = styled.div`
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardTitleContainer = styled.div`
    height: 100%;
    padding: .5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
        color: #c7c7c7;
        font-weight: 700;
    }

    h4 {
        color: #7d3438;
        font-weight: 800;
    }
    
` 
export const TypeContainer = styled.ul`
    height: 100%;

    display: flex;
    flex-direction: column;

    li {
        margin: .5rem 0 0;
        padding: 0 1rem;
        background-color: blueviolet;
        border-radius: 4px;
        color: #ffffff;
        font-weight: 500;
        text-align: center;
    }
`