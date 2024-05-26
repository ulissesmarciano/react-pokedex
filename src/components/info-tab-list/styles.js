import styled from "styled-components";

export const NavContainer = styled.nav`

        display: flex;
        align-items: center;
        justify-content: space-around;

`

export const TabButton = styled.li`

        padding: .6rem;
    
        list-style: none;

        border-radius: 1rem 1rem 0 0;
        border-bottom: none;

        font-weight: bolder;

        transition: 500ms;
        &:hover{
                transition: all 0.5s;
                cursor: pointer;
                -webkit-transform: translateY(-4%);
                transform: translateY(-4%);
                box-shadow: #00000020 0px -10px 1rem;
        }

        &:focus{
                transition: all 0.5s;
                cursor: pointer;
                -webkit-transform: translateY(-4%);
                transform: translateY(-4%);
                box-shadow: rgb(0 0 0 / 20%) 0px -15px 1rem;
        }
        
        

`