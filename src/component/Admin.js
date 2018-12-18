import React from 'react';
import Search from './Search';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        currentData: [],
        uniqueId: ''
      };
    }
    
    render() {
        return (
            <div>
              <Search/>
        </div>
      );
    }
   }