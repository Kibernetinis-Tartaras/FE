import React from "react";
import { Card } from "react-bootstrap";
import Running from "../../Images/Running.svg";
import Cycling from "../../Images/Cycling.svg";
import Walking from "../../Images/Walking.svg";
import { ChallengeProps } from "../../Dto/ChallengeProps";

const ActivityCard = ({
  id,
  name,
  type,
  isPublic,
  startDate,
  endDate,
}: ChallengeProps) => {
  const formattedDate = endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {isPublic == false ? (
        <Card style={{ width:"15vw", height:"30vh", backgroundColor:"#E8E8E5", marginLeft:"5vh" }}>
          <Card.Body style={{ fontFamily: "PaytypeBd", display:"flex", flexDirection:"column"}}>
            <Card.Title style={{ display:"flex", justifyContent:"center"}}>{name}</Card.Title>
            {type == 0 ? <Card.Img variant="top" src={Running} style={{ height:"20vh"}}/> : null}
            {type == 1 ? <Card.Img variant="top" src={Cycling} style={{ height:"20vh"}}/> : null}
            {type == 2 ? <Card.Img variant="top" src={Walking} style={{ height:"20vh"}}/> : null}
            <Card.Text style={{marginTop:"1vh", color:"#9690AE"}}>Ends on: {formattedDate}</Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};

export default ActivityCard;
