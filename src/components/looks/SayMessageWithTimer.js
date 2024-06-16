import React, { useState } from "react";
import { connect } from "react-redux";

const SayMessageWithTimer = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  /* Display Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el2.style.display = "none";
    if (state.show_msg) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });

    el.style.display = "block";
    el.style.position = "relative";

    el.innerHTML = state.timer_message;
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <div
      id={comp_id}
      className="flex text-center flex-row flex-wrap bg-purple-500 text-white px-1 py-1 my-2 text-sm cursor-pointer"
      onClick={() => displayMessage()}
    >
      Say{" "}
      <input
        className="w-20 outline-none mx-2 p-1 py-0 text-center text-black"
        type="text"
        value={state.timer_message}
        onChange={(e) => {
          e.target.value.length > 0 &&
            setState({ ...state, timer_message: e.target.value });
        }}
      />{" "}
      for
      <input
        className="w-10 outline-none mx-1 p-1 py-0 text-center text-black remove-arrow"
        type="number"
        value={state.timer_for_msg}
        onChange={(e) => {
          parseInt(e.target.value) > 0 &&
            setState({ ...state, timer_for_msg: parseInt(e.target.value) });
        }}
      />
      seconds
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(SayMessageWithTimer);
