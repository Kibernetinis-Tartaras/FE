import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import TableComponent from "./TableComponent";
import { LeaderboardProps } from "../../Dto/LeaderboardProps";
import styles from "./Styles/LeaderboardStyles.module.css"
import ArrowLeft from "../../Images/ArrowLeft.svg"
import SideCardComponent from "./SideCardComponent";

const LeaderboardComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<LeaderboardProps[]>([{
    username: "Sarah",
    distance: 674,
    timeSpent: 57.07,
    longestRun: 3.57,
    highestElevationGain: 143,
    maxSpeed: 17,
    highAverageSpeed: 12.6
  },
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  },
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }

  ,
  {
    username: "Janett",
    distance: 654,
    timeSpent: 51.08,
    longestRun: 3.40,
    highestElevationGain: 121,
    maxSpeed: 16,
    highAverageSpeed: 13.6
  }
]);
  
    const location = useLocation();
    const { name } = location.state;

  return (
    <div style={{height:"100vh"}}>
      <HeaderComponent />
      <div style={{display:"flex", marginTop:"2vh"}}>
        <span style={{ marginLeft:"3vw", cursor:"pointer"}} onClick={() => navigate(-1)}><img src={ArrowLeft}/></span>
        <h1 className={styles.header} style={{marginLeft:"5vw"}}>{name}</h1>
      </div>
      <h1 className={styles.header} style={{marginTop:"1vh"}}>Leaderboard</h1>
      <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
            <SideCardComponent name="Sarah" title="Longest run" value="674 km" />
            <SideCardComponent name="Sarah" title="Highest elevation gain" value="143 m" />
            <SideCardComponent name="Sarah" title="Max speed" value="17 km/h" />
            <SideCardComponent name="Sarah" title="Highest average speed" value="13.6 km/h" />
        </div>
        <TableComponent data={data}/>
      </div>
      
    </div>
  );
};

export default LeaderboardComponent;
