import { useEffect, useState } from "react";
import "./style.scss";

export default function Timer() {
  const [seconds, setSeconds] = useState(10);
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
      <button className="starTimerButton" type="button" onClick={toggle}>
        {isActive ? "Pause" : "Démarrer"}
      </button>
    </div>
  );
}
