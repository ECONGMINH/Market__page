import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import './rps.scss';
import banner from  '../assets/img/body/banner.png';
import bestProdcut1 from '../assets/img/body/bestProduct/item-1.png'
import bestProdcut2 from '../assets/img/body/bestProduct/item-2.png'
import bestProdcut3 from '../assets/img/body/bestProduct/item-3.png'

import icon1 from '../assets/img/body/bestProduct/icon-1.png'
import icon2 from '../assets/img/body/bestProduct/icon-2.png'
import icon3 from '../assets/img/body/bestProduct/icon-3.png'
import tab from '../assets/img/body/bestProduct/tab.png';

import heartIcon from '../assets/img/body/product/heartIcon.png';
import ImgProduct1 from '../assets/img/body/product/img_01.png';
import ImgProduct2 from '../assets/img/body/product/img_02.png';
import ImgProduct3 from '../assets/img/body/product/img_03.png';
import ImgProduct4 from '../assets/img/body/product/img_04.png';
import ImgProduct5 from '../assets/img/body/product/img_05.png';
import ImgProduct6 from '../assets/img/body/product/img_06.png';
import ImgProduct7 from '../assets/img/body/product/img_07.png';
import ImgProduct8 from '../assets/img/body/product/img_08.png';
import ImgProduct9 from '../assets/img/body/product/img_09.png';
import ImgProduct10 from '../assets/img/body/product/img_10.png';
import ImgProduct11 from '../assets/img/body/product/img_11.png';
import ImgProduct12 from '../assets/img/body/product/img_12.png';
import ImgProduct13 from '../assets/img/body/product/img_13.png';
import ImgProduct14 from '../assets/img/body/product/img_14.png';
import ImgProduct15 from '../assets/img/body/product/img_15.png';
import ImgProduct16 from '../assets/img/body/product/img_16.png';
import ImgProduct17 from '../assets/img/body/product/img_17.png';
import ImgProduct18 from '../assets/img/body/product/img_18.png';
import ImgProduct19 from '../assets/img/body/product/img_19.png';
import ImgProduct20 from '../assets/img/body/product/img_20.png';
import ImgProduct21 from '../assets/img/body/product/img_21.png';
import ImgProduct22 from '../assets/img/body/product/img_22.png';
import ImgProduct23 from '../assets/img/body/product/img_23.png';
import ImgProduct24 from '../assets/img/body/product/img_24.png';
import ImgProduct25 from '../assets/img/body/product/img_25.png';

import brandStory from '../assets/img/body/bandStory/imgack.png';
import brandStoryTb from '../assets/img/body/bandStory/e-window.png';
import imgHappened1 from '../assets/img/body/happened/item-1.png';
import imgHappened2 from '../assets/img/body/happened/item-2.png';
import imgHappened3 from '../assets/img/body/happened/item-3.png';
import imgHappened4 from '../assets/img/body/happened/item-4.png';
import imgHappened5 from '../assets/img/body/happened/item-5.png';
import imgIconHappened1 from '../assets/img/body/happened/iconItem1.png';
import imgIconHappenedHot from '../assets/img/body/happened/iconItem2.png';
import imgIconHappened3 from '../assets/img/body/happened/iconItem3.png';


import imgContrusct from '../assets/img/footer/contruct.png';
import imgclp from '../assets//img/footer/-e-Video.png';
Body.propTypes = {
    
};

