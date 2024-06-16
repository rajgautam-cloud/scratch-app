import React from "react";
import { connect } from "react-redux";

const Hide = ({ character, comp_id }) => {
  // To handle hide component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "none";
  };
  return (
    <div
      id={comp_id}
      className="text-center rounded bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
      onClick={() => handleDisplay()}
    >
      Hide
    </div>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Hide);
