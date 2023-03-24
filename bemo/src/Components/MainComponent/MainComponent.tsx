import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Overview from "../OverviewComponent/OverviewComponent";
import { OverviewProps } from "../../Dto/OverviewProps";
import MyChallengesComponent from "../MyChallenges/MyChallengesComponent";
import OpenChallengesComponent from "../MyChallenges/OpenChallengesComponent";
import { useUserValidation } from "../../CustomHooks/useUserValidation";

const MainComponent = () => {
  const navigate = useNavigate();
  var isValid = useUserValidation();
  const overviewData: OverviewProps = {
    walking: 5,
    running: 10,
    cyclingDistance: 20,
    activeChallenges: 2,
    completedChallenges: 3,
  };

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
  });

  return (
    <div style={{height:"100vh"}}>
      <HeaderComponent />
      <Overview {...overviewData} />
      <MyChallengesComponent />
      <OpenChallengesComponent />
    </div>
  );
};

export default MainComponent;
