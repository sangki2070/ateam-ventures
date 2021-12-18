import React, { useEffect, useState } from "react";
import DashboardUI from "./DashboardMain.presenter";
import axios from "axios";

const DashboardContainer = () => {
  const request = "http://localhost:4000/requests";

  const [renderData, setRenderData] = useState();
  const [toggle, setToggle] = useState(false);
  const [method, setMethod] = useState([]);
  const [methodFilter, setMethodFilter] = useState();
  const [material, setMaterial] = useState([]);
  const [materialFilter, setMaterialFilter] = useState();

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
    setToggle((prev) => !prev);
  };

  const refreshBtn = () => {
    window.location.reload();
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
    />
  );
};

export default DashboardContainer;
