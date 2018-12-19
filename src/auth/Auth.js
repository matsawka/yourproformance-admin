// src/auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  //local project
  auth0 = new auth0.WebAuth({
    domain: 'yourproformance-admin.auth0.com',
    clientID: 'T95LPq0egWc2beLSlMTBvROCP_Z8PWz0',
    redirectUri: 'https://yourproformance-admin.herokuapp.com/home',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}