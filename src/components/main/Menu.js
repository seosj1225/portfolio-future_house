import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu1 from "../../images/none(1).png";
import Menu2 from "../../images/none(2).png";
import Menu3 from "../../images/none(3).png";
import Menu4 from "../../images/none(4).png";
import Menu5 from "../../images/none(5).png";
import Menu6 from "../../images/none(6).png";
import Menu7 from "../../images/none(7).png";
import Menu8 from "../../images/none(8).png";
import Menu9 from "../../images/none(9).png";
import Menu10 from "../../images/none(10).png";

const Menu = () => {
  return (
    <Wrapper>
      <ul className="row">
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu1} />
            </div>
            <div className="content">쇼핑하기</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu2} />
            </div>
            <div className="content">빠른가구배송</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu3} />
            </div>
            <div className="content">N평집들이</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu4} />
            </div>
            <div className="content">공간별사진</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu5} />
            </div>
            <div className="content">간편시공</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu6} />
            </div>
            <div className="content">쉬운이사</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu7} />
            </div>
            <div className="content">오늘의딜</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu8} />
            </div>
            <div className="content">첫구매혜택</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu9} />
            </div>
            <div className="content">식품관오픈</div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <div className="menuImg">
              <img src={Menu10} />
            </div>
            <div className="content">선물드려요</div>
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

  font-family: "EliceDigitalBaeum";

  .row {
    padding-top: 25px;
    width: 1160px;
    height: 164.91px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    li {
      text-align: center;
      a {
        padding: 0 13px;
        display: block;
        .menuImg {
          width: 90px;
        }
        .content {
          color: #2f3438;
          padding: 8px 0;
        }
      }
    }
  }
`;
export default Menu;
