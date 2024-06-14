//Acceptance Criteria

// [] Users can input a role, hex value, and contrast text via a form to add a new color to
// the theme.
// [] The form should be prefilled with default values to guide user input.
// [] Upon submission, the new color is added to the top of the colors and is displayed on
// a color card to confirm addition.
// [] The inputs for hex and contrastText should include both color and text input types
// for easy and accurate color selection.

// Tasks

// [] Implement a ColorForm component that allows users to submit new colors to the theme.
// [] Use a package to generate unique id's like nanoid or ui
// [] Develop a ColorInput component to handle synchronized text and color inputs,
// ensuring that they reflect the same value. ( Controlled Inputs )
import ColorInput from "../ColorInput/ColorInput";
import "../Color/Color.jsx";
import "../ColorForm/ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
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
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
