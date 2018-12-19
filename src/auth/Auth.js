// src/auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  //local project
  auth0 = new auth0.WebAuth({
    clientID: process.env.clientID,
    redirectUri: process.env.APIKEY.redirectUri,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}