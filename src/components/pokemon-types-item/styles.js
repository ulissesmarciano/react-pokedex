import styled from "styled-components";
import { pokemonTypeStyles } from "../../constants/colors";

export const Container = styled.li`
    margin-bottom: .2rem;
    padding: 0 1rem;
    border-radius: 50px;
    color: #ffffff;
    font-weight: 500;
    text-align: center;

    @media(min-width: 425px) {
        font-size: .8rem;
    }

    ${pokemonTypeStyles}
`