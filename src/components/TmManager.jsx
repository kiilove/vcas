import React from "react";
import styled from "styled-components";
import { blue, orange, lightBlue, blueGrey } from "@mui/material/colors";
import View from "./tm/TmView";
import { Grid, Paper, TextField } from "@mui/material";
import ClientMemoList from "./ClientMemoList";
import TmOrder from "./tm/TmOrder";
import Body from "./tm/TmBody";
import ComponentHeader from "./ComponentHeader";

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
