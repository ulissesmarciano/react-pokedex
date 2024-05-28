import styled from "styled-components";

export const ListContainer = styled.ul`
        
        display: flex;
        justify-content: space-between;
        li {
            margin: .4rem;
            text-align: center;
        }
        
        .name-and-title-section p {
            text-transform: capitalize;
            font-size: .8rem;
            font-weight: 500;

        }

        .name-and-title-section div {
                height: 6rem;
                width: 6rem;
                padding: .6rem;

                border: 2px solid green;
                border-radius: 50px;
                background-color: #00ff0010;

                display: flex;
                align-items: center;
                justify-content: center;
                
        }
            
        .name-and-title-section img {
                height: 3rem;
                @media(min-width: 1024px){
                    height: 4rem;
                }
                
        }

        .skill-container {
            display: flex;
        }

        .skill-container li {
            margin: .1rem;
            padding: 0 .5rem;
            background-color: yellow;
            border-radius: 50px;

            font-size: .8rem;
            text-transform: capitalize;
        }
`
