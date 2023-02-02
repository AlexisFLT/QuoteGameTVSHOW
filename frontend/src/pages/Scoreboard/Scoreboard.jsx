import axios from "axios";
import { useEffect, useState } from "react";
// import { IoPlayBackCircleSharp } from "react-icons/io";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Scoreboard() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`).then(({ data }) => {
      setPlayer(data);
    });
  }, []);

  return (
    <div className="scoreboardPage">
      <Link to="/players">
        <button className="returnButton" type="button">
          {/* <IoPlayBackCircleSharp className="iconReturn pulse" /> */}
        </button>
      </Link>
      <h1 className="scoreboardTitle">Scoreboard</h1>
      <div className="table">
        <div className="tBody">
          {player.map((elt) => {
            return (
              <div className="cardScore">
                <p className="usernameText" key={elt.id}>
                  {elt.username}
                </p>
                <p className="scoreText" key={elt.id}>
                  {elt.score}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
