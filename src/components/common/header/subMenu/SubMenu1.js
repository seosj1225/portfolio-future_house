import React from "react";
import { Link } from "react-router-dom";

const SubMenu1 = () => {
  return (
    <ul>
      <li>
        <Link to="#">홈</Link>
      </li>
      <li>
        <Link to="#">팔로잉</Link>
      </li>
      <li>
        <Link to="#">사진</Link>
      </li>
      <li>
        <Link to="#">집들이</Link>
      </li>
      <li>
        <Link to="#">노하우</Link>
      </li>
      <li>
        <Link to="#">전문가</Link>
      </li>
      <li>
        <Link to="#">집들이</Link>
      </li>
      <li>
        <Link to="#">셀프가이드</Link>
      </li>
      <li>
        <Link to="#">질문과답변</Link>
      </li>
      <li>
        <Link to="#">이벤트</Link>
      </li>
    </ul>
  );
};

export default SubMenu1;
