import React, { Component } from 'react';
import Khan from './post3.jpg';
import {Link} from 'react-router-dom';


class Post3 extends Component {
  render() {
    return (
    <div>
        <h1><Link to="/post3">Khan</Link></h1>
        <p>2013-10-17</p>
        <img className='img' src={Khan} alt='Khan' />
        <p>Kim "Hanlabong" Dong-ha</p>
       </div>
    );
  }  
}

export default Post3;
