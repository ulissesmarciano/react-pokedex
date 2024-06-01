import styled from "styled-components";

export const ListContainer = styled.ul`
        margin: 0 -3rem;

        display: flex;
        justify-content: space-around;
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

                border: 2px solid green;
                border-radius: 50px;
                background-color: #00ff0010;

                display: flex;
                align-items: center;
                justify-content: center;
                
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
                background-color: yellow;
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
