import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Homepagelink extends Component {
  render() {
    return (

       <div>
            <Link to="/">Go to Homepage</Link>
        </div>

    );
  }  
}

export default Homepagelink;
