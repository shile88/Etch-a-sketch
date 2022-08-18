import { useEffect, useState, useRef } from "react";
import Square from "./Square";

function Grid(props) {
  const boardRef = useRef(null);

  useEffect(() => {
    boardRef.current.style.setProperty("--grid-size", props.gridSize);
    createSquares("white");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gridSize]);

  useEffect(() => {
    createSquares();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.newColor]);

  const [squares, setSquares] = useState();

  const createSquares = (color = "") => {
    let divs = [];
    let tmpColor = color === "" ? props.newColor : color;

    for (let i = 0; i < props.gridSize * props.gridSize; i++) {
      divs.push(<Square color={tmpColor} key={i} gridSize={props.gridSize} clear={props.clear}/>);
    }
    setSquares(divs);
  };

  return (
    <div ref={boardRef} className="board">
      {squares}
    </div>
  );
}

export default Grid;
