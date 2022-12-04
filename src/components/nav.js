import React, { Component } from 'react';
import Homepagelink from './homepagelink'
import Apipage from './NewsApi';

class Nav extends Component {
  render() {
    return (

       <div className="link">

            <Homepagelink />

            <Apipage />

        </div>

    );
  }  
}

export default Nav;
