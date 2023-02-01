import Timer from "@components/Timer/Timer";
// import { useState } from "react";
import "./style.scss";

export default function Game() {
  // const [quote, setQuote] = useState([]);
  // const [answer, setAnswer] = useState("");
  // const [counter, setCounter] = useState(0);

  return (
    <div className="Game">
      <div className="timer">
        <Timer />
      </div>
      {/* <img /> Apparition d'une image en fondu suivant le timer. Utiliser l'id de la réplique pour avoir l'image (url différente) */}
      <div className="quote">
        {/* {quo.quote} */}
        <p>"This is the way"</p>
      </div>
      <div className="answersBlock">
        <div className="answer1">Friends</div>
        <div className="answer2">The Mandalorian</div>
        <div className="answer3">Star Wars: The Clone War</div>
        <div className="answer4">Grey's Anatomy</div>
      </div>
    </div>
  );
}
