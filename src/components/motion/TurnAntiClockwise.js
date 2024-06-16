import React, { useState } from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/character/actions";
import UndoIcon from "@material-ui/icons/Undo";

const TurnAntiClockWise = ({ character, characterAngle, comp_id }) => {
  const [angle, setAngle] = useState(0);

  // handle anti-clockwise rotation
  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
      characterAngle(character_angle.angle + anti_angle);
    }
  };

  return (
    <div
      id={comp_id}
      className="flex flex-row flex-wrap bg-yellow-500 text-white px-1 py-1 my-2 text-sm cursor-pointer text-center"
      onClick={() => handleClick()}
    >
      Turn
      <UndoIcon className="mx-1" />
      by
      <input
        className="text-black text-center w-10 mx-1 remove-arrow outline-none"
        type="number"
        value={angle}
        onChange={(e) => {
          setAngle(parseInt(e.target.value));
        }}
      />
      degrees
    </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

// mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockWise);
