import Quote from "@components/Quote/Quote";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./style.scss";

export default function Game() {
  const [player, setPlayer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
      .then(({ data }) => {
        setPlayer(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="Game">
      <h1 className="playerName">Be fast {player.username} !</h1>
      <div className="quote">
        <Quote />
      </div>
    </div>
  );
}
