import * as React from "react";
import styled from "styled-components";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const CardItemWrapper = styled.div`
  width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  :hover {
    border: 1px solid #2196f3;
  }
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 16px;
  @media (max-width: 360px) {
    width: 300px;
    heithg: 344px;
  }
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

const Card01 = (props: any) => {
  return (
    <CardItemWrapper>
      <CardHeader>
        <CardTitleWrapper>
          <CardTitle>{props.el?.title}</CardTitle>
          {props.el?.status === "상담중" ? (
            <CardStatus>
              <StatusText>상담중</StatusText>
            </CardStatus>
          ) : (
            <></>
          )}
        </CardTitleWrapper>
        <CompanyName>{String(props.el?.client)}</CompanyName>
        <DeadLine>{String(props.el?.due)}까지 납기</DeadLine>
      </CardHeader>
      <Line />
      <CardBody>
        <BodyItemWrapper>
          <CardItemTitle>도면개수</CardItemTitle>
          <CardItemContents>{Number(props.el?.count)}개</CardItemContents>
        </BodyItemWrapper>
        <BodyItemWrapper>
          <CardItemTitle>총 수량</CardItemTitle>
          <CardItemContents>{Number(props.el?.amount)}개</CardItemContents>
        </BodyItemWrapper>
        <BodyItemWrapper>
          <CardItemTitle>가공방식</CardItemTitle>
          <CardItemContents>{String(props.el?.method.join())}</CardItemContents>
        </BodyItemWrapper>
        <BodyItemWrapper>
          <CardItemTitle>재료</CardItemTitle>
          <CardItemContents>
            {String(props.el?.material.join())}
          </CardItemContents>
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
