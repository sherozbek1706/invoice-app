import "./config-button.css";
export const ConfigButton = ({ textColor, color, text, type }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={"config-button " + textColor + " " + color}
    >
      {text}
    </button>
  );
};
