import axios from 'axios';

export function login(data) {
    const accessData = {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'WbnTIzMtpAK4xsYtg9Kmt9sgmdd94tkg7o85jQWA',
        username: 'spencer@wallace.com',
        password: 'password',
        scope: '',
    }
    const requestData = Object.assign(data, accessData);

    console.log(requestData);
    return axios.post('http://192.168.10.20/oauth/token', requestData);
}