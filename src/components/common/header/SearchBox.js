import React from "react";
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

export default SearchBox;
