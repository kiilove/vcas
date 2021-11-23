import React from "react";
import styled from "styled-components";
import Background3 from "../bg/bg-3.jpg";
import { Grid, Paper } from "@mui/material";
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
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 94, 247, 1) 17.8%,
    rgba(2, 245, 255, 1) 100.2%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 800px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideWrapper = styled.div`
  width: 100%;
  min-width: 150px;
  height: 100%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.9);
`;

const BodyWrapper = styled.div`
  width: 100%;
  min-width: 500px;
  height: 100%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Home = () => {
  return (
    <Background>
      <Container>
        <Grid container spacing={3} sx={{ height: "100%" }}>
          <Grid
            item
            lg={1.5}
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          ></Grid>
          <Grid item md={2} lg={1.5}>
            <SideWrapper>
              <SideMenu />
            </SideWrapper>
          </Grid>
          <Grid item md={10} lg={7.5}>
            <BodyWrapper>
              <TmManager />
            </BodyWrapper>
          </Grid>
          <Grid
            item
            lg={1.5}
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          ></Grid>
        </Grid>
      </Container>
    </Background>
  );
};

export default Home;
