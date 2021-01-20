import axios from 'axios';
import getAuthorizationHeader from './auth-header';

const API_URL = 'http://localhost:8082/api/test/';

const getPublicContent = () => {
    return axios.get(API_URL + 'public')
};

const getUserBoard = () => {
    return axios.get(API_URL + 'user', {headers: getAuthorizationHeader()})
};

const getModeratorBoard = () => {
    return axios.get(API_URL + 'mod', {headers: getAuthorizationHeader()})
};

const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', {headers: getAuthorizationHeader()})
};

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
}
