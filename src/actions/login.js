import axios from 'axios';

export function auth(data) {
    const accessData = {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'fxBmSbHWwSAetStRnmKAgCIpPWGefttWOWOTi0UB',
        scope: '',
    }
    const requestData = Object.assign(data, accessData);

    return axios.post('http://192.168.10.20/oauth/token', requestData).then(
        (response) => {
            const header = {
                'Accept': 'application/json',
                'Authorization': response.data.token_type + ' ' + response.data.access_token
            }
            return axios.get('http://192.168.10.20/api/user', {headers: header})
        }
    );
}
