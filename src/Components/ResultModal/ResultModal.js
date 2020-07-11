import React from "react";

import "./result-modal.scss";

function ResultModal({ show, message, restartGame }) {
  if (show) {
    return (
      <div className="result-message">
        <p>{message}</p>
        <button className="restart-button" onClick={restartGame}>
          Restart
        </button>
      </div>
    );
  } else return null;
}

export default ResultModal;
