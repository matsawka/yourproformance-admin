// src/auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  //local project
  auth0 = new auth0.WebAuth({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    redirectUri: process.env.REDIRECTURI,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}