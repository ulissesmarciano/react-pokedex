import styled from "styled-components";

export const Container = styled.section`
    margin: 1rem 1rem;
    h5 {
        margin-bottom: .8rem;
        font-size: .8rem;
        @media(min-width: 425px){
            font-size: 1.2rem;
        }
    }
`

export const StoryContainer = styled.div`

    p {
        margin-bottom: 1rem;
        @media(min-width: 425px){
            line-height: 1.4rem;
        }

        @media(min-width: 1024px){
            margin: 1rem -1rem;
        }
    }
`
export const WeaknessesContainer = styled.div`
    ul {
        display: flex;

        li {
            margin-left: .5rem;
            padding: 0 .8rem;

            border-radius: 50px;

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
                color: #fff;
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
        }
    }
`