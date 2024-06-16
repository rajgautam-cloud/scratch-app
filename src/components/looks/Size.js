import React, { useState } from "react";
import { connect } from "react-redux";

const Size = ({ character, comp_id }) => {
  const [state, setState] = useState({
    scale: 1,
  });
  // To change Size of Sprint
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`;
  };

  return (
    <div
      id={comp_id}
      className="flex text-center flex-row flex-wrap bg-purple-500 text-white px-1 py-1 my-2 text-sm cursor-pointer"
      onClick={() => changeSize()}
    >
      Size{" "}
      <input
        className="w-10 outline-none mx-1 p-1 py-0 text-center text-black remove-arrow"
        value={state.scale}
        onChange={(e) =>
          setState({ ...state, scale: parseInt(e.target.value) })
        }
      />
      x times
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Size);
