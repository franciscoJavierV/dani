import React from 'react'

//styles
import './styles/Calendar.css'
//components
import Nav from '../components/Nav'
import Cita from '../components/Cita' 
function Calendar() {
    return (
        <div className="Calendar">
        <Nav/>
        <div className='Calendar__content'>   
            <h1 className='Calendar__content-tittle'>Calendario de citas</h1>
            <Cita fecha='Primer fin despues de cuarentena' 
                hora='3 pm' 
                descripcion='Cita por tu cumpleaños incluye salida al parque y helado. Intentare que sea de pistacho' 
                lugar='El restaurante que yo elija y el parque tambien'/>
            <Cita fecha='Segundo fin despues de cuarentena'
                descripcion='Un dia planeado por ti amor'
                lugar ='Restaurante y parque que tu elijas'
                hora='Tu decides'/>
             <Cita fecha='Apenas la cuarentena deje'
                descripcion='Malteadas, pelis y toda la comida que encontremos'
                lugar ='Mi casa, boulevar niza'
                hora='Lo mas temprano posible, madrugados.'/>    
        </div>
        </div>
    )
}

export default Calendar
