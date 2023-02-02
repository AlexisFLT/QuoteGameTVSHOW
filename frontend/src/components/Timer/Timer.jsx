import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default function Timer({ handleStart }) {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div className="timer">{seconds}</div>
      <button
        className="starTimerButton"
        type="button"
        onClick={() => {
          handleStart();
          toggle();
        }}
      >
        {isActive ? null : "Démarrer"}
      </button>
    </div>
  );
}

Timer.propTypes = {
  handleStart: PropTypes.func.isRequired,
};
