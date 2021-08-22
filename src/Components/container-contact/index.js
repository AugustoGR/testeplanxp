import React from 'react';
import '../../global.css';
import './styles.css';
import { Link } from 'react-router-dom';
import shape2 from '../../Assets/Shape2.svg';
import planxp from '../../Assets/VectorSmartObject.png';
import groupplan from '../../Assets/VectorSmartObject1.png';
import fullup from '../../Assets/VectorSmartObject2.png';
import face from '../../Assets/Shape15.svg';
import insta from '../../Assets/Shape16.svg';
import youtube from '../../Assets/Shape17.svg';

export default function contact(){
    return(
        <div className="pages" id="contact">
                <div id="container-formcontact">
                    <div id="container-number">
                    <h1 className="background-button" id="page-backgroundnumber">05.</h1>
                    <h1 className='title-text'>/Contato</h1>
                    </div>
                    <p className="text">Gostou de saber mais sobre as inovações tecnológicas e também quer oferecer novas experiências aos seus clientes? Então entre em contato e marque um encontro real conosco para conversamos sobre as infinitas possibilidades do mundo virtual.</p>
                    <form id='form'>
                        <label id="label-inputname">Nome:<br /><div className="container-input"><div className="corner"></div><input></input></div></label>
                        <label id="label-inputemail">E-mail:<br /><div className="container-input"><div className="corner"></div><input></input></div></label>
                        <label id="label-inputtel">Telefone:<br /><div className="container-input"><div className="corner"></div><input></input></div></label>
                        <label>Mensagem:<br /><div className="container-input"><div className="corner"></div><input id="input-mes"></input></div></label>
                    </form>
                </div>
                <div className="grid-contact">
                    <div className="cards-contact" id='cardone'>
                        <h3 className='title-card'>Siga-nos</h3>
                        <p className="text">Fique sempre por dentro de todas as novidades da Plan XP e de todas empresas do Grupo Plan Marketing.</p>
                        <img alt="face" src={face} />
                        <img alt="insta" src={insta} />
                        <img alt="youtube" src={youtube} />
                    </div>
                    <div className="cards-contact" id='cardtwo'>
                        <h3 className='title-card'>/RS</h3>
                        <p className="text">Rua Onze de Junho, 243</p>
                        <p className="text">Novo Hamburgo / RS</p>
                        <p className="text">Brasil</p>
                        <p className="text">+55 51 98229.0400</p>
                    </div>
                    <div className="cards-contact" id='cardtree'>
                        <h3 className='title-card'>/SP</h3>
                        <p className="text">Rua Ibijaú, 355/Sala 1309</p>
                        <p className="text">São Paulo / SP</p>
                        <p className="text">Brasil</p>
                        <p className="text">+55 11 98871.8556</p>
                    </div>
                    <div className="cards-contact" id='cardfour'>
                        <img alt="grupoplan" src={groupplan} />
                        <p className="text">A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo.</p>
                    </div>
                    <div className="cards-contact" id='cardfive'>
                    <img alt="planxp" src={planxp} />
                        <p className="text">A Plan XP é especializada em realidade virtual, realidade aumentada e jogos.</p>
                    </div>
                    <div className="cards-contact" id='cardsix'>
                    <img alt="fullup" src={fullup} />
                    <p className="text">A FullUp é uma agência especializada em branding, design e campanhas.</p>
                    </div>
                </div>
            </div>
    )
}