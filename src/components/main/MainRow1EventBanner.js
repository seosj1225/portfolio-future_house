import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Event1 from "../../images/sign_up_web (1).jpg";
import Event2 from "../../images/sign_up_web (2).jpg";
import Event3 from "../../images/sign_up_web (3).jpg";
import Event4 from "../../images/sign_up_web (4).jpg";
import Event5 from "../../images/sign_up_web (5).jpg";
import Event6 from "../../images/sign_up_web (6).jpg";
import Event7 from "../../images/sign_up_web (7).jpg";
import Event8 from "../../images/sign_up_web (8).jpg";
import { GoPlus } from "react-icons/go";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const MainRow1EventBanner = () => {
  const [eventNum, setEventNum] = useState(1);

  //   prev 버튼 클릭시 다음페이지 보여주기
  const prevEvent = () => {
    let num;
    if (eventNum === 1) {
      num = 8;
    } else {
      num = eventNum - 1;
    }
    setEventNum(num);
  };

  //   next 버튼 클릭시 다음페이지 보여주기
  const nextEvent = () => {
    let num;
    if (eventNum === 8) {
      num = 1;
    } else {
      num = eventNum + 1;
    }
    setEventNum(num);
  };

  return (
    <Wrapper>
      <div className="Btn9">
        <div className="Img2">
          <Link to="#" className="banner">
            {eventNum === 1 && (
              <img src={Event1} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="banner">
            {eventNum === 2 && (
              <img src={Event2} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="banner">
            {eventNum === 3 && (
              <img src={Event3} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="banner">
            {eventNum === 4 && (
              <img src={Event4} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="banner">
            {eventNum === 5 && (
              <img src={Event5} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="banner">
            {eventNum === 6 && (
              <img src={Event6} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="banner">
            {eventNum === 7 && (
              <img src={Event7} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="banner">
            {eventNum === 8 && (
              <img src={Event8} className="Event1" alt="이벤트" />
            )}
          </Link>
          <Link to="#" className="Btn4">
            <ul className="Btn5">
              <li>
                <span>{eventNum} / 8</span>
              </li>
              <li>
                <GoPlus className="Btn4Icon" />
              </li>
            </ul>
          </Link>
        </div>
        <button className="Btn6" onClick={prevEvent}>
          <MdArrowBackIosNew className="Btn8" />
        </button>
        <button className="Btn7" onClick={nextEvent}>
          <MdArrowForwardIos className="Btn8" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @font-face {
    font-family: "EliceDigitalBaeum-Bd";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  &:hover {
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

  .Btn9 {
    position: relative;
    .Img2 {
      position: relative;
      overflow: hidden;
      height: 565px;
      border-radius: 5px;
      width: 289px;
      a.banner {
        width: inherit;
        height: inherit;

        .Event1 {
          width: inherit;
          height: inherit;
        }
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
          li {
            padding: 0;
          }
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
`;

export default MainRow1EventBanner;
