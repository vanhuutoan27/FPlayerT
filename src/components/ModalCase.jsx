import React from 'react';

function ModalCase({ setIsOpen, player }) {
  return (
    <div className="modal-show" onClick={() => setIsOpen(false)}>
      <div id="modal1" className="modal" style={{ display: 'block', top: '35%' }}>
        <div className="modal-content">
          <h4>Video for {player.name} </h4>
          <p>
            <iframe
              width="100%"
              height="400px"
              src={player.clip}
              title={player.name}
              framborder="0"
              allow="accelerometer; autoplay; clipboard-write; entrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </p>
        </div>
        <div className="modal-footer">
          <a href="" className="modal-close red-text">
            Close
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalCase;
