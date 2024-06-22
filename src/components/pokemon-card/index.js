import React from 'react'

import { Container } from './styles'
import { Link } from 'react-router-dom'

export default function PokemonCard({
    to,
    cardBackground,
    avatar,
    alt,
    id,
    name,
    types
}) {
    return (
        <Link to={to}>
            <Container>
                <div className={`${cardBackground} image-container`}>
                    <img src={avatar} alt={alt} />
                </div>
                <div className='card-bottom-container'>
                    <div className='card-title-container'>
                      <p>#{id < 10 ? `0${id}`: `${id}`}</p>
                      <h4>{name}</h4>
                    </div>
                    <ul>
                      {types}
                    </ul>
                </div>
            </Container>
        </Link>
    )
}
