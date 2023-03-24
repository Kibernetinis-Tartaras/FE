import axios from "axios";
import getCustomHttp from "../CustomHooks/useCustomHttp";
import useCustomHtpp from "../CustomHooks/useCustomHttp";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

type CreateUser = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
};

export const getParamValues = (url: string) => {
    return url
        .slice(1)
        .split("&")
        .reduce((prev: { [key: string]: string }, curr) => {
            const [title, value] = curr.split("=");
            prev[title] = value;
            return prev;
        }, {});
};

export const cleanUpAuthToken = (str: string) => {
    return str.split("&")[1].slice(5);
};

export const testAuthGetter = async (authTok:string) => {
    try {
        const response = await axios.post(
            `https://www.strava.com/api/v3/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authTok}&grant_type=authorization_code`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserData = async (userID:string, accessToken: string) => {
    try {
        const response = await axios.get(
            `https://www.strava.com/api/v3/athletes/${userID}/stats`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (userID: string) => {
    try {
        const httpClient = getCustomHttp();

        const response = await httpClient.get(
            `/user/${userID}`
        );

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (userData: CreateUser) => {
    try {
        const httpClient = getCustomHttp();

        const response = await httpClient.post(
            `/user/register`,
            userData
        );

        return response;
    } catch (error) {
        console.log(error);
    }
}