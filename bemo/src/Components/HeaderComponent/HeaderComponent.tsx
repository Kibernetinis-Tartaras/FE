import React from "react";
import { useState } from "react";
import useCustomHttp from "../../CustomHooks/useCustomHttp";
import globalStyles from "../../GlobalStyles/GlobalStyles.module.css";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./Styles/HeaderComponentStyles.module.css"
import LogOut from "../../Images/LogOut.svg"
import Oval from "../../Images/Oval.svg"
import Settings from "../../Images/Settings.svg"
import User from "../../Images/User.svg"
import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form } from "react-bootstrap";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
        {width > 1000 ? <Navbar style={{backgroundColor: "#E8E8E5"}} expand="lg">
            <Navbar.Brand className={styles.logoText}>BeMo</Navbar.Brand>
            <Nav  style={{marginLeft:"auto", marginRight:"5vh"}}>
                <Button className={styles.createButton}>Create a challenge</Button>
            </Nav>
            <Nav style={{ marginRight:"5vh"}}>
                <Button className={styles.joinButton}>Join with code</Button>
            </Nav>
            <Nav.Link href="#home" style={{ marginRight:"5vh"}}>
                <img src={User} alt="Outer Icon" />
            </Nav.Link>
            <Nav.Link href="#home" style={{marginRight:"5vh"}}>
                <img src={Settings} alt="Outer Icon" />
            </Nav.Link>
            <Nav.Link href="#home" style={{marginRight:"3vh"}}>
                <div className={styles.outerIcon}>
                    <img src={Oval} alt="Outer Icon" />
                    <div className={styles.innerIcon}>
                        <img src={LogOut} alt="Inner Icon" />
                    </div>
                </div>
            </Nav.Link>
        </Navbar> : <Navbar style={{backgroundColor: "#E8E8E5"}} expand="lg">
            <Navbar.Brand className={styles.logoTextSmall}>BeMo</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} style={{marginLeft:"auto", marginRight:"3vh"}}/>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-sm`}
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                    Menu
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav style={{alignItems:"center", display:"flex", marginBottom:"2vh"}}>
                            <Button className={styles.createButton}>Create a challenge</Button>
                        </Nav>
                        <Nav style={{alignItems:"center", display:"flex", marginBottom:"3vh"}}>
                            <Button className={styles.joinButton}>Join with code</Button>
                        </Nav>
                        <Nav.Link href="#home" style={{justifyContent:"center", display:"flex"}}>
                            <img src={User} alt="Outer Icon" />
                        </Nav.Link>
                        <hr className="navbar-divider" />
                        <Nav.Link href="#home" style={{justifyContent:"center", display:"flex"}}>
                            <img src={Settings} alt="Outer Icon" />
                        </Nav.Link>
                        <hr className="navbar-divider" />
                        <Nav.Link href="#home" style={{justifyContent:"center", display:"flex"}}>
                            <div className={styles.outerIcon}>
                                <img src={Oval} alt="Outer Icon" />
                                <div className={styles.innerIcon}>
                                    <img src={LogOut} alt="Inner Icon" />
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas></Navbar>}
    </div>
  );
};

export default HeaderComponent;
