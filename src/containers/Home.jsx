import React from 'react'
//styles
import './styles/Home.css'
//components
import Nav from '../components/Nav'
import CartasContainer from '../components/CartasContainer'
//assets
import image from '../assets/logos/Logo.jpg'

const Home = () => {
    return (
        <div className='home'>
            {/* render del nav*/ }
            <Nav/>
            <h3>Tu diseñaras esta imagen para que sea bonita jaja </h3>
            {/*render de imagen en el home */ }
            <img className='home__img' src={image} alt="logo page"
             width="100px"
             height="75px"/>
             {/*reder de componente cartas*/ }
             <CartasContainer/>
        </div>
    )
}

export default Home
