import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm.jsx";
import ColorInput from "../ColorInput/ColorInput.jsx";

export default function Color({ color, onDeleteColor }) {
  const [isConfirming, setIsConfirming] = useState(false);

  function handleConfirmMessage() {
    setIsConfirming(!isConfirming);
  }

  function confirmDelete(id) {
    onDeleteColor(id);
  }

  function ColorForm({
    onSubmitColor,
    initialData = {
      role: "some color",
      hex: "#123456",
      contrastText: "#ffffff",
    },
  }) {
    function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      onSubmitColor(data);
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
        {isConfirming ? (
          <>
            <form className="color-card-highlight" onSubmit={handleSubmit}>
              <label htmlFor="role">
                Role
                <br />
                <input
                  type="text"
                  id="role"
                  name="role"
                  defaultValue={initialData.role}
                />
              </label>
            </form>
            <button className="color-edit" onClick={handleConfirmMessage}>
              Cancel
            </button>
            {/* erst wenn der button wech damit geklickt wird, soll die funktion ausgeführt werden */}
            <button
              className="color-edit"
              onClick={() => {
                confirmDelete(color.id);
              }}
            >
              Mach ma
            </button>
          </>
        ) : (
          <button onClick={handleConfirmMessage}>Edit</button>
        )}
      </div>
    );
  }
}
