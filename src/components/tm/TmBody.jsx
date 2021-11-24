import { Grid, Paper } from "@mui/material";
import React from "react";
import TmOrder from "./TmOrder";

const Body = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm md={4}>
        <TmOrder />
      </Grid>
      <Grid item xs={12} sm md={4}>
        <Paper>Todo</Paper>
      </Grid>
      <Grid item xs={12} sm md={4}>
        <Paper>MemoList</Paper>
      </Grid>
    </Grid>
  );
};

export default Body;
