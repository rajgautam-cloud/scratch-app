import React from "react";
import { connect } from "react-redux";

const HideMessage = ({ character, comp_id }) => {
  /* Hide Message */
  const displayMessage = () => {
    window.clearTimeout();
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el.style.display = "none";
    el2.style.display = "none";
  };

  return (
    <div
      id={comp_id}
      onClick={() => displayMessage()}
      className=" text-center bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
    >
      Hide Message
    </div>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideMessage);
