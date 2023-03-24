import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChallengeProps } from "../../Dto/ChallengeProps";
import HorizontalActivityCard from "./HorizontalActivityCard";

const OpenChallengesComponent = () => {
  const [list, setList] = useState<ChallengeProps[]>([{
    id: 2,
    name: "Activity 2",
    type: 1,
    isPublic: false,
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-04-10"),
  },
  {
    id: 1,
    name: "Activity 1",
    type: 0,
    isPublic: false,
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-01-10"),
  },
  {
    id: 3,
    name: "Activity 3",
    type: 2,
    isPublic: false,
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-02-10"),
  },]);

  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    chunks.push(list.slice(i, i + chunkSize));
  }

  return (
    <div style={{ fontFamily: "PaytypeBd" }}>
      <Container>
        <h1 style={{ fontWeight: "bold" }}>Open challenges</h1>
      </Container>

      {list && list.length > 0 ? (
        <Container style={{ backgroundColor: "#F5F5F2",display:"flex", flexDirection:"column", justifyContent:"space-between", gridGap: "10px" }}>
          {list.map((challenge: ChallengeProps, index: number) => (
            <HorizontalActivityCard key={index} {...challenge} />
          ))}
        </Container>
      ) : (
        <Container style={{ backgroundColor: "#F5F5F2", marginTop:"8vh"}}>
          <span style={{ fontSize: "2rem" }}>No activities yet!</span>
        </Container>
      )}
    </div>
  );
};

export default OpenChallengesComponent;
