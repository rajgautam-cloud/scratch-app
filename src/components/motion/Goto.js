import React, { useState } from "react";
import { connect } from "react-redux";

const GotoXY = ({ character, comp_id }) => {
  const [state, setState] = useState({
    goto_x: 0,
    goto_y: 0,
  });

  // go to posiiton X and Y
  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    el.style.position = "relative";
    el.style.left = state.goto_x + "px";
    el.style.top = state.goto_y + "px";
  };
  return (
    <div
      id={comp_id}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-1 py-1 my-2 text-sm cursor-pointer text-center"
      onClick={() => gotoXY()}
    >
      Go to X :{" "}
      <input
        className="text-black text-center w-10 mx-1 remove-arrow outline-none outline-none"
        type="number"
        value={state.goto_x}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
            setState({ ...state, goto_x: parseInt(e.target.value) });
        }}
      />{" "}
      Y :{" "}
      <input
        className="text-black text-center w-10 mx-1 remove-arrow outline-none outline-none"
        type="number"
        value={state.goto_y}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
            setState({ ...state, goto_y: parseInt(e.target.value) });
        }}
      />
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(GotoXY);
