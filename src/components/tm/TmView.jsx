import { Grid } from "@mui/material";
import React from "react";
import Extra from "./TmExtra";
import Info from "./TmInfo";
import MemoInput from "./TmMemoInput";

const View = ({ telNum, Cdate, Cstatus }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm md={4} height={200}>
        <Info />
      </Grid>
      <Grid item xs={12} sm md={4} height={200}>
        <Extra />
      </Grid>
      <Grid item xs={12} sm md={4} height={200}>
        <MemoInput />
      </Grid>
    </Grid>
  );
};

export default View;
