import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// import Logo from "/images/logo.png";
import { BiHomeAlt } from "react-icons/bi";
import SubMenu1 from "./subMenu/SubMenu1";
import SubMenu2 from "./subMenu/SubMenu2";
import SubMenu3 from "./subMenu/SubMenu3";
import SearchBox from "./SearchBox";
import HeaderTopR from "./HeaderTopR";

const Header = () => {
  const [depth1Hovered, setDepth1Hovered] = useState(1);
  const location = useLocation();

  return (
    <Wrapper>
      <div className="row2">
        <div className="row1">
          <h1>
            <Link to="#">
              <img src="/images/logo.png" className="logo" alt="logo"></img>
            </Link>
          </h1>
          <div>
            <ul className="depth1">
              <li onMouseOver={() => setDepth1Hovered(1)}>
                <Link to="/" className={location?.pathname === "/" && "on"}>
                  커뮤니티
                </Link>
              </li>
              <li onMouseOver={() => setDepth1Hovered(2)}>
                <Link
                  to="/detail"
                  className={location?.pathname === "/detail" && "on"}
                >
                  스토어
                </Link>
              </li>
              <li onMouseOver={() => setDepth1Hovered(3)}>
                <Link to="#">인테리어시공</Link>
              </li>
            </ul>
          </div>
          <SearchBox />
          <HeaderTopR />
        </div>
      </div>

      <div className="row3">
        <div className="row4">
          <div className="depth2">
            {depth1Hovered === 1 && <SubMenu1 />}
            {/* depth1Hovered이 1일때 subMenu1이 보임(호버) */}
            {depth1Hovered === 2 && <SubMenu2 />}
            {depth1Hovered === 3 && <SubMenu3 />}
          </div>
          <div className="Beta3D">
            <Link to="#">
              <div className="betaIcon">
                <BiHomeAlt />
              </div>
              <span className="betaText">3D인테리어</span>
              <div className="betaIcon2">
                <span>BETA</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @font-face {
    font-family: "BMJUA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
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
  @font-face {
    font-family: "EliceDigitalBaeum";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "EliceDigitalBaeum-Bd";

  .row2 {
    border-bottom: 1px solid lightgray;

    .row1 {
      width: 1160px;
      margin: 0 auto;
      display: flex;
      height: 80px;
      h1 .logo {
        width: 100px;
        padding-top: 15px;
      }
      div {
        .depth1 {
          display: flex;
          justify-content: space-evenly;
          line-height: 80px;
          width: 370px;
          font-family: "BMJUA";
          font-size: 20px;
          li {
            a.on,
            a:hover {
              color: #09addb;
            }
          }
        }
      }
    }
    .headerTopR {
      display: flex;
      a.cartLink:hover {
        background-color: #35c5f0;
        color: #fff;
      }
      a.cartLink {
        color: #777777;
        margin: 20px 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 7px;
        font-size: 25px;
      }
      .headerTopR2 {
        display: flex;
        justify-content: space-between;
        color: #777777;
        font-size: 15px;
        margin-top: 35px;
        width: 180px;
        a {
          /* background-color: #000; */
          display: inline-block;
          border-right: 1px solid #000;
          padding-right: 6px;
        }
        .headerTopR3 {
          border: none;
        }
        a:hover {
          color: #35c5f0;
        }
      }
      .write:hover {
        background-color: #09addb;
      }
      .write {
        background-color: #35c5f0;
        color: #fff;
        height: 40px;
        border-radius: 5px;
        margin: 25px 0 0 20px;
        width: 100px;
        display: flex;
        span {
          padding: 11px 7px 0 15px;
        }
        .writeIcon {
          font-size: 20px;
          margin-top: 9px;
        }
      }
    }
  }
  .row3 {
    height: 50px;
    border-bottom: 1px solid lightgray;
    .row4 {
      width: 1160px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .depth2 {
        ul {
          display: flex;
          line-height: 48px;
          li {
            font-family: "EliceDigitalBaeum";
            font-size: 15px;
            font-weight: bold;
            a {
              display: block;
              padding: 0 10px;
            }
            a:hover {
              color: #35c5f0;
              border-bottom: 2px solid #35c5f0;
            }
          }
        }
      }
      .Beta3D {
        padding-top: 14px;
        a:hover .betaText {
          color: #35c5f0;
        }
        a {
          display: flex;
          .betaIcon {
            width: 22px;
            height: 22px;
            line-height: 22px;
            border-radius: 5px;
            color: #fff;
            text-align: center;
            background-color: #35c5f0;
          }
          span {
            padding: 2px 5px;
            font-size: 15px;
            color: #777;
          }
          .betaIcon2 {
            margin-top: 2px;
            background-color: #777;
            width: 35px;
            height: 15px;
            border-radius: 20px;
            text-align: center;
            line-height: 8px;
            span {
              font-family: "Gothic";
              font-size: 10px;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export default Header;
