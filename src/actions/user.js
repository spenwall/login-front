import axios from 'axios';

export function user(response) {
    console.log(response);
    const header = {
        'Accept': 'application/json',
        'Authorization': response.data.token_type + ' ' + response.data.access_token
    }
    console.log(header);
    return axios.get('http://192.168.10.20/api/user', {headers: header})
}