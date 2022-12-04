import React, { Component } from 'react';
import CAPS from './post2.jpg';
import {Link} from 'react-router-dom';


class Post2 extends Component {
  render() {
    return (
        <div>
        <h1><Link to="/post2">Caps</Link></h1>
        <p>1999-11-17</p>
        <img className='img' src={CAPS} alt='Rasmus'/>
        <p>Rasmus Borregaard Winther</p>
        </div>
    );
  }  
}

export default Post2;
