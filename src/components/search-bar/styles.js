import styled from "styled-components";

export const Container = styled.div`
    margin: 0 1.2rem;
    display: flex;
    justify-content: center;

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

    input {
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

export const SearchButton = styled.button`
    padding: .4rem;
    margin-left: .2rem;
    
    border: none;
    background-color: #f1636b;
    border-radius: 5px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;

`