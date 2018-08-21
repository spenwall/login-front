import axios from 'axios';

class Auth {
    
    login = (data) => {
        const accessData = {
            grant_type: 'password',
            client_id: 2,
            client_secret: 'fxBmSbHWwSAetStRnmKAgCIpPWGefttWOWOTi0UB',
            scope: '',
        }
        const requestData = Object.assign(data, accessData);
        //login
        console.log('the login method in auth');
        return axios.post('http://192.168.10.20/oauth/token', requestData).then(
          (response) => { 
            this.handleAuthentication(response);
            return response;
          },
        )
    }

    logout = () => {
        console.log('logout');
        localStorage.removeItem('access_token');
    }

    handleAuthentication = (results) => {
        console.log('handleAuthentication', results);
        this.setSession(results);
    }
    setSession = (authResults) => {
        console.log('set session', authResults);
        localStorage.setItem('access_token', authResults.data.access_token);
    }

    isAuthenticated = () => {
        console.log('isAuthenticated');
        return localStorage.getItem('access_token');
    }

    loggedIn = () => {
        console.log('loggedIn');
        var accessToken = localStorage.getItem('access_token');
        console.log(accessToken !== null); 
        return accessToken !== null;
    }
}

export default Auth;

