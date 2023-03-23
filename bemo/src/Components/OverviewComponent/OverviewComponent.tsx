import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { OverviewProps } from "../../Dto/OverviewProps";
import styles from "./Styles/OverviewStyles.module.css"

const Overview = ({
  walking,
  running,
  cyclingDistance,
  activeChallenges,
  completedChallenges,
}: OverviewProps) => {
    const currentDate = new Date();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const year = currentDate.getFullYear();
    const monthYear = `${month}, ${year}`;

  return (
    <Container style={{fontFamily:"PaytypeBd", backgroundColor:"white"}}>
      <h1 style={{fontWeight: "bold", marginTop:"1rem"}}>Overview</h1>
      <p style={{color: "#5A78FF", fontWeight: "bold"}}>
        {monthYear}
      </p>
      <Row className="justify-content-center">
        <Col xs={10} md={2}>
          <h3 className={styles.h3}>Walking distance, km</h3>
          <p className={styles.center}>{walking}</p>
        </Col>
        <Col xs={10} md={2} >
          <h3 className={styles.h3}>Running distance, km</h3>
          <p className={styles.center}>{running}</p>
        </Col>
        <Col xs={10} md={2}>
          <h3 className={styles.h3}>Cycling distance, km</h3>
          <p className={styles.center}>{cyclingDistance}</p>
        </Col>
        <Col xs={10} md={2}>
          <h3 className={styles.h3}>Active Challenges</h3>
          <p className={styles.center}>{activeChallenges}</p>
        </Col>
        <Col xs={10} md={2}>
          <h3 className={styles.h3}>Completed Challenges</h3>
          <p className={styles.center}>{completedChallenges}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
