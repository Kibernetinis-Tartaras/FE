import axios from 'axios';

const getCustomHttp = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:7112/api'
    });
    return instance;
};

export default getCustomHttp;