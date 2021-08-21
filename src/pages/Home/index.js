import React from 'react';
import '../../global.css';
import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import layer20 from '../../Assets/layer20.png';
import layer21 from '../../Assets/layer21.png';
import layer22 from '../../Assets/layer22.png';
import shape4 from '../../Assets/shape4.svg';
import shape2 from '../../Assets/Shape2.svg';
import shape2gray from '../../Assets/Shape2gray.svg';
import vrglasses from '../../Assets/vrglasses.svg';
import planxp from '../../Assets/VectorSmartObject.png';
import groupplan from '../../Assets/VectorSmartObject1.png';
import fullup from '../../Assets/VectorSmartObject2.png';
import face from '../../Assets/Shape15.svg';
import insta from '../../Assets/Shape16.svg';
import youtube from '../../Assets/Shape17.svg';
import layer10 from '../../Assets/Layer10.png';
import layer11 from '../../Assets/Layer11.png';
import layer12 from '../../Assets/Layer12.png';
import layer13 from '../../Assets/Layer13.png';
import layer19 from '../../Assets/Layer19.png';

export default function Home(){
    return(
        <>
        <div className="menu-container">
            <div className="logo-container">
                <img id="logo" src={logo}/>
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
                <img id="arrowbot" src={shape2gray} />
            </div>
        </div>
        <div className="page-container">
            <div className="pages" id="what-we-do">
                <div className="text-whatwedo">
                    <h1 className="background-button" id="page-backgroundnumber">02.</h1>
                    <h3 className='menu-textbuttons' id="pagetitle">/Oque fazemos</h3>
                    <h1 className='title-text'>/Games</h1>
                    <h1 className='title-text' id='subtitle'>Desenvolvimento de games digitais.</h1>
                    <h3 className='title-text' id='subtitletwo'>Empresa especialista em desenvolvimento games digitais e gamificação.</h3>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam ultricies sollicitudin. Cras vehicula congue odio, quis lobortis leo gravida non. In ornare erat tortor, mattis sodales leo efficitur at. In hac habitasse platea dictumst. Quisque ante tortor, egestas a lorem a, tempor lacinia nisi.</p>
                </div>
                <div className="grid-whatwedo">
                    <div className="cards-whatwedo" id="cardone">
                        <img src={layer20} className="grid-img"/ >
                        <p className='text'>A <b>PlanXP</b> tem uma equipe qualificada para o <b>desenvolvimento de jogos digitais</b> para <b>dispositivos móveis</b> (smartphones, tablets e afins). </p>
                    </div>
                    <div className="cards-whatwedo" id="cardtwo">
                        <img src={layer22} className="grid-img"/ >
                        <p className='text'>Desenvolvemos games para anunciar seus produtos e serviços, através da <b>gamificação</b> (aplicações que utilizam dinâmicas de jogos para engajamento de usuários, resolução de problemas e melhoria no aprendizado).</p>
                    </div>
                    <div className="cards-whatwedo" id="cardtree">
                        <img src={layer21} className="grid-img"/ >
                        <p className='text'>Utilizando as últimas tecnologias para a <b>criação de games</b>, trabalhamos de acordo com as necessidades dos clientes, sempre buscando oferecer o resultado que ele busca.</p>
                    </div>
                    <div className="cards-whatwedo" id="cardfour">
                        <div id="container-joysticksvg">
                           <img src={shape4} id="joysticksvg"/ >
                        </div>
                        <p id="text-joystick"><p>Experimente inovar com a </p><b className="boldtextcardfour">PlanXP</b> para <b className="boldtextcardfour">desenvolver os seus jogos digitais!</b></p>
                        <Link className="link"><p className="link-text">ENTRE EM CONTATO AGORA MESMO <img src={shape2} /></p></Link>
                    </div>
                </div>
            </div>
            <div className="pages" id="news">
                <h1 className="background-button" id="page-backgroundnumber">03.</h1>
                <h3 className='menu-textbuttons' id="pagetitlenews">/Plan news</h3>
                <h1 className='title-text'>/Cases Games</h1>
                <div id='grid-news'>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img className='image-cardsnews' src={layer11} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="impname">SKA</h4>
                            <h3 className='textcardnews'>Plan cria o novo site da SKA</h3>
                            <p className='text'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img className='image-cardsnews' src={layer12} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="impname">TINTAS KILLING</h4>
                            <h3 className='textcardnews'>Plan cria o novo site da Tintas Killing</h3>
                            <p className='text textcard'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img className='image-cardsnews' src={layer19} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="impname">CARGO BR</h4>
                            <h3 className='textcardnews'>Estamos desenvolvendo o novo site da CargoBR</h3>
                            <p className='text textcard'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam ferment...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img className='image-cardsnews' src={layer10} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="impname">XALINGO</h4>
                            <h3 className='textcardnews'>Clubinho Xalingo com novidades</h3>
                            <p className='text textcard'>Curabitur vitae tellus volutpat, imperdiet est nec, efficitur mi. Cras pellentesque ultricies diam at dictum. Cras pellentesque...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img className='image-cardsnews' src={layer13} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="impname">AROMATIC</h4>
                            <h3 className='textcardnews'>Novo site da Aromatic no ar</h3>
                            <p className='text textcard'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, at consectetur consectetur  lorem viverra...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img src={shape2} /></p></Link>
                    </div>
                </div>
            </div>
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
                        <img src={face} />
                        <img src={insta} />
                        <img src={youtube} />
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
                        <img src={groupplan} />
                        <p className="text">A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo.</p>
                    </div>
                    <div className="cards-contact" id='cardfive'>
                    <img src={planxp} />
                        <p className="text">A Plan XP é especializada em realidade virtual, realidade aumentada e jogos.</p>
                    </div>
                    <div className="cards-contact" id='cardsix'>
                    <img src={fullup} />
                    <p className="text">A FullUp é uma agência especializada em branding, design e campanhas.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}