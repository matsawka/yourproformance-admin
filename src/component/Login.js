import React from 'react';
import Auth from '../auth/Auth.js';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        const auth = new Auth();
        auth.login(); 

    }

render() {
    return (
        <div> 
        </div>
  );
}
}