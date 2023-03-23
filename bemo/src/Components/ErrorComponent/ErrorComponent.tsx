import React from 'react';
import Alert from 'react-bootstrap/Alert';
import globalStyles from '../../GlobalStyles/GlobalStyles.module.css'
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
    const navigate = useNavigate();
    
    return (
        <div style={{textAlign:"center", height:"100vh"}}>
            <Alert key={'primary'} variant={'primary'}>
                This page does not exist! Give it a click if
                you like.
            </Alert>
            <div style={{display:"flex", justifyContent:"center"}}>
              <button onClick={() => {navigate("/main")}} className={globalStyles.activeButton}>Click here</button>  
            </div>           
        </div>
    )
}


export default ErrorComponent;