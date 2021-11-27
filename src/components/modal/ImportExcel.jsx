import styled from "styled-components";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { Button } from "@mui/material";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 200px;
  background-color: white;
  border: 1px solid #000;
  box-shadow: 24px;
  padding: 10px;
`;

const ImportExcel = () => {
  const [items, setItems] = useState([]);
  const readExcel = async (file) => {
    try {
      const fileReader = await new FileReader();
      await fileReader.readAsArrayBuffer(file);

      fileReader.onload = async (e) => {
        const buggerArray = await e.target.result;

        const wb = await XLSX.read(buggerArray, { type: "buffer" });
        const wsname = await wb.SheetNames[0];
        const ws = await wb.Sheets[wsname];
        const data = await XLSX.utils.sheet_to_json(ws);
        console.log(JSON.stringify(data));
        await setItems(JSON.stringify(data));
      };
    } catch (error) {
      console.error({ 읽기에러: error });
    }
  };

  const postData = async () => {
    const header = { "Content-type": "application/json" };
    try {
      await axios({
        method: "post",
        url: "http://localhost:7733/api/client/register/excel",
        headers: header,
        data: JSON.stringify(setItems),
      });
    } catch (error) {
      alert("저장 실패!(서버 연결을 확인하세요.)");
    }
  };
  return (
    <Container>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <Button variant="outlined" size="small" onClick={postData}>
        전송
      </Button>
    </Container>
  );
};

export default ImportExcel;
