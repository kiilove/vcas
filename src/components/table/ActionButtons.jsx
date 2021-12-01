import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ImportExcel from "../modal/ImportExcel";

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ActionButtons = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ButtonWrapper>
      <Button variant="contained" color="success" disableElevation size="small">
        새로고침
      </Button>
      <Button
        variant="contained"
        disableElevation
        size="small"
        value="unit"
        sx={{ ml: 1 }}
      >
        건별등록
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        size="small"
        value="multi"
        sx={{ ml: 1 }}
        onClick={handleOpen}
      >
        엑셀등록
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ImportExcel handleClose={handleClose} />
      </Modal>
    </ButtonWrapper>
  );
};

export default ActionButtons;
