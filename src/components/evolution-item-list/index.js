import React from 'react'
import { PokemonEvolutionItem } from './styles'


const Bulbassaur = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"

export default function EvolutionItemList() {
  return (
    <PokemonEvolutionItem >
        <div className='name-and-title-section'>
            <div>
                <img src={Bulbassaur} alt='#'/>
            </div>
            <p>bulbassaur</p>
            <ul className='skill-container'>
                <li>planta</li>
                <li>veneno</li>
            </ul>
        </div>
    </PokemonEvolutionItem>
  )
}
