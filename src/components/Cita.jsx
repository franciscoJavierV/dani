import React from 'react'

//styles
import './styles/Cita.css'

//logo
import logo from '../assets/logos/Logo.jpg'

function Cita(props) {
    return (
        <div className='Citas'>
            {console.log(props)}
            <div className="Citas__wrapp">
                <img src={logo} 
                    alt="logo cita" 
                    className="Citas__wrapp-img"
                    width='75px'
                    height='50px'
                />
            </div>
            <div className="Citas__data">
                <p className="Citas__data-item"><p className='Citas__data-p'>Fecha:</p> {props.fecha}</p>
                <p className="Citas__data-item"><p className='Citas__data-p'>Hora:</p> {props.hora} </p>
                <p className="Citas__data-item"><p className='Citas__data-p'>Descripcion:</p> {props.descripcion}</p>
                <p className="Citas__data-item"><p className='Citas__data-p'>Lugar</p> {props.lugar}</p>
            </div>
        </div>
    )
}

export default Cita
