import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Room1 from "../../images/164904616233231814.jpg";
import Id1 from "../../images/164715616632471555.jpg";
import Event1 from "../../images/sign_up_web_v2.jpg";
import { GoPlus } from "react-icons/go";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const MainRow1 = () => {
  return (
    <Wrapper>
      <ul className="row1">
        <li>
          <Link to="#" className="Btn2">
            <div className="Img1">
              <div className="Room2">
                <img src={Room1} className="Room1" alt="룸" />
                <div className="Room3"></div>
              </div>
              <ul className="Contents1">
                <li>
                  <div className="Contents3">구축 아파트, 완벽한 리모델링!</div>
                  <div className="Contents2">
                    <img src={Id1} className="Id1" alt="아이디" />
                    <span>GO_Home:&#41;</span>
                  </div>
                </li>
                <li className="Btn1">
                  <span>보러가기</span>
                </li>
              </ul>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#" className="Btn3">
            <div className="Btn9">
              <div className="Img2">
                <img src={Event1} className="Event1" alt="이벤트" />
                <div className="Btn4">
                  <ul className="Btn5">
                    <li>
                      <span>1/13</span>
                    </li>
                    <li>
                      <GoPlus className="Btn4Icon" />
                    </li>
                  </ul>
                </div>
              </div>
              <button className="Btn6">
                <MdArrowBackIosNew className="Btn8" />
              </button>
              <button className="Btn7">
                <MdArrowForwardIos className="Btn8" />
              </button>
            </div>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @font-face {
    font-family: "EliceDigitalBaeum";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "EliceDigitalBaeum-Bd";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "EliceDigitalBaeum";
  margin-top: 30px;
  .row1 {
    width: 1160px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      padding: 0 10px;
      .Btn2 {
        .Img1 {
          border-radius: 5px;
          position: relative;
          height: 565px;
          border-radius: 5px;
          width: 847px;
          overflow: hidden;

          .Room2 {
            .Room1 {
              display: inline-block;
            }
            .Room3 {
              box-shadow: rgba(0, 0, 0, 0.5) 0px -50px 70px -25px inset;
              height: 565px;
              border-radius: 5px;
              width: 847px;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          .Contents1 {
            color: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 40px;
            width: 847px;
            display: flex;
            justify-content: space-between;
            li {
              .Contents3 {
                font-weight: bold;
                font-size: 33px;
                margin-bottom: 20px;
              }
              .Contents2 {
                img {
                  border-radius: 50%;
                  width: 25px;
                  height: 25px;
                }
                span {
                  font-size: 13px;
                  padding-left: 5px;
                  font-weight: bold;
                }
              }
            }
            .Btn1 {
              border: 1px solid #fff;
              border-radius: 5px;
              width: 142px;
              height: 52px;
              text-align: center;
              line-height: 48px;
              font-weight: bold;
              margin-top: 25px;
            }
          }
        }
      }
      .Btn2:hover {
        .Img1 {
          .Room2 {
            .Room1 {
              transition: 0.3s;
              transform: scale(1.05);
            }
          }
        }
        .Contents1 {
          .Btn1 {
            border: 1px solid #35c5f0;
            background-color: #35c5f0;
          }
        }
      }
      .Btn3:hover {
        .Event1 {
          transition: 0.3s;
          transform: scale(1.05);
        }
        .Btn9 {
          button {
            display: block;
          }
        }
      }
      .Btn3 {
        .Btn9 {
          position: relative;
          .Img2 {
            position: relative;
            overflow: hidden;
            height: 565px;
            border-radius: 5px;
            width: 289px;
            .Event1 {
              width: inherit;
              height: inherit;
            }
            .Btn4 {
              font-family: "EliceDigitalBaeum-Bd";
              font-size: 13px;
              font-weight: bold;
              color: #fff;
              position: absolute;
              bottom: 0;
              right: 0;
              .Btn5 {
                background-color: rgba(33, 38, 41, 0.5);
                display: flex;
                margin: 15px;
                padding: 6px 10px 6px 12px;
                border-radius: 50px;
              }
            }
          }
          button {
            cursor: pointer;
            display: none;
            background-color: #fff;
            line-height: 45px;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 20px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          }
          .Btn6 {
            position: absolute;
            top: 45%;
            left: -20px;
          }
          .Btn7 {
            position: absolute;
            top: 45%;
            right: -20px;
          }
        }
      }
    }
  }
`;

export default MainRow1;
