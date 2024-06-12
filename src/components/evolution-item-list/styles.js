import styled from "styled-components";

export const PokemonEvolutionItem = styled.ul`
        margin: 0 -3rem;

        .name-and-title-section {
            display: flex;
            flex-direction: column;
            align-items: center;

        }
        
        .name-and-title-section p {
            text-transform: capitalize;
            font-size: .8rem;
            font-weight: 500;

        }

        .name-and-title-section div {
                height: 4rem;
                width: 4rem;
                padding: .4rem;

                border-radius: 50px;

                display: flex;
                align-items: center;
                justify-content: center;

            &.normal {
                background-color: #a6a87710;
                border: 2px solid #a6a877;
            }

            &.grass {
                background-color: #77c85010;
                border: 2px solid #77c850;
            }

            &.fire {
                background-color: #ee7f3010;
                border: 2px solid #ee7f30;
            }

            &.water {
                background-color: #678fee10;
                border: 2px solid #678fee;
            }

            &.electric {
                background-color: #f7cf2e10;
                border: 2px solid #f7cf2e;
            }

            &.ice {
                background-color: #98d5d710;
                border: 2px solid #98d5d7;
            }

            &.ground {
                background-color: #dfbf6910;
                border: 2px solid #dfbf69;
            }

            &.flying {
                background-color: #a98ff010;
                border: 2px solid #a98ff0;
            }

            &.poison {
                background-color: #a040a010;
                border: 2px solid #a040a0;
            }

            &.fighting {
                background-color: #bf302910;
                border: 2px solid #bf3029;
            }

            &.psychic {
                background-color: #f6568710;
                border: 2px solid #f65687;
            }

            &.dark {
                background-color: #72584710;
                border: 2px solid #725847;
            }

            &.rock {
                background-color: #b8a13710;
                border: 2px solid #b8a137;
            }

            &.bug {
                background-color: #a8b72010;
                border: 2px solid #a8b720;
            }

            &.ghost {
                background-color: #6e589610;
                border: 2px solid #6e5896;
            }
            
            &.steel {
                background-color: #b9b7cf10;
                border: 2px solid #b9b7cf;
            }

            &.dragon {
                background-color: #6f38f610;
                border: 2px solid #6f38f6;
            }

            &.fairy {
                background-color: #f9aec710;
                border: 2px solid #f9aec7;
            }
                
        }

            
        .name-and-title-section img {
                height: 3rem;
                width: 3rem;
                @media(min-width: 1024px){
                    height: 4rem;
                    width: 4rem;
                }
                
        }

        .skill-container {
            display: flex;
        }

        .skill-container li {
            display: none;
        }

        @media(min-width: 426px){
            max-width: 332px;
            margin: 0 auto;
        }

        @media(min-width: 1024px){
            max-width: 500px;
           
            .skill-container li {
                margin: .1rem;
                padding: 0 .5rem;
                border-radius: 50px;
                
                font-size: .8rem;
                text-transform: capitalize;
                
                display: flex;
                text-align: center;
            }

            .name-and-title-section div {
                height: 5rem;
                width: 5rem;
            }

            .name-and-title-section p {
                font-size: 1rem;
            }
        } 
`
