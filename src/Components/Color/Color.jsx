import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [isConfirming, setIsConfirming] = useState(false);

  function handleConfirmMessage() {
    setIsConfirming(!isConfirming);
  }

  function confirmDelete(id) {
    onDeleteColor(id);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {isConfirming ? (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button className="color-delete" onClick={handleConfirmMessage}>
            Cancel
          </button>
          {/* erst wenn der button wech damit geklickt wird, soll die funktion ausgeführt werden */}
          <button
            className="color-delete"
            onClick={() => {
              confirmDelete(color.id);
            }}
          >
            Wech damit
          </button>
        </>
      ) : (
        <button onClick={handleConfirmMessage}>Delete</button>
      )}
    </div>
  );
}
