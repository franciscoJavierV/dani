import React from 'react'

//styles
import './styles/Imagen.css'
function Imagen(props) {
    return (
        <div className='imagen'>
            <div className="imagen__container">
                <img className='imagen__container-img' src={props.img} alt="imagen"/>
            </div>
            <div className="imagen__descripcion">
                <p className="imagen__descripcion-desc">descripcion</p>
            </div>
        </div>
    )
}

export default Imagen