function Body(props) {
    return (
       <div className="content">
           <div className="grid">
               <div className="content__layout">
                    <a className="content__layout__banner" href="">
                           <img src={banner} alt="" />
                       </a>
          
                   <div className="content__layout__about-market">
                        <div className="content__layout__about-market-text">
                            <h3 className="content__layout__about-market-text-heading">WHAT HAPPENED</h3>

                            <p className="content__layout__about-market-text-desc">
                            How to create mobile-optimized videos in minutes. Not a designer, 
                            every team makes a lot of videos Can be trimmed. Take the first 
                            step to your brand's success. How to create 
                            mobile-optimized videos in minutes.
                            </p>
                        </div>
                   </div>

                   <div className="content__layout__bestProduct">
                       <div className="content__layout__bestProduct-box">
                           <div className="content__layout__bestProduct-text">
                                <h3>BEST PRODUCT</h3>

                                <p>
                                    How to create mobile-optimized videos in minutes. Not a designer, 
                                    every team makes a lot of videos Can be trimmed. Take the first 
                                </p>
                           </div>

                           <div className="content__layout__bestProduct-item">
                                <div className="content__layout__bestProduct-item-img"> 
                                        <a href="">
                                            <img className="product-image" src={bestProdcut1} alt="" />
                                        </a>

                                        <img className='item-icon' src={icon1} alt="" />
                                        
                                        <a href="" className='tab-img' >
                                            <img src={tab} alt="" />
                                        </a>
                                </div>

                                <div className="content__layout__bestProduct-item-img"> 
                                      
                                        <a href="">
                                            <img className="product-image" src={bestProdcut2} alt="" /> 
                                        </a>

                                        <img className='item-icon' src={icon2} alt="" />
                                        
                                        <a href="" className='tab-img' >
                                            <img src={tab} alt="" />
                                        </a>

                                </div>

                                <div className="content__layout__bestProduct-item-img"> 
                                      
                                        <a href="" >
                                            <img className="product-image" src={bestProdcut3} alt="" />
                                        
                                        </a>

                                        <img className='item-icon' src={icon3} alt="" />

                                        <a href="" className='tab-img' >
                                            <img src={tab} alt="" />
                                        </a>
                                </div>

                           </div>

                       </div>
                   </div>

                    <div className="content__layout__product">
                        <div className="content__layout__product__container">
                            <div className="content__layout__product-list">

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct1} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct2} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct3} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct4} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct5} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct6} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct7} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct8} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct9} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct10} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct11} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct12} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                  <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct13} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct14} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct15} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct16} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct17} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct18} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct19} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct20} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct21} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct22} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct23} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct24} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>

                                <a href="" className="content__layout__product-list-item__info">
                                        <img src={ImgProduct25} alt="" />
                                        <p className="content__layout__product-list-item__info-name">
                                                [what happen] How to create 
                                        </p>
                                        <div className="content__layout__product-list-item__info-price-likes">
                                            <span>2,500 won</span>
                                            <div className="quantity-heart">
                                                <img src={heartIcon} alt="" />
                                                <span>236</span>
                                            </div>
                                        </div>
                                </a>
                            </div>
                            <div className="content__layout__product-seeMore">
                                <button className="content__layout__product-seeMore-btn">
                                    <span>SEE MORE</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="content__layout__brandStory">
                       

                        
                        <div className="content__layout__brandStory-heading">
                            <h3>BRAND STORY</h3>

                            <p>
                            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                            </p>
                        </div>

                        <img className="content__layout__brandStory-table" src={brandStoryTb} />

                        <div className="content__layout__brandStory-table-text">
                                <h4>WHAT HAPPENED’s BRAND STORY</h4>
                                <p>
                                    청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 
                                    봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                    긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                    인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                    아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. 
                                </p>
                                
                                <div className="content__layout__brandStory-table-text-seeMore">
                                    <button className="content__layout__brandStory-table-text-seeMore-btn"><span>SEE MORE</span></button>
                                </div>

                            </div>
                    
                        <img className="content__layout__brandStory-bri" src={brandStory} alt="" />
                
                    </div>
            
                    <div className="content__layout__happened">


                        <div className="content__layout__happened-heading">
                            <h3>Happened’s issue</h3>
                            <p>
                                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                            </p>
                        </div>

                        <div className="content__layout__happened__seeMore">
                            <button className="content__layout__happened__seeMore-btn"><span>SEE MORE</span></button>
                        </div>
                        

                        <div className="content__layout__happened-list-items">
                            <a href="" className="content__layout__happened-item">
                                <img className="content__layout__happened-item-img" src={imgHappened1} alt="" />
                                <img className="icon1" src={imgIconHappened1} alt="" />
                            </a>

                            <a href="" className="content__layout__happened-item">
                                <img className="content__layout__happened-item-img" src={imgHappened2} alt="" />
                                <img className="icon-hot" src={imgIconHappenedHot} alt="" />

                            </a>

                            <a href="" className="content__layout__happened-item">
                                <img className="content__layout__happened-item-img" src={imgHappened3} alt="" />
                            </a>

                            <a href="" className="content__layout__happened-item">
                                <img className="content__layout__happened-item-img" src={imgHappened4} alt="" />
                                

                            </a>

                            <a href="" className="content__layout__happened-item">
                                <img className="content__layout__happened-item-img" src={imgHappened5} alt="" />
                                <img className="icon3" src={imgIconHappened3} alt="" />
                            </a>

                        </div>
                        
                        <div className="content__layout__happened-dice">
                            <div className="content__layout__happened-dice-1"></div>

                            <div className="content__layout__happened-dice-2"></div>

                        </div>



                    </div>
                    
                    <div className="content__layout__happenedVideo">
                        <div className="content__layout__happenedVideo-heading">
                            <h3>what happened</h3>
                            <p>
                                How to create mobile-optimized videos in minutes. Not a designer, 
                                every team makes a lot of videos Can be trimmed. Take the first 
                            </p>
                        </div>
                        <div className="content__layout__happenedVideo__seeMore">
                            <button className="content__layout__happenedVideo__seeMore-btn"><span>SEE MORE</span></button>
                        </div>
                        <img src={imgclp} className="content__layout__happenedVideo-img"/>
                         <img src={imgContrusct} className='imgContruct' alt="" />
                    </div>
               
               </div>

           </div>
       </div>
    );
}

export default Body;