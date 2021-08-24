import React from 'react';
import { Link } from 'react-scroll';
import '../../global.css';
import './styles.css';
import logo from '../../Assets/logo.png';
import shape2gray from '../../Assets/Shape2gray.svg';

export default function Menu(){
    function toggleMenu(){
        const nav = document.getElementById('menu-container');
        nav.classList.toggle('active');
    }
    return(
        <div id="menu-container">
            <div className="logo-container">
                <img alt="" id="logo" src={logo}/>
            </div>
            <div id="sidebar">
                <nav className="menu-navigationbar">
                    <Link onClick={toggleMenu} className="link"><div className='menu-buttons'><h1 className="backgroundnumber background-button">01.</h1><h3 className='pagetitle menu-pagetitle'>/QUEM SOMOS</h3></div></Link>
                    <Link onClick={toggleMenu} className="link" to="what-we-do" smooth={true} duration={1500}><div className='menu-buttons'><h1 className="backgroundnumber background-button">02.</h1><h3 className='pagetitle menu-pagetitle'>/O QUE FAZEMOS </h3></div></Link>
                    <Link onClick={toggleMenu} className="link" to="news" smooth={true} duration={1500}><div className='menu-buttons'><h1 className="backgroundnumber background-button">03.</h1><h3 className='pagetitle menu-pagetitle'>/PLAN NEWS</h3></div></Link>
                    <Link onClick={toggleMenu} className="link"><div className='menu-buttons'><h1 className="backgroundnumber background-button">04.</h1><h3 className='pagetitle menu-pagetitle'>/NOSSOS CLIENTES</h3></div></Link>
                    <Link onClick={toggleMenu} className="link" to="contact" smooth={true} duration={1500}><div className='menu-buttons'><h1 className="backgroundnumber background-button">05.</h1><h3 className='pagetitle menu-pagetitle'>/CONTATO</h3></div></Link>
                </nav>
                <div className="menu-bottombutton">
                    <h1 className="backgroundnumber background-button" id="background-bottombutton">;)</h1>
                    <h3 className='pagetitle' id="text-bottombutton">Que tal inovar com a gente? <img alt="" id="arrowbot-mobile" src={shape2gray} /></h3>
                    <img alt="" id="arrowbot" src={shape2gray} />
                </div>
            </div>
            <div>
                <button id='menu-active' onClick={toggleMenu}><div id="hamburger"></div></button>   
            </div>
        </div>
    )
}