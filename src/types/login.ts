
export interface LoginProps {
    onSubmit: (username: string, password: string) => void;
}

export type LoginState = {
    username: string;
    password: string;
}
export type LoginErrors = {
    username: { isValid: boolean, message: string };
    password: { isValid: boolean, message: string };
}