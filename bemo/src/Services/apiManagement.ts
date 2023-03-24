import getCustomHttp from "../CustomHooks/useCustomHttp";
import { LoginProps } from "../Dto/LoginProps";
import { SignupProps }from "../Dto/SignupProps";
import { OverviewProps } from "../Dto/OverviewProps";
import { ChallengeProps } from "../Dto/ChallengeProps";

const http = getCustomHttp();

export async function login(loginProps: LoginProps) {
    const response = await http.post('/auth/login', loginProps);
    return response.data;
}

export async function register(signupProps: SignupProps) {
    const response = await http.post('/auth/register', signupProps);
    return response.data;
}

export async function getOverview() {
    const response = await http.get('/overview');
    return response.data;
}

export async function getChallenges() {
    const response = await http.get('/challenges');
    return response.data;
}