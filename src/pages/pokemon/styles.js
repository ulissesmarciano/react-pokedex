import styled from "styled-components";
import { pokemonTypeStyles } from "../../constants/colors";

export const Container = styled.main`
    margin: 4rem .5rem 0;
    height: calc(100vh - 94.08px);

    .number-page-container {
        display: none;
    }

    .left-side-section {
        margin: 0 auto;
        width: 80%;
        flex: 1;
    }    

    .left-side-section .pokemon-name-section {
        margin: 0.5rem 1rem .4rem;
        display: flex;
        align-items: center;
     
    }
    
    .left-side-section .pokemon-name-section h4 {
        font-size: 1.4rem;
        margin-right: .5rem;
        text-transform: capitalize;
    }

    .left-side-section .pokemon-name-section p {
        color: #aaaaaa;
        font-weight: 500;
        font-size: 1.2rem;
    }
    
    .left-side-section .skills-container {
        margin-left: 1rem;
    }

    .left-side-section .skills-container ul{
            display: flex;
        }

    .left-side-section .skills-container li {
        margin-right: .8rem;
        padding: 0.1rem 1rem;
    
        border-radius: 50px;
    
        color: #fff;
        text-transform: capitalize;
        font-size: .8rem;
        font-weight: 500;
    
        ${pokemonTypeStyles}
    }

    .left-side-section .pokemon-image-section {
        margin: 1rem auto;
        height: 20rem;
        position: relative;
        
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    
        ${pokemonTypeStyles}
        
    }

    .left-side-section .pokemon-image-section .pokemon-image img {
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

    }

    .left-side-section .pokemon-image-section .pokeball-image img {
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

    }

    .left-side-section .evolution-container {
        margin-bottom: 1rem;
        
    }
    
    .left-side-section .evolution-container h6 {
        margin-bottom: 1rem;
    }
  
    .left-side-section .evolution-container .evolution-image-container {
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
    }

    .right-side-section {
        flex: 1;
    }

    @media(min-width: 425px){
        .left-side-section .left-side-section .pokemon-name-section h4 {
            font-size: 1.6rem;
        }

        .left-side-section .evolution-container h6 {
            font-size: 1rem;
        }

        .left-side-section .evolution-container .evolution-image-container {
            margin: auto;
            width: 80%;
            padding: 0;
        }
        

        .right-side-section .info-tab-list-container {
            padding: 0 10%;
        }
    }

    @media (min-width: 1024px){
        display: grid;
        grid: "number-page-container-left left-side-section right-side-section number-page-container-right"
              / 2.22rem 1fr 1fr 2.22rem;


        .number-page-container {
            display: flex;
            align-items: center;
        
            font-size: 1.2rem;
            font-weight: 700;

        }

        .number-page-container a {
            color: #000;
        }

        .number-page-container.left{
            grid-area: number-page-container-left;
        }

        .number-page-container.right{
            grid-area: number-page-container-right;
        }

        .left-side-section {
            grid-area: left-side-section;
        }

        .left-side-section .pokemon-image-section {
            position: relative;
            padding: 3rem 0;
            height: 50vh;
        }

        .left-side-section .pokemon-image-section .pokemon-image img{
            height: 20rem;
            width: 20rem;
        }

        .left-side-section .pokemon-image-section .pokeball-image img {
            height: 20rem;
            width: 20rem;
        }

        .left-side-section .evolution-container {
            margin: 0;
        }

        .left-side-section .evolution-container .evolution-image-container {
            width: 100%;
        }

        .right-side-section {
            grid-area: right-side-section;
        }
    }
`
