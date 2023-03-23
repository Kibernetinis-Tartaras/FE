import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Styles/HeaderComponentStyles.module.css"
import LogOut from "../../Images/LogOut.svg"
import Oval from "../../Images/Oval.svg"
import Settings from "../../Images/Settings.svg"
import User from "../../Images/User.svg"
import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';

const HeaderComponentNotLogged = () => {
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
            <Nav style={{marginLeft:"auto", marginRight:"5vh"}}>
                <Button className={styles.createButton} href="/signup">Sign Up</Button>
            </Nav>
            <Nav style={{ marginRight:"5vh"}}>
                <Button className={styles.joinButton} href="/login">Log In</Button>
            </Nav>
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
                    <hr className="navbar-divider" />
                        <Nav style={{alignItems:"center", display:"flex", marginBottom:"2vh"}}>
                            <Button className={styles.createButton} href="/signup">Sign Up</Button>
                        </Nav>
                        <Nav style={{alignItems:"center", display:"flex", marginBottom:"3vh"}}>
                            <Button className={styles.joinButton} href="/login">Log In</Button>
                        </Nav>
                        <hr className="navbar-divider" />
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas></Navbar>}
    </div>
  );
};

export default HeaderComponentNotLogged;
