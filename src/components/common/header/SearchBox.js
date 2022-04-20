import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";

const SearchBox = () => {
  return (
    <form>
      <div className="searchBox">
        <FiSearch className="searchIcon" />
        <input type="text" placeholder="내일의집 통합검색"></input>
      </div>
      {/* <ul>
          {searchList.map((list) => (
            <li>{list}</li>
          ))}
        </ul> */}
      <div className="searchRecord1">
        <div className="searchRecord2">
          <span>최근 검색어</span>
          <button>전체 삭제</button>
        </div>
        <div className="searchRecord3">
          <div>1</div>
          <div>
            <span>
              <MdClear />
            </span>
          </div>
        </div>
        <div className="searchRecord3">
          <div>2</div>
          <div>
            <span>
              <MdClear />
            </span>
          </div>
        </div>
        <div className="searchRecord3">
          <div>3</div>
          <div>
            <span>
              <MdClear />
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

const Wrapper = styled.form`
  position: relative;
  .searchBox:hover {
    background-color: #fafafa;
  }
  .searchBox {
    border: solid 1px lightgray;
    border-radius: 5px;
    height: 40px;
    width: 270px;
    margin: 20px 0 0 60px;
    padding: 8px;
    .searchIcon {
      font-size: 20px;
      color: #777777;
    }
    input:focus {
      outline: none;
    }
    input {
      width: 230px;
      border: none;
      padding: 0 0 8px 10px;
      font-size: 15px;
      font-family: "EliceDigitalBaeum";
      font-weight: bold;
      background-color: inherit;
      &::placeholder {
        color: #dbdbdb;
      }
    }
  }
  .searchRecord1 {
    color: #757575;
    font-family: "EliceDigitalBaeum";
    font-size: 13px;
    font-weight: bold;
    padding: 10px;
    border: solid 1px lightgray;
    border-radius: 5px;
    width: 270px;
    background-color: #fff;
    position: absolute;
    top: 70px;
    right: 0;
    z-index: 9999999999;
    .searchRecord2 {
      margin: 10px 5px;
      display: flex;
      justify-content: space-between;
      button:hover {
        color: lightgray;
        cursor: pointer;
      }
      button {
        border: none;
        background-color: inherit;
        color: #757575;
        font-family: "EliceDigitalBaeum";
        font-size: 12px;
        font-weight: bold;
      }
    }
    .searchRecord3:hover {
      background-color: #f7f8fa;
    }
    .searchRecord3 {
      cursor: pointer;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      color: #f7f8fa;
      padding: 10px 15px 9px;
      div {
        color: #000;
        span:hover {
          color: lightgray;
        }
        span {
          font-size: 18px;
          color: #bdbdbd;
        }
      }
    }
  }
`;

export default SearchBox;
