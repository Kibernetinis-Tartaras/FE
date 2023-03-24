import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { LeaderboardProps } from "../../Dto/LeaderboardProps";

type TableComponentProps = {
    data: LeaderboardProps[];
};

const TableComponent = ({ data }: TableComponentProps) => {
    useEffect (() => {
        console.log(data);
    }, []);
  
    return (
    <Table style={{width:"80vw", marginLeft:"auto", fontFamily:"PaytypeBd"}} bordered hover>
      <thead>
        <tr style={{border:"none"}}>
          <th style={{border:"none"}}></th>
          <th style={{border:"none"}}>Username</th>
          <th style={{border:"none"}}>Distance</th>
          <th style={{border:"none"}}>Time Spent</th>
          <th style={{border:"none"}}>Longest Run</th>
          <th style={{border:"none"}}>Highest Elevation Gain</th>
          <th style={{border:"none"}}>Max Speed</th>
          <th style={{border:"none"}}>High Average Speed</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user: LeaderboardProps, index:number) => (
          <tr key={index}>
            <td style={{color:"#9690AE"}}>{index + 1}</td>
            <td style={{color:"#3C3246"}}>{user.username}</td>
            <td style={{color:"#3C3246"}}>{user.distance}</td>
            <td style={{color:"#3C3246"}}>{user.timeSpent}</td>
            <td style={{color:"#3C3246"}}>{user.longestRun}</td>
            <td style={{color:"#3C3246"}}>{user.highestElevationGain}</td>
            <td style={{color:"#3C3246"}}>{user.maxSpeed}</td>
            <td style={{color:"#3C3246"}}>{user.highAverageSpeed}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
