import React from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark as fsBookmark,
  faThumbsUp as fsThumbsUp,
  faThumbsDown as fsThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faThumbsUp as frThumbsUp,
  faBookmark as frBookmark,
  faThumbsDown as frThumbsDown,
} from "@fortawesome/free-regular-svg-icons";

import { blue, grey, pink, yellow } from "@mui/material/colors";
import { Button, Grid, Rating, Stack, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const ExtraWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.5);
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

const InfoNumber = styled.span`
  height: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 500;
`;

const InfoAction = styled.div`
  height: 100%;
  width: 80%;

  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CheckIcon = styled.span`
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoCheckBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(26px) saturate(180%);
  background-color: rgba(241, 241, 241, 0.35);
  border: 1.5px solid rgba(185, 185, 185, 0.2);
`;

const ExtraSelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemoRatingBox = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
`;

const MemoRatingTitle = styled.span`
  font-size: 15px;
  color: ${grey[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const MemoRating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 3;
`;

const MemoTextBox = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ClientIcon = (icon) => (
  <CheckIcon>
    <FontAwesomeIcon icon={icon} />
  </CheckIcon>
);

const View = ({ telNum, Cdate, Cstatus }) => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ height: "180px" }}>
        <Grid item xs={4}>
          <InfoWrapper>
            <InfoNumber>010-4643-3464</InfoNumber>
            <InfoAction>
              <InfoCheckBox>
                <Checkbox
                  icon={ClientIcon(frThumbsUp)}
                  checkedIcon={ClientIcon(fsThumbsUp)}
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: blue[800],
                    },
                  }}
                />
              </InfoCheckBox>
              <InfoCheckBox>
                <Checkbox
                  icon={ClientIcon(frThumbsDown)}
                  checkedIcon={ClientIcon(fsThumbsDown)}
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[800],
                    },
                  }}
                />
              </InfoCheckBox>
              <InfoCheckBox>
                <Checkbox
                  icon={ClientIcon(frBookmark)}
                  checkedIcon={ClientIcon(fsBookmark)}
                  sx={{
                    color: yellow[800],
                    "&.Mui-checked": {
                      color: yellow[800],
                    },
                  }}
                />
              </InfoCheckBox>
            </InfoAction>
          </InfoWrapper>
        </Grid>
        <Grid item xs={4}>
          <ExtraWrapper>
            <Stack direction="row" justifyContent="space-around" sx={{ mt: 2 }}>
              <ExtraSelectBox>
                <FormControl>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    성별
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"man"}
                    inputProps={{
                      name: "sex",
                      id: "sex-native",
                    }}
                  >
                    <option value={"man"}>남성</option>
                    <option value={"woman"}>여성</option>
                  </NativeSelect>
                </FormControl>
              </ExtraSelectBox>
              <ExtraSelectBox>
                <FormControl>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    연령대
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "age",
                      id: "age-native",
                    }}
                  >
                    <option value={20}>20대</option>
                    <option value={30}>30대</option>
                    <option value={40}>40대</option>
                    <option value={50}>50대</option>
                    <option value={60}>60대</option>
                    <option value={70}>70대이상</option>
                  </NativeSelect>
                </FormControl>
              </ExtraSelectBox>
              <ExtraSelectBox>
                <FormControl>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    투자경험
                  </InputLabel>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "know",
                      id: "know-native",
                    }}
                  >
                    <option value={0}>파악안됨</option>
                    <option value={1}>경험없음</option>
                    <option value={2}>경험있음</option>
                    <option value={3}>전문가수준</option>
                    <option value={4}>업자</option>
                  </NativeSelect>
                </FormControl>
              </ExtraSelectBox>
            </Stack>
            <Stack justifyContent="center" alignItems="center" width="100%">
              <TextField size="small" label="이름" sx={{ width: "90%" }} />
            </Stack>
          </ExtraWrapper>
        </Grid>
        <Grid item xs={4}>
          <MemoWrapper>
            <Stack
              justifyContent="center"
              alignItems="center"
              width="100%"
              sx={{ mt: 2 }}
            >
              <MemoRatingBox>
                <MemoRatingTitle>중요도</MemoRatingTitle>
                <MemoRating>
                  <Rating />
                </MemoRating>
              </MemoRatingBox>
              <MemoTextBox>
                <TextField
                  size="small"
                  label="메모"
                  multiline
                  minRows={3}
                  maxRows={3}
                  sx={{ width: "70%", mb: 1.5 }}
                />
                <Button
                  variant="outlined"
                  sx={{ width: "50px", height: "86px", mb: 1.5, ml: 1 }}
                >
                  작성
                </Button>
              </MemoTextBox>
            </Stack>
          </MemoWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default View;
