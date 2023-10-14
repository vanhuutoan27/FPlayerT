/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../shared/ListOfPlayers';
import { Modal, Button, Icon } from 'react-materialize';

import ModalCase from '../components/ModalCase';

function DetailPlayer() {
  const { id } = useParams();
  const player = data.find((obj) => obj.id === id);
  let cost = player.cost.toLocaleString();

  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="product-card">
        <div className="product-header">
          <div className="badge">{player.name}</div>
          <div className="product-thumb">
            <img src={`../${player.img}`} alt="" />
          </div>
          {/* Video icon */}
          <a onClick={openModal} className="btn-floating halfway-fab waves-effect waves-light red">
            <Icon>ondemand_video</Icon>
          </a>
        </div>
        <div className="product-details">
          <h4>{player.club}</h4>
          <div className="product-price">Market value: € {cost}</div>
          <p>{player.info}</p>
        </div>
      </div>

      {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
    </div>
  );
}

export default DetailPlayer;
