import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.scss";
import axios from "axios";

export default function Timer({ handleStart }) {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const waitForScore = async () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
      .then(({ data }) => {
        setScore(data.score);
      });
  };
  waitForScore();

  const secondsRef = useRef(seconds);
  secondsRef.current = seconds;

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

  useEffect(() => {
    if (score !== undefined && seconds === 0) {
      Swal.fire({
        title: "Time Out !",
        text: `Your score: ${score}`,
        icon: "success",
      });
      navigate("/players");
    }
  }, [seconds, score, navigate]);

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
        <p className="startText">{isActive ? null : "Click here to start"}</p>
      </button>
      <p className="timerSeconds">{secondsRef.current}</p>
    </div>
  );
}

Timer.propTypes = {
  handleStart: PropTypes.func.isRequired,
};
