import { useState } from "react";
import "./Color.css";

export default function Color({ color }) {
  const [isConfirming, setIsConfirming] = useState(false);

  function handleDelete() {
    setIsConfirming(true);
  }

  function cancelDelete() {
    setIsConfirming(false);
  }

  function confirmDelete() {
    onDeleteColor(color.id);
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
          <button className="color-delete" onClick={cancelDelete}>
            Cancel
          </button>
          <button className="color-delete" onClick={confirmDelete}>
            Delete
          </button>
        </>
      ) : (
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
}
