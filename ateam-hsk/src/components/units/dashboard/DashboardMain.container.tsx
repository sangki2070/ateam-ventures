import React, { useEffect, useState } from "react";
import DashboardUI from "./DashboardMain.presenter";
import axios from "axios";

const DashboardContainer = () => {
  const request = "http://localhost:4000/requests";

  const [renderData, setRenderData] = useState();
  // interface Iprops {
  //   id: number;
  //   title: string;
  //   client: string;
  //   due: string;
  //   count: number;
  //   amount: number;
  //   method: string[];
  //   material: string[];
  //   status: string;
  // }

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

  console.log(renderData);

  return <DashboardUI renderData={renderData} />;
};

export default DashboardContainer;
