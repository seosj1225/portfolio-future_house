import React from "react";
import { Link } from "react-router-dom";

const menuList = [
  { name: "홈", id: 1, url: "/" },
  { name: "팔로잉", id: 1 },
  { name: "사진", id: 1 },
  { name: "집들이", id: 1 },
  { name: "노하우", id: 1 },
  { name: "전문가", id: 1 },
  { name: "집들이", id: 1 },
  { name: "셀프가이드", id: 1 },
  { name: "질문과답변", id: 1 },
  { name: "이벤트", id: 1 },
];

const SubMenu1 = () => {
  return (
    <ul>
      {menuList.map((menu) => (
        <li>
          <Link to={menu.url ?? "/"}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu1;
