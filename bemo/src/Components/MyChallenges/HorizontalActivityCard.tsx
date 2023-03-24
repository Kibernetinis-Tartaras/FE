import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ChallengeProps } from "../../Dto/ChallengeProps";
import ArrowRight from "../../Images/ArrowRight.svg";
import ArrowDown from "../../Images/ArrowDown.svg";
import styles from "./Styles/ActivityStyles.module.css";
import { ActivityType } from "../../Enums/ActivityType";
import {joinChallenge} from "../../Services/apiManagement"
import { join } from "path";

const HorizontalActivityCard = ({
  id,
  name,
  type,
  isPublic,
  startDate,
  endDate,
}: ChallengeProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const formattedEndDate = endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedStartDate = startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const activityTypeText: string = ActivityType[type];


  const onJoin = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    joinChallenge(id);
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <a
              style={{ cursor: "pointer", marginRight: "1vh" }}
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? <img src={ArrowRight} /> : <img src={ArrowDown} />}
            </a>
            <span style={{ color: "#635B6B" }}>{name}</span>
            <span style={{ color: "#9690AE", marginLeft: "1vh" }}>
              Ends on: {formattedEndDate}
            </span>
          </div>
          <button className={styles.activeButton} onClick={onJoin(id)}>
            Join
          </button>
        </div>
        {showDetails && (
          <>
            <div className="mt-3">Type: {activityTypeText}</div>
            <div className="mt-3"><span style={{ color: "#9690AE" }}>
              Starts on: {formattedStartDate}
            </span></div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default HorizontalActivityCard;
