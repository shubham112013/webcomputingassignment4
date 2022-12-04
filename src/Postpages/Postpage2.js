import React, { Component } from 'react';
import CAPS from '../components/Posts/post2.jpg';



class Postpage2 extends Component {
  render() {
    return (
        <div className="main">

        <div>
            <h1>
                CAPS
            </h1>
            <p>1999-11-17</p>
            <div>
                <img className="blogimg" src={CAPS} alt='Rasmus Winther' />
                <p>Rasmus Borregaard Winther</p>
            </div>
            <div>Rasmus Borregaard Winther (born 17 November 1999), better known as Caps, is a Danish League of Legends player for G2 Esports. During the 2018 EU LCS Season, Caps managed to win both the Spring and Summer Split with his then team, Fnatic.
       At the 2018 World Championship, Fnatic was seeded into Group D alongside 100 Thieves, Invictus Gaming, and G-Rex. They picked up five wins in the group, allowing them to advance into the knockout stage of the tournament. In the quarterfinals, Fnatic defeated EDward Gaming by 3–1. Caps's performance on Azir and LeBlanc helped Fnatic win the semifinals against Cloud9 without losing a single game.
       After this, they were swept 3–0 in the world final by their group rival Invictus Gaming.</div>
        </div>

    </div>
    );
  }  
}

export default Postpage2;
