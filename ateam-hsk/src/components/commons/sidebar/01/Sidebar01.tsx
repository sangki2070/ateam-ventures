import React from "react";

import { Category, CategoryList, CategoryName } from "./Sidebar01.styles";
const Sidebar01 = (props: any) => {
  return (
    <Category isOpen={props.isOpen}>
      <CategoryList isOpen={props.isOpen}>
        <CategoryName>Top</CategoryName>
        <CategoryName>Bottom</CategoryName>
      </CategoryList>
    </Category>
  );
};

export default Sidebar01;
