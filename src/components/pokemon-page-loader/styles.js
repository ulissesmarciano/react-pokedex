import styled from "styled-components";

export const Container = styled.div`
    margin: 6rem 4rem;

    .title-container {
        padding: 0 2rem;

        .title {

            height: 26px;
            width: 25%;
            margin-bottom: 1rem;

            background-color: #b2b3b3;
            border-radius:2px;
        }

        .skill {
            height: 20px;
            width: 8%;

            background-color: #b2b3b3;
            border-radius: 20px;
        }

        
    }

    .image-section {
        text-align: center;
        
        padding: 4rem;
        img {
            
            filter: brightness(0.7);
            height: 5rem;
            width: 5rem;
            
            @keyframes loading {
                0% {
                    transform: rotate(0);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            animation: loading 2s linear infinite;
        }

        }
        .evolution-container {

            padding: 0 2rem;

            display: flex;
            flex-direction: column;
        }

        
        .evolution-title {
            height: 20px;
            width: 12%;
            margin-bottom: 1rem;

            background-color: #b2b3b3;
        }

        .evolution-item-container {

            display: flex;
            justify-content: space-between;
        }

        .evolution-item {
            display: flex;
            flex-direction: column;
        }

        .evolution-image {
            height: 65px;
            width: 65px;
            margin-bottom: .4rem;

            background-color: #b2b3b3;
            border-radius: 50px;
        }

        .evolution-name {
            height: 10px;
            margin-bottom: 1.4rem;

            background-color: #b2b3b3;
            border-radius: 2px;

        }

        .tab-menu {
            display: flex;
            justify-content: space-around;
        }

        .tab-menu-titles {
            height: 18px;
            width: 12%;
            margin-bottom: 2.2rem;

            background-color: #b2b3b3;
        }

        .content-container {
            div{
                height: 20px;
                margin-bottom: 1.4rem;

                background-color: #b2b3b3;
                border-radius: 2px;
            }


       }

        .skill-container {
            display: flex;
            div {
                height: 20px;
                width: 10%;
                margin: 0 1rem;

                background-color: #b2b3b3;
            }
        }
`