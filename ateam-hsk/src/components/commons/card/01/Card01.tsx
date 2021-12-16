import * as React from "react";
import styled from "styled-components";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CardItemWrapper = styled.div`
  width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 16px;
`;

const CardHeader = styled.div`
  margin-top: 24px;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  font-size: 16px;
  height: 24px;
`;

const CardStatus = styled.div`
  width: 50px;
  height: 24px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.div`
  font-size: 12px;
  color: #ffa000;
`;

const CompanyName = styled.div`
  font-size: 14px;
  height: 20px;
`;

const DeadLine = styled.div`
  margin-top: 24px;
  font-size: 14px;
  height: 20px;
  color: #939fa5;
`;

const Line = styled.div`
  border: 1px solid #e5e5e5;
  margin-top: 16px;
`;

const CardBody = styled.div`
  margin-top: 32px;
`;

const BodyItemWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

const CardItemTitle = styled.div`
  width: 70px;
  height: 20px;
  font-size: 14px;
  color: #323d45;
`;

const CardItemContents = styled.div`
  height: 20px;
  margin-left: 32px;
  font-size: 14px;
  color: #323d45;
`;

const CardFooter = styled.div`
  margin-top: 24px;
`;

const Card01 = () => {
  return (
    <CardItemWrapper>
      <CardHeader>
        <CardTitleWrapper>
          <CardTitle>자동차 시제품 제작</CardTitle>
          <CardStatus>
            <StatusText>상담중</StatusText>
          </CardStatus>
        </CardTitleWrapper>
        <CompanyName>A 고객사</CompanyName>
        <DeadLine>2020.12.14까지 납기</DeadLine>
      </CardHeader>
      <Line />
      <CardBody>
        <BodyItemWrapper>
          <CardItemTitle>도면개수</CardItemTitle>
          <CardItemContents>2개</CardItemContents>
        </BodyItemWrapper>
        <BodyItemWrapper>
          <CardItemTitle>총 수량</CardItemTitle>
          <CardItemContents>100개</CardItemContents>
        </BodyItemWrapper>
        <BodyItemWrapper>
          <CardItemTitle>가공방식</CardItemTitle>
          <CardItemContents>밀링,선반</CardItemContents>
        </BodyItemWrapper>
        <BodyItemWrapper>
          <CardItemTitle>재료</CardItemTitle>
          <CardItemContents>알루미늄</CardItemContents>
        </BodyItemWrapper>
      </CardBody>
      <CardFooter>
        <Stack spacing={2} direction="row">
          <Button variant="contained">요청 내역 보기</Button>
          <Button variant="outlined">채팅하기</Button>
        </Stack>
      </CardFooter>
    </CardItemWrapper>
  );
};

export default Card01;
