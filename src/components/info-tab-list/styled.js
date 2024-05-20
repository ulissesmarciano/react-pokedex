import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const MainTabs = styled(Tabs)`
   background-color: aliceblue;
   ` 
export const MainTabList = styled(TabList)`
    background-color: yellow;
    
    display: flex;
    justify-content: space-around;
    
    h5 {
        font-size: .8rem;
        font-weight: 600;
        
        text-transform: capitalize;
    }
` 

export const MainTab = styled(Tab)`
    padding: .5rem 1rem;
    list-style: none;
    outline: none;

    &:focus{
        border-bottom: 2px solid green;
    }
` 

export const MainTabPanel = styled(TabPanel)`` 

export const SecondaryTabs = styled(Tabs)`

`
export const SecondaryTabList = styled(TabList)`
    padding: .5rem;
    
    display: flex;
`

export const SecondaryTab = styled(Tab)`
    margin-right: 1rem;
    padding: 0 1rem;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

       
    &:focus{
        
        border: 2px solid green;
        border-radius: 50px;
        
    }
`

export const SecondaryTabPanel = styled(TabPanel)`
`

