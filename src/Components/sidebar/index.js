import React from 'react';
import '../../global.css';
import './styles.css';
import logo from '../../Assets/logo.png';
import shape2gray from '../../Assets/Shape2gray.svg';

export default function Menu(){
    return(
        <div className="menu-container">
            <div className="logo-container">
                <img alt="" id="logo" src={logo}/>
            </div>
            <div className="menu-navigationbar">
                <div className='menu-buttons'><h1 className="background-button">01.</h1><h3 className='menu-textbuttons'>/QUEM SOMOS</h3></div>
                <div className='menu-buttons'><h1 className="background-button">02.</h1><h3 className='menu-textbuttons'>/O QUE FAZEMOS </h3></div>
                <div className='menu-buttons'><h1 className="background-button">03.</h1><h3 className='menu-textbuttons'>/PLAN NEWS</h3></div>
                <div className='menu-buttons'><h1 className="background-button">04.</h1><h3 className='menu-textbuttons'>/NOSSOS CLIENTES</h3></div>
                <div className='menu-buttons'><h1 className="background-button">05.</h1><h3 className='menu-textbuttons'>/CONTATO</h3></div>
            </div>
            <div className="menu-bottombutton">
                <h1 className="background-button" id="background-bottombutton">;)</h1>
                <h3 className='menu-textbuttons' id="text-bottombutton">Que tal inovar com a gente?</h3>
                <img alt="" id="arrowbot" src={shape2gray} />
            </div>
        </div>
    )
}