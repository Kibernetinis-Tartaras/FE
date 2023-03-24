import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChallengeProps } from "../../Dto/ChallengeProps";
import HorizontalActivityCard from "./HorizontalActivityCard";

const OpenChallengesComponent = () => {
  const [list, setList] = useState<ChallengeProps[]>([]);

  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    chunks.push(list.slice(i, i + chunkSize));
  }

  return (
    <div style={{ fontFamily: "PaytypeBd" }}>
      <h1 style={{ fontWeight: "bold", marginTop: "1rem", marginLeft: "32vh" }}>
        Open challenges
      </h1>

      {list && list.length > 0 ? (
        <Container style={{ backgroundColor: "#F5F5F2", gap: "5vh" }}>
          {list.map((challenge: ChallengeProps, index: number) => (
            <HorizontalActivityCard key={index} {...challenge} />
          ))}
        </Container>
      ) : (
        <Container style={{ backgroundColor: "#F5F5F2", marginTop: "6vh" }}>
          <span style={{ fontSize: "2rem" }}>No activities yet!</span>
        </Container>
      )}
    </div>
  );
};

export default OpenChallengesComponent;
