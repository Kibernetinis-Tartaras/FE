import getCustomHttp from "../CustomHooks/useCustomHttp";

const http = getCustomHttp();

export async function getOverview() {
    const response = await http.get('/overview');
    return response.data;
}

export async function getChallenges() {
    const response = await http.get('/challenges');
    return response.data;
}

export async function joinChallenge(id: number) {
    const response = await http.post(`/challenge/${id}`);
    return response.data;
}