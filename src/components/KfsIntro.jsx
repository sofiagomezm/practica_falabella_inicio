import React from "react"
import './kfsintro.css'
import Data from './Data'
import logo_falabella from '../assets/logo_falabella.png';
import logo_switch from '../assets/logo_switch.png'

const KfsIntro = () => {
    return (

        <section className="home_section" id="home">
            <div className="barra_nav">
                <div className="logo_falabella">
                <img className="img_falabella" src={logo_falabella} alt="" />
                </div>
            </div>
            <div className="home_container container grid">
                
                <div className="home_content grid">
                    <div className="logo_switch">
                        <img className="img_switch" src={logo_switch} alt="" />
                    </div>
                    
                    <Data />
                    
                </div>
            </div>

        </section>

    )
}

export default KfsIntro