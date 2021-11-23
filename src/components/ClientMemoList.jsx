import { Grid, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemoWrapper = styled.div`
  height: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const ClientMemoList = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MemoWrapper>
            <TextField multiline />
          </MemoWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClientMemoList;
