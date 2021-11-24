import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  min-height: 200px;
  padding: 20px;
`;

const CardPaper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 38%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const CardAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CardTelNum = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  flex: 2;
  margin-left: 10px;
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
    <BoxWrapper>
      <CardWrapper>
        {dummyClient.slice(0, 6).map((item) => (
          <CardPaper>
            <CardAvatar>
              <Avatar
                sx={{
                  fontSize: 11,
                  width: "25px",
                  height: "25px",
                  backgroundColor: green[200],
                }}
              >
                1234
              </Avatar>
            </CardAvatar>
            <CardTelNum>{item.telNum}</CardTelNum>
          </CardPaper>
        ))}
      </CardWrapper>
    </BoxWrapper>
  );
};

export default TmOrder;
