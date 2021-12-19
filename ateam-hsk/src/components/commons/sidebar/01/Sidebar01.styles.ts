import styled from "styled-components";

export const Category = styled.div<{ isOpen: boolean }>`
  @media screen and (max-width: 360px) {
    width: 300px;
    height: 100vh;
    background-color: white;

    transition: all 0.35s;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? 0 : "-280")};
  }
`;
export const CategoryList = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 100px;
  left: ${(props) => (props.isOpen ? "100px" : "-280px")};
  transition: all 0.35s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CategoryName = styled.div`
  font-size: 14px;
  color: #323d45;
  font-weight: 500;
`;
