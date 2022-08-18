import React from "react";
import { useState } from "react";
import Buttons from "./Buttons";
import Grid from "./Grid";

function Board() {
  const [gridSize, setGridSize] = useState(16);
  const [newColor, setNewColor] = useState("");
  const [clear, setClear] = useState(false);

  const resetGrid = () => {
    let defaultGridSize = prompt("Input a number in 16-100 range!");

    if (defaultGridSize !== null) {
      defaultGridSize = parseInt(defaultGridSize);
      if (
        defaultGridSize < 16 ||
        defaultGridSize > 100 ||
        Number.isNaN(defaultGridSize)
      ) {
        alert("Input a number in 16-100 range!");
      } else {
        setGridSize(defaultGridSize);
        setNewColor("white");
      }
    }
  };

  const useBlack = () => {
    setNewColor("black");
  };

  const useRandomColor = () => {
    setNewColor("blue");
  };

  const clearGrid = () => {
    setClear(!clear);
    setNewColor("white");
  };

  return (
    <div>
      <Buttons
        useBlack={useBlack}
        resetGrid={resetGrid}
        useRandomColor={useRandomColor}
        clearGrid={clearGrid}
      />
      <div>
        <Grid gridSize={gridSize} newColor={newColor} clear={clear} />
      </div>
    </div>
  );
}

export default Board;
