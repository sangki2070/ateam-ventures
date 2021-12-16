import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

const Card01 = () => {
  return (
    <CardWrapper>
      <div>카드 영역입니다.</div>
    </CardWrapper>
  );
};

export default Card01;
