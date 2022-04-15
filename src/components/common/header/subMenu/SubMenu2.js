import React from "react";
import { Link } from "react-router-dom";

const SubMenu2 = () => {
  return (
    <ul>
      <li>
        <Link to="#">스토어</Link>
      </li>
      <li>
        <Link to="#">카테고리</Link>
      </li>
      <li>
        <Link to="#">베스트</Link>
      </li>
      <li>
        <Link to="#">오늘의딜</Link>
      </li>
      <li>
        <Link to="#">4월한정특가</Link>
      </li>
      <li>
        <Link to="#">핫브랜드세일</Link>
      </li>
      <li>
        <Link to="#">리퍼마켓</Link>
      </li>
      <li>
        <Link to="#">빠른가구배송</Link>
      </li>
      <li>
        <Link to="#">프리미엄</Link>
      </li>
      <li>
        <Link to="#">기획전</Link>
      </li>
    </ul>
  );
};

export default SubMenu2;
