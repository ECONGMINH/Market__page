import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import './rps.scss';
import icon1  from '../assets/img/footer/iconSocial1.png'
import icon2  from '../assets/img/footer/iconSocial2.png'
import icon3  from '../assets/img/footer/iconSocial3.png'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer>
            <div className="grid">
                <div className="footer__layout">

                    <div className="footer__menu">
                        <ul className="footer__menu-list">
                            <li className="footer__menu-list__item">
                                <p className="footer__menu-list__item-text">
                                    what happened
                                </p>
                                <ul className="footer__menu-list__item-child">
                                    <li><a href=""></a>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                                    <li><a href=""></a>[공지] 29CM 강남 스토어 영업 종료</li>
                                    <li><a href=""></a>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                                    <li><a href=""></a>[공지] iOS 10 이하 버전 지원 중단 안내</li>
                                    <li><a href=""></a>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                                </ul>
                            </li>

                            <li className="footer__menu-list__item">
                                <p className="footer__menu-list__item-text">
                                    about us
                                </p>
                                <ul className="footer__menu-list__item-child">
                                    <li><a href=""></a>회사 소개</li>
                                    <li><a href=""></a>인재 채용</li>
                                    <li><a href=""></a>상시 할인 혜택</li>
                                </ul>
                            </li>


                            <li className="footer__menu-list__item">
                                <p className="footer__menu-list__item-text">
                                    my order
                                </p>
                                <ul className="footer__menu-list__item-child">
                                    <li><a href=""></a>내 주문</li>
                                    <li><a href=""></a>주문 배송</li>
                                    <li><a href=""></a>취소 / 교환 / 반품 내역</li>
                                    <li><a href=""></a>상품 리뷰 내역</li>
                                    <li><a href=""></a>증빙 서류 발급</li>
                                </ul>
                            </li>


                            <li className="footer__menu-list__item">
                                <p className="footer__menu-list__item-text">
                                    my account
                                </p>
                                <ul className="footer__menu-list__item-child">
                                    <li><a href=""></a>회원 정보 수정</li>
                                    <li><a href=""></a>회원 등급</li>
                                    <li><a href=""></a>마일리지 현황</li>
                                    <li><a href=""></a>쿠폰</li>
                                </ul>
                            </li>

                            <li className="footer__menu-list__item">
                                <p className="footer__menu-list__item-text">
                                    help
                                </p>
                                <ul className="footer__menu-list__item-child">
                                    <li><a href=""></a>1 : 1 상담 내역</li>
                                    <li><a href=""></a>상품 Q & A 내역</li>
                                    <li><a href=""></a>공지 사항</li>
                                    <li><a href=""></a>자주하는 질문</li>
                                    <li><a href=""></a>고객의 소리</li>
                                </ul>
                            </li>

                           

                          

                        </ul>
                    </div>

                    <div className="footer__info__about-market">

                        <div className="footer__info__about-market-text">
                            <span className="footer__info__about-market-text-le">
                                    © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                            </span>

                            <span className="footer__info__about-market-text-ct">
                                서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                            </span>
                        </div>

                        <div className="footer__info__about-market-iconSocial">
                            <a href="" className="footer__info__about-market-iconSocial-item">
                                <img src={icon3} alt="" className="footer__info__about-market-iconSocial-item-img" />
                            </a>

                            <a href="" className="footer__info__about-market-iconSocial-item">
                                <img src={icon2} alt="" className="footer__info__about-market-iconSocial-item-img" />
                            </a>

                            <a href="" className="footer__info__about-market-iconSocial-item">
                                <img src={icon1} alt="" className="footer__info__about-market-iconSocial-item-img" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;