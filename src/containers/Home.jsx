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
            {/*render de imagen en el home */ }
            <img className='home__img' src={image} alt="logo page"
             width="200px"
             height="150px"/>
             {/*reder de componente cartas*/ }
             <CartasContainer/>
        </div>
    )
}

export default Home
