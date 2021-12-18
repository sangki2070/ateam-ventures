import React, { useEffect, useState } from "react";
import DashboardUI from "./DashboardMain.presenter";
import axios from "axios";

const DashboardContainer = () => {
  const request = "http://localhost:4000/requests";

  const [renderData, setRenderData] = useState();
  const [toggle, setToggle] = useState(false);

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

  return (
    <DashboardUI
      renderData={renderData}
      toggle={toggle}
      switchToggle={switchToggle}
    />
  );
};

export default DashboardContainer;
