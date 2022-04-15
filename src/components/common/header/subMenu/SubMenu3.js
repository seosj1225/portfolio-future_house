import React from "react";
import { Link } from "react-router-dom";

const subMenu3 = () => {
  return (
    <ul>
      <li>
        <Link to="#">업체찾기</Link>
      </li>
      <li>
        <Link to="#">간편상담</Link>
      </li>
      <li>
        <Link to="#">견적계산</Link>
      </li>
      <li>
        <Link to="#">이사</Link>
      </li>
      <li>
        <Link to="#">설치/수리</Link>
      </li>
    </ul>
  );
};

export default subMenu3;
