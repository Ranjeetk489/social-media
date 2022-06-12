import axios from 'axios';

const API_URL = 'http://localhost:4000/graphql';

function signin(email, password) {
    return axios.post(API_URL, {