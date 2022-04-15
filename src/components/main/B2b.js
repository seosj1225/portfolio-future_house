import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";

const B2b = () => {
  return (
    <Wrapper>
      <div className="row1">
        <Link to="#">
          <div className="b2b_list">
            <div className="b2b_icon">
              <span>OPEN</span>
            </div>
            <div className="b2b_title">전문가 가입신청</div>
            <div className="b2b_txt">
              <span>인테리어 전문가님! 오늘의집과 함께하세요</span>
              <MdArrowForwardIos className="b2b_icon2" />
            </div>
          </div>
        </Link>
        <Link to="#">
          <div className="b2b_list">
            <div className="b2b_title">사업자 구매 회원 전환</div>
            <div>
              <span className="b2b_txt">
                사업자 회원에게 구매 시 혜택을 드립니다
              </span>
              <MdArrowForwardIos className="b2b_icon2" />
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  @font-face {
    font-family: "EliceDigitalBaeum";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "EliceDigitalBaeum";
  .row1 {
    padding: 50px 10px 60px;
    width: 1160px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    a {
      div.b2b_list:hover {
        background-color: #ededed;
      }
      div.b2b_list {
        width: 560px;
        padding: 23px 0 22px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        .b2b_icon {
          margin: 0 10px 0 0;
          letter-spacing: 1px;
          font-size: 11px;
          height: 19px;
          padding: 4px 6px;
          background-color: rgb(255, 119, 119);
          color: #fff;
          border-radius: 50px;
        }
        .b2b_title {
          padding: 2px 0 0;
        }
        .b2b_txt {
          padding: 3px 20px;
          font-size: 11px;
          color: #757575;
          .b2b_icon2 {
            font-size: 11px;
            margin: 1px 0 0 5px;
          }
        }
      }
    }
  }
`;

export default B2b;
