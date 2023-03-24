import React from "react";
import { useState } from "react";
import useCustomHttp from "../../CustomHooks/useCustomHttp";
import globalStyles from "../../GlobalStyles/GlobalStyles.module.css";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/LoginStyles.module.css";
import { Form, FormGroup } from "react-bootstrap";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Overview from "../OverviewComponent/OverviewComponent";
import { OverviewProps } from "../../Dto/OverviewProps";
import { over } from "lodash";
import MyChallengesComponent from "../MyChallenges/MyChallengesComponent";

const MainComponent = () => {
  const navigate = useNavigate();
  const overviewData: OverviewProps = {
    walking: 5,
    running: 10,
    cyclingDistance: 20,
    activeChallenges: 2,
    completedChallenges: 3,
  };
  return (
    <div>
      <HeaderComponent />
      <Overview {...overviewData} />
      <MyChallengesComponent />
    </div>
  );
};

export default MainComponent;
