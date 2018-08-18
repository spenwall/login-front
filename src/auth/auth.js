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

// import auth0 from 'auth0-js';

// export default class Auth {
//   constructor() {
//     this.auth0 = new auth0.WebAuth({
//       // the following three lines MUST be updated
//       domain: '<AUTH0_DOMAIN>',
//       audience: 'https://<AUTH0_DOMAIN>/userinfo',
//       clientID: '<AUTH0_CLIENT_ID>',
//       redirectUri: 'http://localhost:3000/callback',
//       responseType: 'token id_token',
//       scope: 'openid profile'
//     });

//     this.getProfile = this.getProfile.bind(this);
//     this.handleAuthentication = this.handleAuthentication.bind(this);
//     this.isAuthenticated = this.isAuthenticated.bind(this);
//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//     this.setSession = this.setSession.bind(this);
//   }

//   getProfile() {
//     return this.profile;
//   }

//   handleAuthentication() {
//     return new Promise((resolve, reject) => {
//       this.auth0.parseHash((err, authResult) => {
//         if (err) return reject(err);
//         console.log(authResult);
//         if (!authResult || !authResult.idToken) {
//           return reject(err);
//         }
//         this.setSession(authResult);
//         resolve();
//       });
//     })
//   }

//   isAuthenticated() {
//     return new Date().getTime() < this.expiresAt;
//   }

//   login() {
//     this.auth0.authorize();
//   }

//   logout() {
//     // clear id token and expiration
//     this.idToken = null;
//     this.expiresAt = null;
//   }

//   setSession(authResult) {
//     this.idToken = authResult.idToken;
//     this.profile = authResult.idTokenPayload;
//     // set the time that the id token will expire at
//     this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
//   }
// }