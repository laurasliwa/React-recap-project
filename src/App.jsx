import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "../src/Components/ColorForm/ColorForm.jsx";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);
  console.log("allColors", colors);
  function handleAddColor(newColor) {
    setColors([{ ...newColor, id: nanoid() }, ...colors]);
  }

  function handleDeleteColor(id) {
    console.log("Ich bin die Funktion in der App.js", id);
    // state updaten https://github.com/neuefische/hh-web-24-3/blob/main/sessions/react-state-3/react-state-3.md#removing-from-an-array
    setColors(colors.filter((color) => color !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
          />
        );
      })}
    </>
  );
}

export default App;
