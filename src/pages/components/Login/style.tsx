
import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";


export const SForm = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: auto;
  margin-top: 10px;
  padding: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const STextField = styled(TextField)`
  width: 100%;
`;

export const SButton = styled(Button)`
  margin-top: 20px;
`;
