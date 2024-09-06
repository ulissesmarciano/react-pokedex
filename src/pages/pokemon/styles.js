import styled from "styled-components";
import { pokemonTypeStyles } from "../../constants/colors";

export const Container = styled.main`
    margin: 4rem .5rem 0;
    height: calc(100vh - 94.08px);

    .number-page-container {
        display: none;
        
        @media (min-width: 1024px){
            padding: 2rem;
            display: flex;
            align-items: center;
        
            font-size: 1.2rem;
            font-weight: 700;
        
            a {
                color: #000;
            }
        }
    }

    .left-side-section {
        margin: 0 auto;
        width: 80%;
        flex: 1;
    }

    .right-side-section {
        flex: 1;
    }

    .pokemon-name-section {
        margin: 0.5rem 1rem .4rem;
        display: flex;
        align-items: center;


        h4{
            font-size: 1.4rem;
            margin-right: .5rem;
            text-transform: capitalize;
        }

        p{
            color: #aaaaaa;
            font-weight: 500;
            font-size: 1.2rem;
        }

        @media(min-width: 425px){
            h4 {
                font-size: 1.6rem;
            }
        }
    }

    .skills-container {
        margin-left: 1rem;
        
        ul{
            display: flex;
        }
        li {
            margin-right: .8rem;
            padding: 0.1rem 1rem;
        
            background-color: red;
            border-radius: 50px;
        
            color: #fff;
            text-transform: capitalize;
            font-size: .8rem;
            font-weight: 500;
        
            ${pokemonTypeStyles}
        }
    }

    .pokemon-image-section {
        margin: 1rem auto;
        height: 20rem;
        position: relative;
        
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        
        @media(min-width: 1024px) {
            position: relative;
        }
        
        ${pokemonTypeStyles}
        
        .pokemon-image img {
            height: 10rem;
            width: 10rem;
            z-index: 1;
            position: absolute;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            
            @media(min-width: 1024px) {
                height: 20rem;
                width: 20rem;
            }
        }
        
        .pokeball-image img {
            position: absolute;
            left: 15%;
            right: 0;
            top: 0;
            bottom: 15%;
            margin: auto;
    
            height: 10rem;
            width: 10rem;
            
            display: flex;
            opacity: 0.5;
    
            @keyframes runningball {
                0% {
                    transform: rotate(0);
                }
    
                100% {
                    transform: rotate(360deg);
                }
            }
    
            animation: runningball 3s linear infinite;

            @media(min-width: 1024px) {
                height: 20rem;
                width: 20rem;
            }
        }
        
        @media(min-width: 1024px){
            padding: 3rem 0;
            height: 50vh;
        }
    }

    .evolution-container {
        margin-bottom: 1rem;
          h6 {
              margin-bottom: 1rem;
              @media(min-width: 425px){
                  font-size: 1rem;
              }
          }
        
          @media (min-width: 1024px){
              margin: 0;
          }
    }

    .evolution-image-container {
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;

        @media(min-width: 425px){
            margin: auto;
            width: 80%;
            padding: 0;
        }

        @media (min-width: 1024px){
            width: 100%;
        }
    }

    .info-tab-list-container {
        @media(min-width: 425px){
            padding: 0 10%;
        }
    }

    @media (min-width: 1024px){
        display: flex;
    }
`
