import React, { useState } from "react";
import { connect } from "react-redux";

// Move Component for Sidebar
const MoveY = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(0);

  // Function used for moiving Sprint in Y direction
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    var top = el.offsetTop;
    el.style.position = "relative";
    el.style.top = top + steps + "px";
  };

  return (
    <div
      id={comp_id}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => handleClick()}
    >
      Move Y{" "}
      <input
        type="number"
        className="text-black text-center w-10 mx-2 remove-arrow outline-none outline-none"
        value={steps}
        onChange={(e) => setSteps(parseInt(e.target.value))}
      />{" "}
      steps
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(MoveY);
