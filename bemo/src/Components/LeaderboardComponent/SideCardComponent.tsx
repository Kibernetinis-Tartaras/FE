import React from 'react';
import { Card } from 'react-bootstrap';

type SideCardProps = {
  title: string;
  name: string;
  value: string;
};

const SideCardComponent = ({title, name, value }: SideCardProps) => {
  return (
    <Card style={{width:"15vw", height:"15vh", fontFamily:"PaytypeBd", marginLeft:"3vh", marginBottom:"2vh", backgroundColor:"#E8E8E5"}} >
      <Card.Body>
        <Card.Title style={{justifyContent:"center", display:"flex", color:"#504678"}}>{title}</Card.Title>
        <Card.Text style={{justifyContent:"center", display:"flex", marginTop:"5vh"}}>
        <span style={{color:"#3C3246", marginRight:"2vh"}}>{name}-</span> <span style={{color:"#9690AE"}}>{value}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SideCardComponent;