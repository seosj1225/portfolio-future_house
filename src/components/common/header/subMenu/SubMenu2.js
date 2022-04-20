import React from "react";
import { Link } from "react-router-dom";

const menuList = [
  { name: "스토어", id: 1, url: "/" },
  { name: "카테고리", id: 1 },
  { name: "베스트", id: 1 },
  { name: "오늘의딜", id: 1 },
  { name: "4월한정특가", id: 1 },
  { name: "핫브랜드세일", id: 1 },
  { name: "리퍼마켓", id: 1 },
  { name: "빠른가구배송", id: 1 },
  { name: "프리미엄", id: 1 },
  { name: "기획전", id: 1 },
];

const SubMenu2 = () => {
  return (
    <ul>
      {/* menuList를 map()을 활용하여 li들을 나란히 나열함 */}
      {menuList.map((menu) => (
        <li>
          <Link to={menu.url ?? "/"}>{menu.name}</Link>
          {/* ?? : menu.url의 값이 존재하면 그대로 출력되고, null 이나 undefined이면 더블물음표 위의 값이 출력됨 */}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu2;
