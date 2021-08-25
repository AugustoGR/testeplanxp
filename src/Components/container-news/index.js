import React from 'react';
import '../../global.css';
import './styles.css';
import vrglasses from '../../Assets/vrglasses.svg';
import layer10 from '../../Assets/Layer10.png';
import layer11 from '../../Assets/Layer11.png';
import layer12 from '../../Assets/Layer12.png';
import layer13 from '../../Assets/Layer13.png';
import layer19 from '../../Assets/Layer19.png';
import { Link } from 'react-router-dom';
import shape2 from '../../Assets/Shape2.svg';


export default function News(){
    function indicecarrossel(){
        const card0 = document.getElementById('0');
        const card1 = document.getElementById('1');
        const card2 = document.getElementById('2');
        const card3 = document.getElementById('3');
        const card4 = document.getElementById('4');
        const ball0 = document.getElementById('ball1');
        const ball1 = document.getElementById('ball2');
        const ball2 = document.getElementById('ball3');
        const ball3 = document.getElementById('ball4');
        const ball4 = document.getElementById('ball5');
        if(card0.getBoundingClientRect().left<30&&card0.getBoundingClientRect().left>-30){
            ball0.classList.add('ballwhite');
        }
        else{
            ball0.classList.remove('ballwhite');
        }
        if(card1.getBoundingClientRect().left<30&&card1.getBoundingClientRect().left>-30){
            ball1.classList.add('ballwhite');
        }
        else{
            ball1.classList.remove('ballwhite');
        }
        if(card2.getBoundingClientRect().left<30&&card2.getBoundingClientRect().left>-30){
            ball2.classList.add('ballwhite');
        }
        else{
            ball2.classList.remove('ballwhite');
        }
        if(card3.getBoundingClientRect().left<30&&card3.getBoundingClientRect().left>-30){
            ball3.classList.add('ballwhite');
        }
        else{
            ball3.classList.remove('ballwhite');
        }
        if(card4.getBoundingClientRect().left<30&&card4.getBoundingClientRect().left>-30){
            ball4.classList.add('ballwhite');
        }
        else{
            ball4.classList.remove('ballwhite');
        }
    }
    return(
        <section className="pages" id="news">
                <div id="container-headernews">
                    <h1 className="backgroundnumber page-backgroundnumber">03.</h1>
                    <h3 className='pagetitle page-pagetitle'>/Plan news</h3>
                    <h1 className='title-text'>/Cases Games</h1>
                    <Link className="link" id="linkheader"><p className="link-text">CLIQUE AQUI PARA VER TODO O BLOG <img alt="" src={shape2} /></p></Link>
                </div>
                <div id='grid-news' onScroll={indicecarrossel}>
                    <div className="cards-news" id='0'>
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="SKA" className='image-cardsnews' src={layer11} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">SKA</h4>
                            <h3 className='titlecardnews'>Plan cria o novo site da SKA</h3>
                            <p className='text'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news" id='1'>
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="Tintas Killing" className='image-cardsnews' src={layer12} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">TINTAS KILLING</h4>
                            <h3 className='titlecardnews'>Plan cria o novo site da Tintas Killing</h3>
                            <p className='text textcard'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news" id='2'>
                        <div className='imgcardsnews'>
                            <img alt=""className="vrglasses" src={vrglasses} />
                            <div  className="imagecut"></div>
                            <img alt="cargobr" className='image-cardsnews' src={layer19} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">CARGO BR</h4>
                            <h3 className='titlecardnews'>Estamos desenvolvendo o novo site da CargoBR</h3>
                            <p className='text textcard'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam ferment...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news" id='3'>
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="xalingo" className='image-cardsnews' src={layer10} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">XALINGO</h4>
                            <h3 className='titlecardnews'>Clubinho Xalingo com novidades</h3>
                            <p className='text textcard'>Curabitur vitae tellus volutpat, imperdiet est nec, efficitur mi. Cras pellentesque ultricies diam at dictum. Cras pellentesque...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news" id='4'>
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="aromatic" className='image-cardsnews' src={layer13} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">AROMATIC</h4>
                            <h3 className='titlecardnews'>Novo site da Aromatic no ar</h3>
                            <p className='text textcard'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, at consectetur consectetur  lorem viverra...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                </div>
                <div id="balls">
                        <div className="ball ballwhite" id="ball1"></div>
                        <div className="ball" id="ball2"></div>
                        <div className="ball" id="ball3"></div>
                        <div className="ball" id="ball4"></div>
                        <div className="ball" id="ball5"></div>
                    </div>
            </section>
    )
}