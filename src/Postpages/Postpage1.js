import React, { Component } from 'react';
import Faker from '../components/Posts/post1.jpg';



class Postpage1 extends Component {
  render() {
    return (
      <div className="main">

      <div>
          <h1>
          Faker
          </h1>
          <p>1996-05-07</p>
          <div>
              <img className="blogimg" src={ Faker } alt='DK Metcalf'/>
              <p>Lee Sang-hyeok</p>
          </div>
          <div>Lee Sang-hyeok (born May 7, 1996), better known as Faker, is a South Korean professional League of Legends player for T1. Formerly known as GoJeonPa on the Korean server, he was picked up by T1, then called SK Telecom T1, in 2013 and has played as the team's mid-laner since. He is widely considered to be the best League of Legends player of all time.</div>
      </div>

  </div>
    );
  }  
}

export default Postpage1;
