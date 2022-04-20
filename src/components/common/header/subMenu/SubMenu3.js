import React from "react";
import { Link } from "react-router-dom";

const menuList = [
  { name: "업체찾기", id: 1, url: "/" },
  { name: "간편상담", id: 1 },
  { name: "견적계산", id: 1 },
  { name: "이사", id: 1 },
  { name: "설치/수리", id: 1 },
];
const subMenu3 = () => {
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

export default subMenu3;
