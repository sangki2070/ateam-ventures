import React from "react";

import { Category, CategoryList, CategoryName } from "./Sidebar01.styles";
const Sidebar01 = (props: any) => {
  return (
    <Category isOpen={props.isOpen}>
      <CategoryList isOpen={props.isOpen}>
        <CategoryName>파트너 정밀가공</CategoryName>
        <CategoryName>로그아웃</CategoryName>
      </CategoryList>
    </Category>
  );
};

export default Sidebar01;
