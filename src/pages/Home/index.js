import React from 'react';
import '../../global.css';
import './styles.css';


import Menu from '../../Components/sidebar/index.js'
import News from '../../Components/container-news/index.js'
import WhatWeDo from '../../Components/container-whatwedo/index.js'
import Contact from '../../Components/container-contact/index.js'

export default function Home(){
    return(
        <>
        <Menu />
        <div className="page-container">
            <WhatWeDo />
            <News />
            <Contact />
        </div>
        </>
    )
}