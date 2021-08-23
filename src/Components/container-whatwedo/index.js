import React from 'react';
import '../../global.css';
import './styles.css';
import { Link } from 'react-router-dom';
import layer20 from '../../Assets/layer20.png';
import layer21 from '../../Assets/layer21.png';
import layer22 from '../../Assets/layer22.png';
import shape4 from '../../Assets/shape4.svg';
import shape2 from '../../Assets/Shape2.svg';

export default function WhatWeDo(){
    return(
    <div className="pages" id="what-we-do">
        <div className="text-whatwedo">
            <h1 className="backgroundnumber page-backgroundnumber">02.</h1>
            <h3 className='pagetitle page-pagetitle'>/Oque fazemos</h3>
            <h1 className='title-text'>/Games</h1>
            <h1 className='title-text' id='subtitle'>Desenvolvimento de games digitais.</h1>
            <h3 className='title-text' id='subtitletwo'>Empresa especialista em desenvolvimento games digitais e gamificação.</h3>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam ultricies sollicitudin. Cras vehicula congue odio, quis lobortis leo gravida non. In ornare erat tortor, mattis sodales leo efficitur at. In hac habitasse platea dictumst. Quisque ante tortor, egestas a lorem a, tempor lacinia nisi.</p>
        </div>
        <div className="grid-whatwedo">
            <div className="cards-whatwedo" id="cardone">
                <img alt="" src={layer20} className="grid-img"/ >
                <p className='text'>A <b>PlanXP</b> tem uma equipe qualificada para o <b>desenvolvimento de jogos digitais</b> para <b>dispositivos móveis</b> (smartphones, tablets e afins). </p>
            </div>
            <div className="cards-whatwedo" id="cardtwo">
                <img alt="" src={layer22} className="grid-img"/ >
                <p className='text'>Desenvolvemos games para anunciar seus produtos e serviços, através da <b>gamificação</b> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).</p>
            </div>
            <div className="cards-whatwedo" id="cardtree">
                <img alt="" src={layer21} className="grid-img"/ >
                <p className='text'>Utilizando as últimas tecnologias para a <b>criação de games</b>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</p>
            </div>
            <div className="cards-whatwedo" id="cardfour">
                <div id="container-joysticksvg">
                   <img alt="" src={shape4} id="joysticksvg"/ >
                </div>
                <p id="text-joystick"><p>Experimente inovar com a </p><b className="boldtextcardfour">PlanXP</b> para <b className="boldtextcardfour">desenvolver os seus jogos digitais!</b></p>
                <Link className="link"><p className="link-text">ENTRE EM CONTATO AGORA MESMO <img alt="" src={shape2} /></p></Link>
            </div>
        </div>
    </div>
    )
}