import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import product1 from "../../images/162813001662993357.gif";
import product2 from "../../images/1554432441250_K6wX5dopzz.jpg";
import product3 from "../../images/162303132447303472.jpg";
import { MdArrowForwardIos } from "react-icons/md";

const Products_rank = () => {
  return (
    <Wrapper>
      <section className="row1">
        <header>
          <h2>베스트</h2>
        </header>
        <section className="rank_scroll">
          <ul>
            <li>전체</li>
            <li>가구</li>
            <li>패브릭</li>
            <li>조명</li>
            <li>가전</li>
            <li>주방용품</li>
            <li>데코·식물</li>
            <li>수납·정리</li>
            <li>생활용품</li>
            <li>생필품</li>
            <li>공구·DIY</li>
            <li>인테리어시공</li>
            <li>반려동물</li>
            <li>캠핑용품</li>
            <li>실내운동</li>
            <li>유아·아동</li>
            <li>렌탈</li>
            <li>식품</li>
          </ul>
        </section>
        <section className="rank_items">
          <ul>
            <li>
              <Link to="#">
                <div className="rank_items_pic">
                  <img src={product1} alt="product1" />
                </div>
                <div className="rank_items_info">
                  <p>
                    LG트롬 워시타워 3color 세탁24kg건조17kg 화이트/실버/블랙
                  </p>
                  <div className="rank_items_price">
                    <span className="rank_items_dc">19&#37;</span>
                    <span>2,650,000</span>
                  </div>
                </div>
                <div className="rank_label">
                  <span>1</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="rank_items_pic">
                  <img src={product2} alt="product2" />
                </div>
                <div className="rank_items_info">
                  <p>Q4 유로탑 롤팩 매트리스 2size</p>
                  <div className="rank_items_price">
                    <span className="rank_items_dc">60&#37;</span>
                    <span>279,900</span>
                  </div>
                </div>
                <div className="rank_label">
                  <span>2</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="rank_items_pic">
                  <img src={product3} alt="product3" />
                </div>
                <div className="rank_items_info">
                  <p>
                    &#91;맞춤&#93; 비침없는 화이트 도톰
                    레이스/쉬폰커튼&#40;나비주름/핀형/봉집&#41;
                  </p>
                  <div className="rank_items_price">
                    <span className="rank_items_dc">55&#37;</span>
                    <span>19,900</span>
                  </div>
                </div>
                <div className="rank_label">
                  <span>3</span>
                </div>
              </Link>
            </li>
            <li className="rank_items">
              <Link to="#">
                <div className="rank_more">
                  <div className="rank_more2">
                    <p>베스트셀러 더보기</p>
                    <div className="arrow_icon">
                      <span>
                        <MdArrowForwardIos />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
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

  font-family: "EliceDigitalBaeum";
  .row1 {
    padding: 60px 10px 0px;
    width: 1160px;
    margin: 0 auto;
    header {
      font-family: "EliceDigitalBaeum-Bd";
      font-size: 20px;
      h2 {
        font-weight: bold;
      }
    }
    section.rank_scroll {
      ul {
        margin: 12px 0;
        display: flex;
        overflow-x: auto; //스크롤
        white-space: nowrap; //스크롤
        &::-webkit-scrollbar {
          height: 15px;
        }
        &::-webkit-scrollbar-track {
          background: rgb(241, 241, 241);
        }
        &::-webkit-scrollbar-thumb {
          height: 10px;
          background: rgb(198, 198, 198);
        }
        &::-webkit-scrollbar-thumb:hover {
          background: rgb(170, 170, 170);
        }
        li:hover {
          color: #35c5f0;
        }
        li {
          font-family: "EliceDigitalBaeum-Bd";
          padding: 10px 20px 15px;
          color: #757575;
          cursor: pointer;
          font-size: 15px;
        }
      }
    }
    section.rank_items {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          width: 270px;
          a:hover {
            img {
              transform: scale(1.05);
              transition: 0.3s;
            }
          }
          a {
            position: relative;
            font-size: 13px;
            .rank_items_pic {
              border-radius: 5px;
              overflow: hidden;
            }
            .rank_items_info {
              margin-top: 15px;
              .rank_items_price {
                margin-top: 15px;
                font-family: "EliceDigitalBaeum-Bd";
                font-size: 15px;
                .rank_items_dc {
                  color: #35c5f0;
                  padding-right: 5px;
                }
              }
            }
            .rank_label {
              border-radius: 0 0 20px 20px;
              position: absolute;
              top: 0;
              left: 10px;
              background-color: rgba(53, 197, 240, 0.6);
              color: #fff;
              width: 30px;
              height: 35px;
              line-height: 32px;
              text-align: center;
              font-weight: bold;
              font-size: 15px;
            }
            .rank_more:hover {
              background-color: #ededed;
            }
            .rank_more {
              border-radius: 5px;
              background-color: #f5f5f5;
              height: 270px;
              text-align: center;
              font-size: 20px;
              font-weight: bold;
              .rank_more2 {
                padding-top: 98px;

                .arrow_icon {
                  display: inline-block;
                  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                  font-size: 25px;
                  background-color: #fff;
                  width: 40px;
                  height: 40px;
                  padding: 7px 0 0 2px;
                  margin-top: 20px;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default Products_rank;
