import React from "react";
import {
  HeadWrapper,
  HeadLeft,
  Logo,
  HeadRight,
  CompanyImage,
  CompanyName,
  Logout,
  CompanInfo,
  Divider,
  BodyWarpper,
  BodyTitleWrapper,
  Title,
  TitleDetail,
  FilterWrapper,
  RefreshWrapper,
  RefreshImage,
  RefreshText,
  SelectWrapper,
  FilterLeftWrapper,
  CardWrapper,
} from "./DashboardMain.styles";

import Select01 from "../../commons/select/01/Select01";
import Select02 from "../../commons/select/02/Select02";
import Switch01 from "../../commons/switch/01/Switch01";
import Card01 from "../../commons/card/01/Card01";

const DashboardUI = (props: any) => {
  return (
    <>
      <HeadWrapper>
        <HeadLeft>
          <Logo src="/images/capa.png" />
        </HeadLeft>
        <HeadRight>
          <CompanInfo>
            <CompanyImage src="/images/company.svg" />
            <CompanyName>A 가공업체</CompanyName>
          </CompanInfo>
          <Divider>|</Divider>
          <Logout>로그아웃</Logout>
        </HeadRight>
      </HeadWrapper>
      <BodyWarpper>
        <BodyTitleWrapper>
          <Title>들어온 요청</Title>
          <TitleDetail>파트너님에게 딱맞는 요청서를 찾아보세요</TitleDetail>
        </BodyTitleWrapper>
        <FilterWrapper>
          <FilterLeftWrapper>
            <SelectWrapper>
              <Select01
                method={props.method}
                setMethod={props.setMethod}
                renderData={props.renderData}
                setMethodFilter={props.setMethodFilter}
                methodFilter={props.methodFilter}
              />
              <Select02
                materialFilter={props.materialFilter}
                setMaterialFilter={props.setMaterialFilter}
                renderData={props.renderData}
                material={props.material}
                setMaterial={props.setMaterial}
              />
            </SelectWrapper>
            <RefreshWrapper onClick={props.refreshBtn}>
              <RefreshImage src="/images/refresh.png" />
              <RefreshText>필터링 리셋</RefreshText>
            </RefreshWrapper>
          </FilterLeftWrapper>
          <Switch01 switchToggle={props.switchToggle} />
        </FilterWrapper>

        <CardWrapper>
          {props.toggle
            ? props.renderData
                ?.filter((el: any) => el.status === "상담중")
                .map((el: any) => <Card01 el={el} key={el.id} />)
            : (
                props.materialFilter ||
                props.methodFilter ||
                props.renderData
              )?.map((el: any) => <Card01 el={el} key={el.id} />)}
        </CardWrapper>
      </BodyWarpper>
    </>
  );
};

export default DashboardUI;
