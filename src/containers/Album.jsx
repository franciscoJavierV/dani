import React from 'react'

//styles
import './styles/Album.css'

//components
import Nav from '../components/Nav'
import Imagen from '../components/Imagen'

function Album() {
    return (
        <div className='album'>
            <Nav/>
            <h2 className='album__title'>ALBUM</h2>
            <div className="album__imagenes"> 
                <Imagen/>
                <Imagen/>
            </div>
            
        </div>
    )
}

export default Album
