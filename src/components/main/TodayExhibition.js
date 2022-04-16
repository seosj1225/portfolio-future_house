import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import exhibition_pic1 from "../../images/164964592758215800.jpg";
import exhibition_pic2 from "../../images/164941091797662713.jpg";
import exhibition_pic3 from "../../images/164940424332172906.jpg";
import exhibition_pic4 from "../../images/164940205371672306.jpg";
import exhibition_pic5 from "../../images/164939314195581647.jpg";
import exhibition_pic6 from "../../images/164938112765577210.jpg";
import exhibition_pic7 from "../../images/164938183186531577.jpg";
import exhibition_pic8 from "../../images/164941222305699843.jpg";
import exhibition_pic9 from "../../images/164939764107357013.jpg";

const TodayExhibition = () => {
  const [exhibitionGroup, setExhibitionGroup] = useState(1);

  // prev 버튼 클릭시 이전페이지 보여주기
  const prevGroup = () => {
    let num;
    if (exhibitionGroup === 1) {
      num = 3;
    } else {
      num = exhibitionGroup - 1;
    }
    setExhibitionGroup(num);
  };
  // next 버튼 클릭시 다음페이지 보여주기
  const nextGroup = () => {
    let num;
    if (exhibitionGroup === 3) {
      num = 1;
    } else {
      num = exhibitionGroup + 1;
    }
    setExhibitionGroup(num);
  };

  return (
    <Wrapper>
      <section className="row1">
        <header>
          <h2>오늘의 기획전</h2>
          <Link to="#">더보기</Link>
        </header>
        <section className="exhibition_lists">
          <ul>
            {/* exhibitionGroup 변수가 1 일때 해당 태그내용이 보임 */}
            {exhibitionGroup === 1 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic1} alt="exhibition_pic1" />
                  </div>
                  <div className="exhibition_info">
                    <p>가구부터 이불, 주방용품까지!</p>
                    <p className="exhibition_info_title">
                      봄맞이 초특가! 집 꾸미기 추천템 ~85&#37;
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 1 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic2} alt="exhibition_pic2" />
                  </div>
                  <div className="exhibition_info">
                    <p>딱 일주일! #밀폐용기#수납#잡화 봄맞이 창고大개방</p>
                    <p className="exhibition_info_title">
                      &#91;선착순 쿠폰&#93; 봄맞이 주방 정리 기획전
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 1 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic3} alt="exhibition_pic3" />
                  </div>
                  <div className="exhibition_info">
                    <p>반려동물 봄맞이 새단장 필수템</p>
                    <p className="exhibition_info_title">
                      CAT&#38;DOG SPRING SALE UP TO 61&#37;
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 2 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic4} alt="exhibition_pic4" />
                  </div>
                  <div className="exhibition_info">
                    <p>인기가구! 선착순 100개 특가</p>
                    <p className="exhibition_info_title">
                      봄맞이 리바트 브랜드위크 ~62&#37;
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 2 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic5} alt="exhibition_pic5" />
                  </div>
                  <div className="exhibition_info">
                    <p>재택근무&#38;온라인수업을 위한 꿀템</p>
                    <p className="exhibition_info_title">
                      &#91;&#91;20&#37; 쿠폰&#93; 스마트 홈오피스 ~40&#37;
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 2 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic6} alt="exhibition_pic6" />
                  </div>
                  <div className="exhibition_info">
                    <p>인기브랜드의 특별한 콜라보!</p>
                    <p className="exhibition_info_title">
                      LG전자X까사미아 홈인테리어 ~69&#37;
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 3 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic7} alt="exhibition_pic7" />
                  </div>
                  <div className="exhibition_info">
                    <p>스타일리쉬한 가전을 다양한 혜택으로 만나보세요!</p>
                    <p className="exhibition_info_title">
                      삼성 BESPOKE 혼수마련 대축제
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 3 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic8} alt="exhibition_pic8" />
                  </div>
                  <div className="exhibition_info">
                    <p>진열/반품/스크래치 가구 가전 초특가</p>
                    <p className="exhibition_info_title">
                      &#91;리퍼마켓&#93; 어제는 정상가, 오늘은 반값!
                    </p>
                  </div>
                </Link>
              </li>
            )}
            {exhibitionGroup === 3 && (
              <li>
                <Link to="#">
                  <div className="exhibition_pics">
                    <img src={exhibition_pic9} alt="exhibition_pic9" />
                  </div>
                  <div className="exhibition_info">
                    <p>론칭기념 일주일간 단독 특가 ~4/17</p>
                    <p className="exhibition_info_title">
                      딩동- 입점했어요! 이번주 신규 브랜드
                    </p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </section>
        <button className="list_prev" onClick={prevGroup}>
          <span>
            <MdArrowBackIosNew />
          </span>
        </button>
        <button className="list_next" onClick={nextGroup}>
          <span>
            <MdArrowForwardIos />
          </span>
        </button>
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
    position: relative;
    header {
      margin: 0 0 20px;
      font-family: "EliceDigitalBaeum-Bd";
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      h2 {
        font-weight: bold;
      }
      a {
        font-size: 15px;
        color: #35c5f0;
      }
    }

    .exhibition_lists {
      ul {
        display: flex;
        justify-content: space-between;
        li:hover {
          img {
            transform: scale(1.05);
            transition: 0.3s;
          }
        }
        li {
          width: 366px;
          a {
            .exhibition_pics {
              border-radius: 10px;
              overflow: hidden;
            }
            .exhibition_info {
              padding: 20px;
              font-size: 13px;
              .exhibition_info_title {
                padding-top: 10px;
                font-size: 15px;
                font-weight: bold;
                letter-spacing: -0.5px;
              }
            }
          }
        }
      }
    }
    button.list_prev:hover,
    button.list_next:hover {
      color: #fff;
      background-color: rgb(53, 197, 240);
      transition: 0.1s;
    }
    button.list_prev,
    button.list_next {
      color: #424242;
      padding: 7px 0 0 0;
      font-size: 25px;
      cursor: pointer;
      border-radius: 50%;
      border: none;
      width: 40px;
      height: 40px;
      background-color: #fff;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

      span {
      }
    }
    button.list_prev {
      position: absolute;
      top: 50%;
      left: -10px;
    }
    button.list_next {
      position: absolute;
      top: 50%;
      right: -10px;
    }
  }
`;
export default TodayExhibition;

// .rank_more {
//     border-radius: 5px;
//     background-color: #f5f5f5;
//     height: 270px;
//     text-align: center;
//     font-size: 20px;
//     font-weight: bold;
//     .rank_more2 {
//       padding-top: 98px;
//     }
//   }rgb(53, 197, 240);
