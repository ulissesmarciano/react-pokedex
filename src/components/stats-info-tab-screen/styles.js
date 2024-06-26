import styled from "styled-components";

export const StatsTabScreenSection = styled.ul`
    margin-top: 1rem;


    @media(min-width: 425px){
        margin-top: 1.2rem;
    }
    
    li {
        margin-bottom: 1rem;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #c1c1c1;
        font-weight: 700;

        p {
            color: #000;
            font-weight: 500;
        }

        span {
            width: 78%;

            display: flex;
            justify-content: flex-end;
            align-items: center;

            color: #000;
            font-weight: 500;

        }

        @media(min-width: 1024px){
            font-size: .8rem;
        }
    }
`