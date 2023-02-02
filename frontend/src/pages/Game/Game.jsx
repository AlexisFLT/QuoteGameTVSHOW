import Quote from "@components/Quote/Quote";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useState } from "react";
import "./style.scss";

export default function Game() {
  // const [quote, setQuote] = useState([]);
  // const [answer, setAnswer] = useState("");
  // const [counter, setCounter] = useState(0);
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
      {/* <img /> Apparition d'une image en fondu suivant le timer. Utiliser l'id de la réplique pour avoir l'image (url différente) */}
      <div className="quote">
        <p>
          <Quote />
        </p>
      </div>
      {/* <div className="answersBlock">
        <div className="answer1">Friends</div>
        <div className="answer2">The Mandalorian</div>
        <div className="answer3">Star Wars: The Clone War</div>
        <div className="answer4">Grey's Anatomy</div>
      </div> */}
    </div>
  );
}
