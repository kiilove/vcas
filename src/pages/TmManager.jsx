import React from "react";
import styled from "styled-components";
import { blue, orange, lightBlue, blueGrey } from "@mui/material/colors";
import { Grid } from "@mui/material";
import View from "../components/tm/TmView";
import Body from "../components/tm/TmBody";
import ComponentHeader from "../components/ComponentHeader";

const TmManager = () => {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <ComponentHeader title={"상담업무"} />
      </Grid>
      <Grid item xs={12}>
        <View />
      </Grid>
      <Grid item xs={12}>
        <Body />
      </Grid>
    </Grid>
  );
};

export default TmManager;
