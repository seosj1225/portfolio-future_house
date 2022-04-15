import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import item1 from "../../images/164333421927911367.png";
import item2 from "../../images/162823225115177697.png";
import item3 from "../../images/162823225665741013.png";
import item4 from "../../images/162823226017937426.png";
import item5 from "../../images/162823226903946200.png";
import item6 from "../../images/162823227719846773.png";
import item7 from "../../images/162823228178967968.png";
import item8 from "../../images/163609843911228804.png";
import item9 from "../../images/164333398177552131.png";
import item10 from "../../images/163575474448469686.png";
import item11 from "../../images/162823230480918647.png";
import item12 from "../../images/162823230908544036.png";
import item13 from "../../images/162823231401891024.png";
import item14 from "../../images/162823242317048198.png";
import item15 from "../../images/162823231949249287.png";
import item16 from "../../images/164148743817769527.png";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Categories = () => {
  return (
    <Wrapper>
      <section className="row1">
        <header>
          <h2>카테고리별 상품 찾기</h2>
        </header>
        <section>
          <div>
            <ul>
              <li>
                <Link to="#">
                  <img src={item1} />
                  <p>가구</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item2} />
                  <p>패트릭</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item3} />
                  <p>조명</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item4} />
                  <p>가전</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item5} />
                  <p>주방용품</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item6} />
                  <p>데코/식물</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item7} />
                  <p>수납/정리</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item8} />
                  <p>생활용품</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item9} />
                  <p>서랍/수납장</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item10} />
                  <p>생필품</p>
                </Link>
              </li>
              {/* <li>
                <Link to="#">
                  <img src={item11} />
                  <p>공구/DIY</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item12} />
                  <p>인테리어시공</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item13} />
                  <p>반려동물</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item14} />
                  <p>캠핑용품</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item15} />
                  <p>실내운동</p>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={item16} />
                  <p>렌탈</p>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="categoryListPrev">
            <button>
              <MdArrowBackIosNew />
            </button>
          </div>
          <div className="categoryListNext">
            <button>
              <MdArrowForwardIos />
            </button>
          </div>
        </section>
      </section>
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

  font-family: "EliceDigitalBaeum-Bd";
  section.row1 {
    padding-top: 30px;
    width: 1160px;
    margin: 0 auto;

    header {
      h2 {
        font-size: 20px;
        padding: 0 0 0 10px;
      }
    }
    section {
      position: relative;
      div {
        ul {
          display: flex;
          margin: 0 10px;
          li {
            margin: 20px 0 0;
            min-width: 10%;
            a {
              display: block;
              text-align: center;
              color: #424242;
              img {
                width: 80px;
                margin-bottom: 20px;
              }
            }
          }
        }
      }
      .categoryListPrev,
      .categoryListNext {
        height: 100%;
        width: 64px;
        button {
          cursor: pointer;
          margin: 0 10px;
          position: relative;
          top: 50%;
          border: none;
          width: 32px;
          height: 32px;
          line-height: 16px;
          background-color: rgba(189, 189, 189, 0.8);
          border-radius: 50%;
          font-size: 20px;
          color: #fff;
        }
      }
      .categoryListPrev {
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(
          270deg,
          hsla(0, 0%, 100%, 0.01),
          #fff
        );
      }
      .categoryListNext {
        position: absolute;
        top: 0;
        right: 0;
        background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0.01), #fff);
        button {
          position: absolute;
          right: 0;
        }
      }
    }
  }
`;
export default Categories;
