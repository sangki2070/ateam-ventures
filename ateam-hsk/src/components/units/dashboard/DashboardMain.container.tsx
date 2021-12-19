import React, { useEffect, useState } from "react";
import DashboardUI from "./DashboardMain.presenter";
import axios from "axios";
import { IRequest } from "./DashboardMain.type";

const DashboardContainer = () => {
  const request = "http://localhost:4000/requests";

  const [renderData, setRenderData] = useState<IRequest | null>();
  const [toggle, setToggle] = useState<boolean>(false);
  const [method, setMethod] = useState<string[]>([]);
  const [methodFilter, setMethodFilter] = useState<IRequest | null>();
  const [material, setMaterial] = useState<string[]>([]);
  const [materialFilter, setMaterialFilter] = useState<IRequest | null>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await axios.get(request);

        setRenderData(result.data || undefined);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const switchToggle = () => {
    setToggle((prev: boolean) => !prev);
  };

  const refreshBtn = () => {
    window.location.reload();
  };

  const onClickMenu = () => {
    setIsOpen((prev: boolean) => !prev);
    console.log(123);
    console.log(isOpen);
  };

  const onClickReset = () => {
    setIsOpen(false);
  };

  return (
    <DashboardUI
      renderData={renderData}
      toggle={toggle}
      switchToggle={switchToggle}
      method={method}
      setMethod={setMethod}
      setMethodFilter={setMethodFilter}
      methodFilter={methodFilter}
      materialFilter={materialFilter}
      setMaterialFilter={setMaterialFilter}
      setMaterial={setMaterial}
      material={material}
      refreshBtn={refreshBtn}
      onClickMenu={onClickMenu}
      isOpen={isOpen}
      onClickReset={onClickReset}
    />
  );
};

export default DashboardContainer;
