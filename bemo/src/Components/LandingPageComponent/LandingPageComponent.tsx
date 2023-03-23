import React from 'react';
import styles from './Styles/LandingPageComponentStyles.module.css'
import LandingBackground from '../../Images/LandingBackground.jpg'
import HeaderComponentNotLogged from '../HeaderComponent/HeaderComponentNotLogged';
import { Button } from "react-bootstrap";

const LandingPageComponent = () => {
  return (
    <div style={{height:"100vh"}}>
        <HeaderComponentNotLogged/>
        <div className="position-relative" style={{height:"90%"}}>
            <img src={LandingBackground} alt="Landing Background" style={{width:"100%", height:"100%"}}/>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className={styles.header}>Be Mo<span className={styles.spanText}>bile,</span></h1>
                <h1 className={styles.header}>Be Mo<span className={styles.spanText}>tivated,</span></h1>
                <h1 className={styles.header} style={{marginBottom:"40vh"}}>Be Mo<span className={styles.spanText}>re</span></h1>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h2 className={styles.smallHeader} style={{marginTop:"5vh"}}>Join us today and start challenging</h2>
                <h2 className={styles.smallHeader}>your friends to move more</h2>  
            </div>
            <div className="position-absolute top-50 start-50 translate-middle" style={{marginTop:"10vh"}}>
                <Button className={styles.learnButton} style={{marginRight:"60vh"}}>Learn More</Button>  
            </div>
        </div>
    </div>
  );
};

export default LandingPageComponent;