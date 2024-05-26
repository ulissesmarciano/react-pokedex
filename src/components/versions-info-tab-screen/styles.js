import styled from "styled-components"

export const NavVersionsContainer = styled.nav`
    margin-top: 1rem;

    ul.nav{
        margin-bottom: 1rem;

        display: flex;

    }
    
    ul.nav li{
        margin-right: .4rem;
        padding: .1rem 1rem;

        border-radius: 50px;
        cursor: pointer;

        font-size: .8rem;
        text-transform: capitalize;
        
    }

    ul.nav li.active {
        border: 2px solid green;
    }
    
`


