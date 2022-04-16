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
    <Wrapper className="Btn3">
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

const Wrapper = styled.div``;

export default MainRow1EventBanner;
