import styled from "styled-components";

export const Category = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: 100vh;
  background-color: white;
  z-index: 1;
  transition: all 0.35s;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? 0 : "-300px")};
  opacity: 95%;
  @media screen and (min-width: 360px) {
    display: none;
  }
`;
export const CategoryList = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 100px;
  left: ${(props) => (props.isOpen ? "100px" : "-300px")};
  transition: all 0.35s;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: hotpink; */
`;
export const CategoryName = styled.div`
  font-size: 14px;
  color: #323d45;
  font-weight: 500;
`;
