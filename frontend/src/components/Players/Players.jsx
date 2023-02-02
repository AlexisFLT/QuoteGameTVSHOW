import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import "./style.scss";

export default function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`).then(({ data }) => {
      setPlayers(data);
    });
  }, []);
  return (
    <div className="players">
      <Link to="/">
        <button className="returnButton" type="button">
          <AiFillBackward className="iconReturn pulse" />
        </button>
      </Link>
      <h1 className="playersTitle">Who's next ?</h1>
      <div className="playersBody">
        <div className="playersBlock">
          {players.map((elt) => {
            return (
              <Link className="playerCard" to={`/player/game/${elt.id}`}>
                <p key={elt.id} data={elt}>
                  {elt.username}
                </p>
              </Link>
            );
          })}
        </div>
        <Link className="linkButtonScore" to="/scoreboard">
          <button className="scoreBoardBurtton" type="button">
            ScoreBoard
          </button>
        </Link>
      </div>
    </div>
  );
}
