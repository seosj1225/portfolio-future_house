import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const HeaderTopR = () => {
  return (
    <div className="headerTopR">
      <Link to="#" className="cartLink">
        <BsCart className="cartIcon" title="장바구니" />
      </Link>
      <ul className="headerTopR2">
        <li>
          <Link to="#">로그인</Link>
        </li>
        <li>
          <Link to="#">회원가입</Link>
        </li>
        <li>
          <Link to="#" className="headerTopR3">
            고객센터
          </Link>
        </li>
      </ul>
      <Link to="#" className="write">
        <span>글쓰기</span>
        <div className="writeIcon">
          <MdOutlineKeyboardArrowDown />
        </div>
      </Link>
    </div>
  );
};

export default HeaderTopR;
