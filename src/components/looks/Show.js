import React from "react";
import { connect } from "react-redux";

const Show = ({ character, comp_id }) => {
  // To handle show component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    el.style.display = "inline-block";
  };

  return (
    <div
      id={comp_id}
      className="rounded text-center bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
      onClick={() => handleDisplay()}
    >
      Show
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Show);
