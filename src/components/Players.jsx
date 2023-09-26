import React from 'react';
import { Link } from 'react-router-dom';

import { Players } from '../shared/ListOfPlayers';

export default function Player() {
  return (
    <div className="container">
      {Players.map((player) => (
        <div className="column" key={player.id}>
          <div className="card">
            <img src={player.img} alt="" />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <Link to={`detail/${player.id}`}>
              <p>
                <button>Detail</button>
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
