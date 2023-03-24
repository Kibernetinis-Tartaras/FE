import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChallengeProps } from "../../Dto/ChallengeProps";
import styles from "./Styles/OverviewStyles.module.css";
import ActivityCard from "./ActivityCard";
import { Carousel } from "react-bootstrap";

const MyChallengesComponent = () => {
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
      <h1 style={{ fontWeight: "bold", marginTop: "1rem", marginLeft: "32vh" }}>
        Your challenges
      </h1>
      <Container
        style={{ backgroundColor: "#F5F5F2", display: "flex", gap: "5vh" }}
      >
        {list && list.length > 0 ? (
          <Carousel
            interval={null}
            variant="dark"
            style={{ width: '65vw', height: '35vh', marginTop: '1rem' }}
            wrap={true}
            indicators={false}
          >
            {chunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex" style={{ marginLeft: '10vh' }}>
                  {chunk.map(challenge => (
                    <ActivityCard {...challenge} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div>No activities yet!</div>
        )}
      </Container>
    </div>
  );
};

export default MyChallengesComponent;
