import styled from "styled-components";

export const ButtonContainer = styled.button`
    height: 3.4rem;
    width: 3.4rem;
    
    border: 3px solid #fff;
    border-radius: 50px;
    background-color: #0951a3;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    

    img {
        height: 2rem;
        width: auto;

        animation: bright 1s alternate infinite;

        @keyframes bright {
            0% {
                opacity: 0.8;
            }
            100% {
                opacity: 1;
                filter: drop-shadow(1px 1px 15px rgba(255, 255, 255, .5))
            }
        }
    }
`