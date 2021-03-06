import React from "react";
import styled from "styled-components";
import {
  Button,
  Divider,
  IconButton,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import {
  blueGrey,
  green,
  grey,
  orange,
  pink,
  red,
  yellow,
} from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

const MemoWrapper = styled.div`
  height: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const MemoActionBox = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const MemoItemBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const MemoItemsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

const MemoItemsText = styled.span`
  text-align: left;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  font-size: 15px;
  color: ${blueGrey[800]};
`;

const MemoItemsIcon = styled.span`
  display: flex;
  width: 100%;
  font-size: 10px;
  align-items: center;
  justify-content: flex-start;
  color: ${yellow[800]};
`;

const MemoPoint = [
  <MemoItemsIcon>
    <FontAwesomeIcon icon={faStar} />
  </MemoItemsIcon>,
  <MemoItemsIcon>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
  </MemoItemsIcon>,
  <MemoItemsIcon>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
  </MemoItemsIcon>,
  <MemoItemsIcon>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
  </MemoItemsIcon>,
  <MemoItemsIcon>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
  </MemoItemsIcon>,
];
const dummyMemo = [
  { id: 1, content: "2021-11-21 ????????? ?????? ??????", point: 3 },
  {
    id: 2,
    content: "2021-11-22 ????????? ?????????(????????????: 2021-11-30)",
    point: 5,
  },
  { id: 3, content: "2021-11-22 ????????? ????????? ??????", point: 2 },
  {
    id: 4,
    content: "2021-11-23 ???????????? ???????????? ???????????? ????????? ?????????",
    point: 2,
  },
  { id: 5, content: "2021-11-24 ????????? ???????????? ?????????", point: 3 },
  { id: 7, content: "2021-11-25 ??????????????? ???????????? ?????????", point: 1 },
  {
    id: 8,
    content: "2021-11-29 ????????? ??????????????? ?????? ?????? ?????? ?????????. ",
    point: 4,
  },
  { id: 9, content: "2021-11-30 ????????????", point: 5 },
];

const TmMemoList = () => {
  return (
    <MemoWrapper>
      <Stack px={3} py={1} spacing={2}>
        <MemoActionBox>
          <TextField
            variant="standard"
            label="??????"
            size="small"
            sx={{ width: "90%" }}
          />
          <IconButton
            component="span"
            style={{ fontSize: 20, marginTop: 20, color: grey[500] }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
        </MemoActionBox>
        <MemoItemBox>
          {dummyMemo.map((item, index) => (
            <>
              <MemoItemsWrapper>
                <MemoItemsIcon>{MemoPoint[item.point - 1]}</MemoItemsIcon>
                <MemoItemsText>{item.content}</MemoItemsText>
              </MemoItemsWrapper>
              {index < dummyMemo.length - 1 && (
                <Divider
                  style={{ width: "90%" }}
                  sx={{ bgcolor: blueGrey[100] }}
                />
              )}
            </>
          ))}
        </MemoItemBox>
      </Stack>
    </MemoWrapper>
  );
};

export default TmMemoList;
