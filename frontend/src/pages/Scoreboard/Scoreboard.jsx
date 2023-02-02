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
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {player.map((elt) => {
            return (
              <tr>
                <td key={elt.id}>{elt.username}</td>
                <td key={elt.id}>{elt.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
