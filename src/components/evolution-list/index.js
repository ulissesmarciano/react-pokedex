import React from 'react'
import { ListContainer } from './styles'


const Bulbassaur = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"

export default function EvolutionList() {
  return (
        <ListContainer>
            <li className='name-and-title-section'>
                <div>
                    <img src={Bulbassaur} alt='#'/>
                </div>
                <p>bulbassaur</p>
                <ul className='skill-container'>
                    <li>planta</li>
                    <li>veneno</li>
                </ul>
            </li>
            <li className='name-and-title-section'>
                <div>
                    <img src={Bulbassaur} alt='#'/>
                </div>
                <p>bulbassaur</p>
                <ul className='skill-container'>
                    <li>planta</li>
                    <li>veneno</li>
                </ul>
            </li>
            <li className='name-and-title-section'>
                <div>
                    <img src={Bulbassaur} alt='#'/>
                </div>
                <p>bulbassaur</p>
                <ul className='skill-container'>
                    <li>planta</li>
                    <li>veneno</li>
                </ul>
            </li>
        </ListContainer>
  )
}
