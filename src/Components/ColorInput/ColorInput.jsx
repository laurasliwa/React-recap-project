import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);
  console.log(inputValue);
  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
