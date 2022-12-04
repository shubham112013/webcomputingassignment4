import React, { Component } from 'react';
import Khan from '../components/Posts/post3.jpg';



class Postpage3 extends Component {
  render() {
    return (
        <div className="main">

        <div>
            <h1>
                KHAN
            </h1>
            <p>2013-10-17</p>
            <div>
                <img className="blogimg" src={Khan} alt='Khan' />
                <p>Kim "Hanlabong" Dong-ha</p>
            </div>
            <div>Kim "Hanlabong" Dong-ha joined Prime Optimus as a top laner in October of 2013. Prime Optimus competed in HOT6iX Champions Spring 2014 where they upset SK Telecom T1 S in the group stage but they still missed the playoffs. Hanlabong left Prime in July to join Team WE Academy under the name Khan. Team WE Academy competed in 2014 LPL Summer but they placed last in the regular season with a 2-5-7 record. Soon after they played in the Season 1 X Championship where they made it to the quarterfinals but lost 2-0 to Star Horn Royal Club.</div>
        </div>

    </div>
    );
  }  
}

export default Postpage3;
