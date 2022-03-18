import React from "react";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from '../../assets/img/patrick.jpg';

export default class Home extends React.Component{
    render(){
        return(
          <Paper
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                color: "#f5f5f5"
          }}></Paper>
        )
    }
}
