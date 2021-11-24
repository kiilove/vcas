import { Grid, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Extra from "./TmExtra";
import Info from "./TmInfo";
import MemoInput from "./TmMemoInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

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
