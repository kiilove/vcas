import React from "react";
import styled from "styled-components";
import Background3 from "../bg/bg-3.jpg";
import { Grid, Paper, Stack } from "@mui/material";
import { grey, blueGrey, yellow, purple } from "@mui/material/colors";
import SideMenu from "../components/SideMenu";
import TmManager from "../components/TmManager";
import { NoEncryption } from "@mui/icons-material";

const BackgroundImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background3});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 94, 247, 1) 17.8%,
    rgba(2, 245, 255, 1) 100.2%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const SideWrapper = styled.div`
  width: 100%;
  min-width: 150px;
  height: auto;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.9);
`;

const BodyWrapper = styled.div`
  width: 100%;
  min-width: auto;
  height: auto;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  border: 1.5px solid rgba(238, 218, 218, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const Home = () => {
  return (
    <Background>
      <Grid container spacing={2} height={{ md: "800px" }}>
        <Grid
          item
          xs={false}
          lg={1.5}
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        ></Grid>
        <Grid
          item
          lg={2}
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        >
          <SideWrapper>
            <SideMenu />
          </SideWrapper>
        </Grid>
        <Grid item lg={7}>
          <BodyWrapper>
            <TmManager />
          </BodyWrapper>
        </Grid>
        <Grid
          item
          lg={1.5}
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        ></Grid>
      </Grid>
    </Background>
  );
};

export default Home;
