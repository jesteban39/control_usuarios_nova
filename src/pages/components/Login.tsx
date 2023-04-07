import { useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";


interface Event {
    preventDefault: Function;
}

const StyledForm = styled(Box)`
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

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

interface LoginProps {
    onSubmit: (username: string, password: string) => void;
}

export default function Login({ onSubmit }: LoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        onSubmit(username, password);
    };

    return (
        <StyledForm component="form" onSubmit={handleSubmit}>
            <StyledTextField
                label="Nombre de usuario"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <StyledTextField
                label="Contraseña"
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <StyledButton
                variant="contained"
                type="submit"
                disabled={!username || !password}
            >
                Iniciar sesión
            </StyledButton>
        </StyledForm>
    );
}