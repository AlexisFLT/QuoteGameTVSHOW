// import axios from "axios";
// import { useEffect, useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <h1 className="playersTitle">Who's next ?</h1>
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
      <button className="scoreBoardBurtton" type="button">
        ScoreBoard
      </button>
    </div>
  );
}
