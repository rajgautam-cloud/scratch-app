import React, { useState } from "react";
import { connect } from "react-redux";
import { setRepeat } from "../../redux/events/eventActions";

const Repeat = ({ comp_id, events, set_repeat }) => {
  const [repeat, setStateRepeat] = useState(0);

  // Set Repeat value for current component
  function handleChange(e) {
    let val = parseInt(e.target.value);
    setStateRepeat(val);
    let curr = events.repeat;
    curr[comp_id] = val;
    set_repeat(curr);
  }
  return (
    // Repeat Component

    <div
      id={comp_id}
      className="flex text-center flex-row flex-wrap bg-red-500 text-white px-1 py-1 my-2 text-sm cursor-pointer"
    >
      Repeat By{" "}
      <input
        className="w-10 outline-none mx-1 p-1 py-0 text-center text-black remove-arrow"
        type="number"
        value={repeat}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      times
    </div>
  );
};

// map state to component
const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

// map function to component
const mapDispatchToProps = (dispatch) => {
  return {
    set_repeat: (value) => dispatch(setRepeat(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repeat);
