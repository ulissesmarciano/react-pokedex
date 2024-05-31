import styled from "styled-components";

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

    &.normal {
            background-color: #a6a877;
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
`