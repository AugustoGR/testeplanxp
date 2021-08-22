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
    return(
        <div className="pages" id="news">
                <h1 className="background-button" id="page-backgroundnumber">03.</h1>
                <h3 className='menu-textbuttons' id="pagetitlenews">/Plan news</h3>
                <h1 className='title-text'>/Cases Games</h1>
                <div id='grid-news'>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="SKA" className='image-cardsnews' src={layer11} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">SKA</h4>
                            <h3 className='textcardnews'>Plan cria o novo site da SKA</h3>
                            <p className='text'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="Tintas Killing" className='image-cardsnews' src={layer12} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">TINTAS KILLING</h4>
                            <h3 className='textcardnews'>Plan cria o novo site da Tintas Killing</h3>
                            <p className='text textcard'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img alt=""className="vrglasses" src={vrglasses} />
                            <div  className="imagecut"></div>
                            <img alt="cargobr" className='image-cardsnews' src={layer19} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">CARGO BR</h4>
                            <h3 className='textcardnews'>Estamos desenvolvendo o novo site da CargoBR</h3>
                            <p className='text textcard'>Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam ferment...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="xalingo" className='image-cardsnews' src={layer10} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">XALINGO</h4>
                            <h3 className='textcardnews'>Clubinho Xalingo com novidades</h3>
                            <p className='text textcard'>Curabitur vitae tellus volutpat, imperdiet est nec, efficitur mi. Cras pellentesque ultricies diam at dictum. Cras pellentesque...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                    <div className="cards-news">
                        <div className='imgcardsnews'>
                            <img alt="" className="vrglasses" src={vrglasses} />
                            <div className="imagecut"></div>
                            <img alt="aromatic" className='image-cardsnews' src={layer13} />
                        </div>
                        <div className="text-cardnews">
                            <h4 className="empname">AROMATIC</h4>
                            <h3 className='textcardnews'>Novo site da Aromatic no ar</h3>
                            <p className='text textcard'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibed um urna leo, at consectetur consectetur  lorem viverra...</p>
                        </div>
                        <Link className="link linkcardnews"><p className="link-text">SAIBA MAIS <img alt="" src={shape2} /></p></Link>
                    </div>
                </div>
            </div>
    )
}