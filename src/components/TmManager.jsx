import React from "react";
import styled from "styled-components";
import { blue, orange, lightBlue, blueGrey } from "@mui/material/colors";
import View from "./tm/View";
import { Grid, Paper, TextField } from "@mui/material";
import ClientMemoList from "./ClientMemoList";
import TmOrder from "./tm/TmOrder";

const Container = styled.div`
  width: 100% !important;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  align-items: center;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  padding: 0px;
  justify-content: space-space-around;
`;

const HeaderTitle = styled.span`
  height: 30px;
  font-size: 26px;
  font-weight: 700;
  color: ${blueGrey[900]};
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
`;

const HeaderMenu = styled.div`
  height: 30px;
  display: flex;
  flex: 2;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
`;

const ViewWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
`;

const ViewPaper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const BodyWrapper = styled.div`
  min-width: 100%;
  min-height: 480px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`;
const ClientWrapper = styled.div``;
const ClientPaper = styled.div``;

const TodoWrapper = styled.div``;
const TodoPaper = styled.div``;

const MemoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const MemoViewPaper = styled.div``;
const MemoListPaper = styled.div``;

const TmManager = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <HeaderTitle>상담 업무</HeaderTitle>
          <HeaderMenu></HeaderMenu>
        </HeaderWrapper>
        <ViewWrapper>
          <ViewPaper>
            <View />
          </ViewPaper>
        </ViewWrapper>
        <BodyWrapper>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ClientWrapper>
                <ClientPaper>
                  <TmOrder />
                </ClientPaper>
              </ClientWrapper>
            </Grid>
            <Grid item xs={4}>
              <TodoWrapper>
                <TodoPaper>todo</TodoPaper>
              </TodoWrapper>
            </Grid>
            <Grid item xs={4}>
              <MemoWrapper>
                <MemoViewPaper></MemoViewPaper>
                <MemoListPaper></MemoListPaper>
              </MemoWrapper>
            </Grid>
          </Grid>
        </BodyWrapper>
      </Wrapper>
    </Container>
  );
};

export default TmManager;
