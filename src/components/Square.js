import { useState, useEffect } from "react";

function Square(props) {
  const [color, setColor] = useState("");

  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    setColor("white");
  }, [props.gridSize, props.clear]);

  const colorCheck = () => {
    if (props.color === "blue") {
      setColor(randomColor);
    } else {
      setColor(props.color);
    }
  };

  return (
    <div
      className="square"
      style={{ backgroundColor: color }}
      onMouseEnter={colorCheck}
    ></div>
  );
}

export default Square;
