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


export const Container = styled.ul`
    margin: 1rem 0;
    h5 {
        margin: 1.6rem 0 1.2rem;
        font-size: 1.4rem;
    }
    
        
    
`

export const DataItemVersionsList = styled.li`
    margin-bottom: .8rem;
        
    display: flex;
    align-items: center;

    color: #c1c1c1;
    font-weight: 800;

    span {
        margin-left: 1rem;
        color: #000;
        font-weight: 500;
        display: flex;
        align-items: center;

        img{
            height: 1rem;
        }
    }
`
