import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { BsApple, BsInstagram } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import mark1 from "../../images/mark_isms-1751469ae3fb2e9b51fe7fbe6210449d.png";
import mark2 from "../../images/mark_iso27001-f73b550bba54864a1ddc382ed3223667.png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="row1">
        <ul className="footer">
          <li className="footerTop1">
            <ul className="footerTop2">
              <li className="footerTopL">
                <ul>
                  <li className="csLink">
                    <Link to="#">
                      <span>고객센터</span>
                      <MdArrowForwardIos />
                    </Link>
                  </li>
                  <li className="csTel">
                    <Link to="#">1234-5678</Link>
                  </li>
                  <li className="csTime">
                    평일 09:00 ~ 18:00 &#40;주말 &#38; 공휴일 제외&#41;
                  </li>
                </ul>
              </li>
              <li className="footerTopR">
                <ul>
                  <li>
                    <Link to="#">
                      <BsApple title="앱스토어" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <IoLogoGooglePlaystore title="플레이스토어" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaFacebookF title="페이스북" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <BsInstagram title="인스타그램" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <SiNaver title="네이버블로그" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="footerMiddle1">
            <ul>
              <li>
                <Link to="#">브랜드 스토리</Link>
              </li>
              <li>
                <Link to="#">회사소개</Link>
              </li>
              <li>
                <Link to="#">채용정보</Link>
              </li>
              <li>
                <Link to="#">이용약관</Link>
              </li>
              <li>
                <Link to="#">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="#">공지사항</Link>
              </li>
              <li>
                <Link to="#">고객센터</Link>
              </li>
              <li>
                <Link to="#">고객의 소리</Link>
              </li>
              <li>
                <Link to="#">전문가 등록</Link>
              </li>
              <li>
                <Link to="#">사업자 구매회원</Link>
              </li>
              <li>
                <Link to="#">제휴/광고 문의</Link>
              </li>
              <li>
                <Link to="#">입점신청 문의</Link>
              </li>
            </ul>
          </li>
          <li className="footerMiddle2">
            <ul className="companyInfo">
              <li className="companyInfo1">
                <ul>
                  <li>
                    <Link to="#">상호명 &#58; &#40;주&#41;바구니플레이스</Link>
                  </li>
                  <li>
                    이메일 &#58; &#40;고객문의&#41;
                    <Link to="#">cs@baguniplace.net</Link>
                    &#40;제휴문의&#41;
                    <Link to="#">contact@baguniplace.net</Link>
                  </li>
                  <li>대표이사 &#58; 이승기</li>
                  <li>사업자등록번호 &#58; 0123-34-56789</li>
                  <li>
                    통신판매업신고번호 &#58; 제1234-서울서초-5678호
                    <Link to="#">사업자정보확인</Link>
                  </li>
                </ul>
              </li>
              <li className="companyInfo2">
                <ul>
                  <li>
                    주소 &#58; 서울 서초구 서초대로01길 2 삼성생명서초타워 34,
                    56층
                  </li>
                  <li>
                    우리은행 채무지급보증안내 &#58; &#40;주&#41;바구니플레이스는
                    고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증
                    계약을 체결하여 안전거래를 보장하고 있습니다.{" "}
                    <Link to="#">서비스가입사실</Link>
                    확인
                  </li>
                </ul>
              </li>
              <li className="notice">
                <p>
                  내일의집은 개별 판매자가 상품을 판매하는 오픈마켓이며
                  &#40;주&#41;바구니플레이스는 통신판매중개자로 거래 당사자가
                  아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 일체
                  책임을 지지 않습니다.
                </p>
                <p>
                  단 ㈜바구니플레이스가 판매자로 등록 판매한 상품의 경우는
                  판매자로서 책임을 부담합니다.
                </p>
              </li>
            </ul>
          </li>
          <li className="footerMiddle3">
            Copyright 2014. baguniplace, Co., Ltd. All rights reserved
          </li>
          <li className="footerBottom">
            <ul>
              <li>
                <img src={mark1} alt="mark1" />
              </li>
              <li>
                <p>내일의집 서비스 운영</p>
                <p>2021. 09. 08 ~ 2024. 09. 07</p>
              </li>
              <li>
                <img src={mark2} alt="mark2" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  @font-face {
    font-family: "EliceDigitalBaeum-Bd";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "EliceDigitalBaeum";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  background-color: #fafafa;
  font-family: "EliceDigitalBaeum";
  font-weight: bold;
  font-size: 10px;
  color: #424242;
  .row1 {
    width: 1160px;
    margin: 0 auto;
    padding: 30px 10px 40px;
    .footer {
      .footerTop1 {
        .footerTop2 {
          display: flex;
          justify-content: space-between;
          .footerTopL {
            font-weight: bold;
            font-size: 12px;
            .csTel {
              margin: 7px 0 0;
              font-size: 32px;
              font-family: "EliceDigitalBaeum-Bd";
            }
            .csTime {
              margin: 7px 0 0;
              color: #757575;
            }
          }
          .footerTopR {
            ul {
              display: flex;
              justify-content: space-between;
              font-size: 27px;
              a {
                padding: 0 7px;
              }
            }
          }
        }
      }
      .footerMiddle1 {
        ul {
          display: flex;
          li {
            margin: 30px 0 20px;
            a {
              padding: 0 10px 0 0;
            }
          }
        }
      }
      .footerMiddle2 {
        color: #757575;
        .companyInfo {
          .companyInfo1,
          .companyInfo2 {
            margin: 0 0 10px;
            ul {
              display: flex;
              li:first-child {
                a {
                  padding: 0;
                }
              }
              li {
                margin: 0 5px 0 0;
                a {
                  padding: 0 5px;
                }
              }
            }
          }
          .notice {
            p {
              padding: 0 0 5px;
            }
            margin: 0 0 15px;
          }
        }
      }
      .footerBottom {
        color: #828c94;
        padding: 30px 0 0;
        ul {
          display: flex;
          li {
            p {
              padding: 0 20px 5px 0;
            }
            img {
              width: 32px;
              margin: 0 10px 0 0;
            }
          }
        }
      }
    }
  }
`;

export default Footer;
