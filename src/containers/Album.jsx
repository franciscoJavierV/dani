import React from 'react'

//styles
import './styles/Album.css'

//components
import Nav from '../components/Nav'
import Imagen from '../components/Imagen'

//images
import uno from '../assets/pics/conservamos1.jpeg'
import dos from '../assets/pics/conservamos2.jpg'
import tres from '../assets/pics/uno.jpeg'
import cuatro from '../assets/pics/conservamos4.jpeg'
import quinto from '../assets/pics/dos.jpeg'
import sexto from '../assets/pics/tres.jpeg'
import septimo from '../assets/pics/cuatro.jpeg'
import octavo from '../assets/pics/cinco.jfif'
import noveno from '../assets/pics/seis.jfif'
import decimo from '../assets/pics/siete.jfif'

import cristales from '../assets/pics/caño_cristales.png'
import cerro from '../assets/pics/cerro-azul.jpg'
import nemocon from '../assets/pics/nemocon_minas.jpg'
import tuparro from '../assets/pics/parque_tuparro.jpg'
import utria from '../assets/pics/parque-utria.png'
import claro from '../assets/pics/rio_claro.png'
import lajas from '../assets/pics/santuario-lajas.png'
import neusa from '../assets/pics/neusa.jpg'

import shrek from '../assets/pics/shrek.jpg'
import ratatuille from '../assets/pics/ratatuille.jfif'
import harry from '../assets/pics/harry.jfif'
import dark from '../assets/pics/dark.jpg'
import chicas from '../assets/pics/chicas.jfif'
import umbrella from '../assets/pics/umbrella.jpg'

import botanico from '../assets/pics/botanico.jpeg'
import criterion from '../assets/pics/criterion.jpg'
import jaime from '../assets/pics/jaime.jpg'
import leo from '../assets/pics/leo.jpg'
import sasson from '../assets/pics/sasson.jpg'


function Album() {
    return (
        <div className='album'>
            <Nav/>
            <h2 className='album__title'>ALBUM</h2>
            <p className="album__imagenes-tittle">tributo a tu hermosura</p>
            <div className="album__imagenes"> 
                <Imagen img={uno} des={'Eres mi felicidad'}/>
                <Imagen img={dos} des={'Tu sonrisa es demasiada perfeccion para una sola persona'}/>
                <Imagen img={tres} des={'La pijama mas tierna'} />
                <Imagen img={cuatro} des={'En esa cascada me dijiste no jajaja'}/>
                <Imagen img={quinto} des={'Mas d etu pijama es que se ve hermosa'}/>
                <Imagen img={sexto} des={'Full diva inancansable matrona '}/>
                <Imagen img={septimo} des={'Hermosa'}/>
                <Imagen img={octavo} des={'Tu peinado te queda perfecto'}/>
                <Imagen img={noveno} des={'Otro outfit perfecto'}/>
                <Imagen img={decimo} des={'Consentida hermosa'}/>
            </div>
            {/*viajes incluyendo neusa */}
            <p className="album__imagenes-tittle">Lugares a los que debemos ir</p>
            <div className="album__imagenes"> 
                <Imagen img={cristales} des={'Caño cristales'}/>
                <Imagen img={cerro} des={'Uno de los cerros mas lindos de colombia'}/>
                <Imagen img={nemocon} des={'Minas de nemocon'} />
                <Imagen img={tuparro} des={'Se llama tuparro solo me parecio lindo ir jaja'}/>
                <Imagen img={utria} des={'Parque natural utria'}/>
                <Imagen img={claro} des={'Claro en antioquia'}/>
                <Imagen img={lajas} des={'Lajas'}/>
                <Imagen img={neusa} des={'Siempre recuerdo que me tienes que llevar a neusa'}/>
            </div>
            {/*peliculas por ver */}
            <p className="album__imagenes-tittle">Pelucilas que debemos ver</p>
            <div className="album__imagenes"> 
                <Imagen img={shrek} des={'Me encanta'}/>
                <Imagen img={ratatuille} des={'La quiero ver contigo cada semana'}/>
                <Imagen img={harry} des={'Perfecta para las tardes de pereza'} />
                <Imagen img={dark} des={'Insiste mucho en que es buena'}/>
                <Imagen img={chicas} des={'Me parecio buena auqnue no te perdono el spoiler'}/>
                <Imagen img={umbrella} des={'La dijiste tu amor'}/>
            </div>
            {/*lugares por visitar*/}
            <p className="album__imagenes-tittle">Citas que debemos tener</p>
            <div className="album__imagenes"> 
                <Imagen img={botanico} des={'Mi lugar favorito'}/>
                <Imagen img={criterion} des={'De los mejores restaurantes de bogota'}/>
                <Imagen img={jaime} des={'Parque jaime duque '} />
                <Imagen img={leo} des={'Otro de los mejores restaurantes'}/>
                <Imagen img={sasson} des={'Restaurantes que consideran de los mejores'}/>
            </div>
        </div>
    )
}

export default Album
