import React from "react";
import styled from "styled-components";
import Background1 from "../bg/bg-1.jpg";
import Background2 from "../bg/bg-2.jpg";
import Background3 from "../bg/bg-3.jpg";
import Background4 from "../bg/bg-4.jpg";
import Background5 from "../bg/bg-5.jpg";
import Background6 from "../bg/bg-6.jpg";
import Background7 from "../bg/bg-7.jpg";
import Background8 from "../bg/bg-8.jpg";
import { Grid } from "@mui/material";
import SideMenu from "../components/SideMenu";
import TmManager from "../components/TmManager";

const BackgroundImg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Background5});
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
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
  background-color: rgba(255, 255, 255, 0.75);
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
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const Home = () => {
  return (
    <BackgroundImg>
      <Grid
        container
        spacing={2}
        height={{ md: "850px" }}
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid
          item
          xs={false}
          lg={1.5}
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        ></Grid>
        <Grid
          item
          lg={1.5}
          display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        >
          <SideWrapper>
            <SideMenu />
          </SideWrapper>
        </Grid>
        <Grid item lg={7.5}>
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
    </BackgroundImg>
  );
};

export default Home;
