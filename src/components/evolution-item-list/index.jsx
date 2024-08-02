import React from 'react'
import { PokemonEvolutionItem } from './styles'
import { Link } from 'react-router-dom'

export default function EvolutionItemList({src, alt, pokemonName, type, className, to}) {
    return (
        <PokemonEvolutionItem >
            <Link to={to} onClick={() => {}}>
                <div className='name-and-title-section'>
                    <div className={className}>
                        <img src={src} alt={alt}/>
                    </div>
                    <p>{pokemonName}</p>
                    <ul className='skill-container'>
                        {type}
                    </ul>
                </div>
            </Link>
        </PokemonEvolutionItem>
    )
}
