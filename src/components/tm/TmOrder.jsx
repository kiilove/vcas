import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  margin: 10px auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;
const BoxWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  min-height: 400px;
  margin-top: 20px;
`;

const CardPaper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const CardAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const CardTelNum = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 17px;
  flex: 2;
`;
const dummyClient = [
  { id: 1, telNum: 12345671 },
  { id: 2, telNum: 12345672 },
  { id: 3, telNum: 12345673 },
  { id: 4, telNum: 12345674 },
  { id: 5, telNum: 12345675 },
  { id: 6, telNum: 12345676 },
  { id: 7, telNum: 12345677 },
  { id: 8, telNum: 12345678 },
  { id: 9, telNum: 12345679 },
  { id: 10, telNum: 12345670 },
];
const TmOrder = () => {
  return (
    <Container>
      <Wrapper>
        <BoxWrapper>
          <CardWrapper>
            {dummyClient.map((item) => (
              <CardPaper>
                <CardAvatar>
                  <Avatar sx={{ fontSize: 13, backgroundColor: green[200] }}>
                    1234
                  </Avatar>
                </CardAvatar>
                <CardTelNum>{item.telNum}</CardTelNum>
              </CardPaper>
            ))}
          </CardWrapper>
        </BoxWrapper>
      </Wrapper>
    </Container>
  );
};

export default TmOrder;
