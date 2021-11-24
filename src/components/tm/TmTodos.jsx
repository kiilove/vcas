import React from "react";
import styled from "styled-components";
import { Button, IconButton, Rating, Stack, TextField } from "@mui/material";
import { blueGrey, grey, pink, red } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const TodosWrapper = styled.div`
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

const TodosActionBox = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TodosItemBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const TodosItemsWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin: 3px;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const TodosItemLeftIcon = styled.span`
  display: flex;
  flex: 1;
  height: 30px;
  align-items: center;
  justify-content: center;
  color: ${red[300]};
`;

const TodosItemRightIcon = styled.span`
  display: flex;
  flex: 1;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const TodosItemText = styled.span`
  display: flex;
  flex: 8;
  height: 30px;
  font-size: 16px;
  align-items: center;
  justify-content: flex-start;
  color: ${blueGrey[800]};
`;
const dummyTodos = [
  { id: 1, content: "밥하기", isEnd: false },
  { id: 2, content: "청소하기", isEnd: false },
  { id: 3, content: "술먹기", isEnd: false },
  { id: 4, content: "화장실 청소하기", isEnd: true },
  { id: 5, content: "미팅장소 섭외하기", isEnd: false },
];
const TmTodos = () => {
  return (
    <TodosWrapper>
      <Stack px={3} py={1} spacing={2}>
        <TodosActionBox>
          <TextField
            variant="standard"
            label="할일 추가"
            size="small"
            sx={{ width: "90%" }}
          />
          <IconButton
            component="span"
            style={{ fontSize: 20, marginTop: 20, color: grey[500] }}
          >
            <FontAwesomeIcon icon={faPencilAlt} />
          </IconButton>
        </TodosActionBox>
        <TodosItemBox>
          {dummyTodos.map((item) => (
            <TodosItemsWrapper>
              <TodosItemLeftIcon>
                {item.isEnd ? (
                  <IconButton
                    component="span"
                    style={{ fontSize: 18, color: blueGrey[500] }}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </IconButton>
                ) : (
                  <IconButton
                    component="span"
                    style={{ fontSize: 18, color: pink[500] }}
                  >
                    <FontAwesomeIcon icon={faCircle} />
                  </IconButton>
                )}
              </TodosItemLeftIcon>
              {item.isEnd ? (
                <TodosItemText
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  {item.content}
                </TodosItemText>
              ) : (
                <TodosItemText>{item.content}</TodosItemText>
              )}

              <TodosItemRightIcon>
                <IconButton
                  component="span"
                  style={{ fontSize: 15, color: grey[500] }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </IconButton>
              </TodosItemRightIcon>
            </TodosItemsWrapper>
          ))}
        </TodosItemBox>
      </Stack>
    </TodosWrapper>
  );
};

export default TmTodos;
