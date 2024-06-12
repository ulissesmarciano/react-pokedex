import React from 'react'
import { PokemonEvolutionItem } from './styles'

export default function EvolutionItemList({src, alt, pokemonName, type}) {
  return (
    <PokemonEvolutionItem >
        <div className='name-and-title-section'>
            <div>
                <img src={src} alt={alt}/>
            </div>
            <p>{pokemonName}</p>
            <ul className='skill-container'>
                {type}
            </ul>
        </div>
    </PokemonEvolutionItem>
  )
}
