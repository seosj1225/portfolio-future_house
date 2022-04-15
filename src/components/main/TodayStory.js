import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import room1 from "../../images/164938560912731495.jpg";
import room2 from "../../images/164860698691467627.jpg";
import room3 from "../../images/164861807629125578.jpg";
import id1 from "../../images/163946196217635819.jpg";
import id2 from "../../images/164474921396273679.jpg";
import id3 from "../../images/164778042419824676.jpg";
import { MdArrowForwardIos } from "react-icons/md";

const TodayStory = () => {
  return (
    <Wrapper>
      <div className="row1">
        <h2>오늘의 스토리</h2>
        <div className="row2">
          <Link to="#" className="row3 item1">
            <div className="item3">
              <img src={room1} className="room1" alt="room1" />
            </div>
            <div className="row4">
              <div className="row5">주황을 사랑하는 거지</div>
              <div className="row6">
                <img src={id1} className="id" alt="id1" />
                <span>하진앗</span>
              </div>
            </div>
          </Link>
          <Link to="#" className="row3 item1">
            <div className="item3">
              <img src={room2} className="room1" alt="room2" />
            </div>
            <div className="row4">
              <div className="row5">무채색도 따뜻하게 느껴지는 집</div>
              <div className="row6">
                <img src={id2} className="id" alt="id2" />
                <span>수달해달사모예드</span>
              </div>
            </div>
          </Link>
          <Link to="#" className="row3 item1">
            <div className="item3">
              <img src={room3} className="room1" alt="room3" />
            </div>
            <div className="row4">
              <div className="row5">구축 아파트의 러블리한 변신</div>
              <div className="row6">
                <img src={id3} className="id" alt="id3" />
                <span>sophy_home</span>
              </div>
            </div>
          </Link>
          <ul className="row3 item2">
            <li className="row7">
              <Link to="#" className=" only1">
                <div className="row8">예쁜 집 구경하기</div>
                <div className="row9">
                  <span>집들이</span>
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </Link>
            </li>
            <li className="row7">
              <Link to="#">
                <div className="row8">전문가 시공사례</div>
                <div className="row9">
                  <span>전문가 지들이</span>
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </Link>
            </li>
            <li className="row7">
              <Link to="#" className=" only2">
                <div className="row8">인테리어 꿀팁 총 집합</div>
                <div className="row9">
                  <span>노하우</span>
                  <MdArrowForwardIos className="arrowIcon" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
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
  @font-face {
    font-family: "EliceDigitalBaeum";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "EliceDigitalBaeum-Bd";
  margin: 30px 0;
  .row1 {
    width: 1160px;
    margin: 0 auto;
    h2 {
      padding: 0 10px;
      font-size: 19px;
      font-weight: bold;
      margin-bottom: 22px;
    }
    .row2 {
      display: flex;
      .row3 {
        padding: 0 10px;
        width: 289px;
      }
      .item1:hover {
        .item3 {
          overflow: hidden;
          .room1 {
            transition: 0.3s;
            transform: scale(1.05);
          }
        }
      }
      .item1 {
        .item3 {
          border-radius: 5px;
          overflow: hidden;
        }
        .row4 {
          padding: 15px 10px;
          .row5 {
            font-family: "EliceDigitalBaeum-Bd";
            font-size: 16px;
          }
          .row6 {
            padding: 10px 0;
            font-size: 12px;
            font-weight: bold;
            .id {
              width: 22px;
              height: 22px;
              border-radius: 50%;
              margin: 0 5px 0 0;
            }
          }
        }
      }
      ul.item2 {
        li.row7 {
          margin-bottom: 0.5px;
          a:hover {
            background-color: #ededed;
          }
          a {
            display: block;
            padding: 34px 10%;
            background-color: #f5f5f5;
            .row8 {
              font-size: 12px;
              padding: 0 0 10px;
              color: #757575;
            }
            .row9 {
              color: #424242;
              display: flex;
              justify-content: space-between;
              .arrowIcon {
                font-size: 10px;
              }
            }
          }
          .only1 {
            border-radius: 5px 5px 0 0;
          }

          .only2 {
            border-radius: 0 0 5px 5px;
          }
        }
      }
    }
  }
`;

export default TodayStory;
