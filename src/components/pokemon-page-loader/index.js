import React from 'react'

import PokeballIcon from '../../assets/icons/pokeball-icon.svg'
import { Container } from './styles'
 
export default function PokemonPageLoader() {
  return (
    <Container>
        <div className='title-container'>
            <div className='title'/>
            <div className='skill'/>
        </div>
        <div className='image-section'>
            <img src={PokeballIcon} alt='carregando página'/>
        </div>
        <div className='evolution-container'>
            <div className='evolution-title'/>
            <div className='evolution-item-container'>
                <div className='evolution-item'>
                    <div className='evolution-image'/>
                    <div className='evolution-name'/>
                </div>
                <div className='evolution-item'>
                    <div className='evolution-image'/>
                    <div className='evolution-name'/>
                </div>
                <div className='evolution-item'>
                    <div className='evolution-image'/>
                    <div className='evolution-name'/>
                </div>
            </div>
        <div className='tab-menu'>
            <div className='tab-menu-titles'/>
            <div className='tab-menu-titles'/>
            <div className='tab-menu-titles'/>
        </div>

        <div className='screen-container'>
            <div className='content-container'>
                <div />
                <div />
                <div />
            </div>
        </div>
            <div className='skill-container'>
                <div />
                <div />
                <div />  
            </div>
        </div>
    </Container>
  )
}
