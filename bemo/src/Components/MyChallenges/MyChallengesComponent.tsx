import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChallengeProps } from "../../Dto/ChallengeProps";
import styles from "./Styles/OverviewStyles.module.css";
import ActivityCard from "./ActivityCard";
import { Carousel } from "react-bootstrap";

const MyChallengesComponent = () => {
  const [list, setList] = useState([
    {
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
    },
    {
      id: 4,
      name: "Activity 4",
      type: 2,
      isPublic: false,
      startDate: new Date("2023-03-01"),
      endDate: new Date("2023-03-10"),
    },
    {
      id: 5,
      name: "Activity 5",
      type: 1,
      isPublic: false,
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-06-10"),
    },
    {
      id: 6,
      name: "Activity 6",
      type: 0,
      isPublic: false,
      startDate: new Date("2023-02-01"),
      endDate: new Date("2023-07-10"),
    },
  ]);

  const currentDate = new Date();
  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const monthYear = `${month}, ${year}`;

  return (
    <Container style={{ fontFamily: "PaytypeBd", backgroundColor: "white", display:"flex", gap:"5vh" }}>
      {list.length > 0 ? (
        <Carousel interval={null} variant="dark" style={{width:"65vw", height: "35vh"}} wrap={true} indicators={false}>
            {list.map((challenge, index) => (
            <Carousel.Item key={challenge.id}>
              <div className="d-flex" style={{marginLeft:"10vh"}}>
                {[0, 1, 2].map(i => (
                  <ActivityCard {...list[(index * 3 + i) % list.length]} />
                ))}
              </div>
            </Carousel.Item>
      ))}
        </Carousel>
      ) : (
        <div>No activities yet!</div>
      )}
    </Container>
  );
};

export default MyChallengesComponent;
