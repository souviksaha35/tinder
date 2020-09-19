import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@material-ui/core';

export default function TinderCards() {
  const [people, setPeople] = useState([
      {
          name: 'Elon Musk',
          url: "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
      },
      {
        name: 'Jeff Bezos',
        url: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"
      }
  ]);

  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete)
  }

  const outOfFrame = (name) => {

  }
  return (
    <div className="tinder_clone">
        <div className="tinderCards_cardContainer">
            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                        <h3>
                            {person.name}
                        </h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  );
}