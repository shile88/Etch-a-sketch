function Buttons({ resetGrid, useBlack, useRandomColor, clearGrid }) {
  return (
    <div className="buttons">
      <button
        id="btn"
        type="button"
        className="btn btn-warning btn-lg"
        onClick={resetGrid}
      >
        Reset Board
      </button>
      <button
        id="btn"
        type="button"
        className="btn btn-dark btn-lg"
        onClick={useBlack}
      >
        Black
      </button>
      <button
        id="btn"
        type="button"
        className="btn btn-danger btn-lg"
        onClick={useRandomColor}
      >
        Random Color
      </button>
      <button
        id="btn"
        type="button"
        className="btn btn-light btn-lg"
        onClick={clearGrid}
      >
        Clear Board
      </button>
    </div>
  );
}

export default Buttons;
