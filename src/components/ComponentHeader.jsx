import { blueGrey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
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
const ComponentHeader = (props) => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderTitle>{props.title}</HeaderTitle>
        <HeaderMenu></HeaderMenu>
      </HeaderWrapper>
    </div>
  );
};

export default ComponentHeader;
