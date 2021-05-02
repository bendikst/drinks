import uuid from 'uuid';

export interface Credentials {
    username: string;
    password: string;
}

interface LoginApiResponse {
    created: string;
    id: string;
    token: string;
    username: string;
}

export const onLogin = async (data: Credentials) => {
    // Method for contacting backend here
    if (data.username === "admin" && data.password === "1234") {
        const t = uuid.v4();
        console.log("Token:", t)
        storeToken(t);
        return true;
    }
    return false;
}

export const TOKEN_KEY_TEST = "test_token_key";

const storeToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY_TEST, token);
}