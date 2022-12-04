import React, { Component } from 'react';
import Faker from './post1.jpg';
import {Link} from 'react-router-dom';



class Post1 extends Component {
  render() {
    return (
    <div >
        <h1>
            <Link to="/post1">Faker</Link>
        </h1>
        <p >1996-05-07</p>
        <img className='img' src={Faker} alt='Faker' />
        <p>Lee Sang-hyeok</p>
    </div>
    );
  }  
}

export default Post1;
