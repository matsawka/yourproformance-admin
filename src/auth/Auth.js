// src/auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
  //local project
  auth0 = new auth0.WebAuth({
    //initialize here
  });

  login() {
    this.auth0.authorize();
  }
}