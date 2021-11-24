import { Grid, Paper } from "@mui/material";
import React from "react";
import TmMemoList from "./TmMemoList";
import TmOrder from "./TmOrder";
import TmTodos from "./TmTodos";

const Body = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm md={4}>
        <TmOrder />
      </Grid>
      <Grid item xs={12} sm md={4}>
        <TmTodos />
      </Grid>
      <Grid item xs={12} sm md={4}>
        <TmMemoList />
      </Grid>
    </Grid>
  );
};

export default Body;
