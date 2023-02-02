import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.scss";
import axios from "axios";

export default function Timer({ handleStart }) {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
      .then(({ data }) => {
        setScore(data.score);
      });
  }, []);

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

  const timerOut = () => {
    Swal.fire({
      title: "Time Out !",
      text: `Your score: ${score}`,
      icon: "success",
    });
    navigate("/players");
  };

  return (
    <div>
      <button
        className="starTimerButton pulse"
        type="button"
        onClick={() => {
          handleStart();
          toggle();
        }}
      >
        <p className="startText">
          {isActive ? "pause" : "Click here to start"}
        </p>
      </button>
      <p className="timerSeconds">{seconds === 0 ? timerOut() : seconds}</p>
    </div>
  );
}

Timer.propTypes = {
  handleStart: PropTypes.func.isRequired,
};
