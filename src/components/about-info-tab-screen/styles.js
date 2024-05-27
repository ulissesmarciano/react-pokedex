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
    }
`
export const WeaknessesContainer = styled.div`
    ul {
        display: flex;

        li {
            margin-left: .5rem;
            padding: 0 .8rem;

            background-color: blueviolet;
            border-radius: 50px;
        }
    }
`