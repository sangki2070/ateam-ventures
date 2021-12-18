import styled from "styled-components";

export const HeadWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1565c0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadLeft = styled.div`
  display: flex;
  margin-left: 40px;
`;

export const HeadRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;
  height: 20px;
  margin-right: 40px;
`;

export const Logo = styled.img`
  width: 150px;
  height: 20px;
`;

export const CompanyImage = styled.img`
  width: 16.67px;
  margin-right: 8px;
`;

export const CompanyName = styled.span`
  width: 67px;
  font-size: 14px;
  color: #ffffff;
  align-items: center;
`;

export const Logout = styled.span`
  width: 52px;
  font-size: 14px;
  color: #ffffff;
`;

export const Divider = styled.span`
  width: 1px;
  text-align: center;
  height: 20px;
  color: #ffffff;
`;

export const CompanInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BodyWarpper = styled.div`
  width: 1250px;
  margin: auto;
  padding-left: 9%;
  padding-right: 9%;
`;

export const BodyTitleWrapper = styled.div`
  margin-top: 40px;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const TitleDetail = styled.div`
  font-size: 16px;
`;

export const FilterWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

export const FilterLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RefreshWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  width: 80px;
  cursor: pointer;
`;

export const RefreshImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const RefreshText = styled.div`
  font-size: 12px;
  color: #2196f3;
  width: 58px;
  height: 20px;
`;

export const SelectWrapper = styled.div`
  display: flex;
`;

export const CardWrapper = styled.div`
  display: grid;
  /* width: 100%; */
  /* grid-template-rows: repeat(3, 1fr); */
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  justify-items: space-between;
  margin-top: 32px;
  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
