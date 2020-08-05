import React from 'react'

//styles
import './styles/Album.css'

//components
import Nav from '../components/Nav'
import Imagen from '../components/Imagen'

//images
import uno from '../assets/pics/conservamos1.jpeg'
import dos from '../assets/pics/conservamos2.jpg'
import tres from '../assets/pics/conservamos3.jpg'
import cuatro from '../assets/pics/conservamos4.jpeg'
import quinto from '../assets/pics/conservamos5.jpeg'
import sexto from '../assets/pics/conservamos6.jpeg'
import septimo from '../assets/pics/conservamos7.jpeg'
import octavo from '../assets/pics/conservamos8.jpeg'
import noveno from '../assets/pics/conservamos9.jpeg'

function Album() {
    return (
        <div className='album'>
            <Nav/>
            <h2 className='album__title'>ALBUM</h2>
            <p className="album__imagenes-tittle">Lo que conservamos</p>
            <div className="album__imagenes"> 
                <Imagen img={uno}/>
                <Imagen img={dos}/>
                <Imagen img={tres}/>
                <Imagen img={cuatro}/>
                <Imagen img={quinto}/>
                <Imagen img={sexto}/>
                <Imagen img={septimo}/>
                <Imagen img={octavo}/>
                <Imagen img={noveno}/>
            </div>
            {/*viajes incluyendo neusa */}

            {/*peliculas por ver */}

            {/*lugares por visitar*/}
        </div>
    )
}

export default Album
