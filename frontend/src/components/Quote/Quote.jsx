import Timer from "@components/Timer/Timer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import "./style.scss";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`)
      .then(({ data }) => {
        setUser(data);
      });
  }, []);

  const hScore = async () => {
    setScore(score + 1);
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/user/${id}`, {
        username: user,
        score: score + 1,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleStart = async () => {
    let randomId = Math.floor(Math.random() * 47);
    while (randomId === 0 && randomId !== null) {
      randomId = Math.floor(Math.random() * 47);
    }
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/tvshow/${randomId}`
    );
    setQuote(response.data);
    // Stocker la réponse correspondante à l'ID du random
    // Générer 3 réponses aléatoires
    const randomIds = [
      ...new Set([
        randomId,
        ...Array.from({ length: 3 }, () => Math.floor(Math.random() * 47)),
      ]),
    ];

    const responses = await Promise.all(
      randomIds.map((idtv) =>
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/tvshow/${idtv}`)
      )
    );
    // Concaténer les réponses aléatoires avec la réponse correcte
    // const allAnswers = responses.concat(correctAnswer);
    // Mélanger les réponses aléatoirement
    const shuffledAnswers = responses.sort(() => Math.random() - 0.5);

    setAnswers(shuffledAnswers);
    setQuote(response.data);
  };

  const good = (evt, idquote) => {
    evt.preventDefault();
    if (idquote === quote.id) {
      Swal.fire({
        title: "You goddamn right !",
        icon: "success",
      });
      handleStart();
      hScore();
    } else {
      Swal.fire({
        title: "The Lannisters send their regards.",
        icon: "error",
      });
      handleStart();
    }
  };

  return (
    <div className="quoteComp">
      <div className="timer">
        <Timer handleStart={handleStart} />
      </div>
      <div className="quoteCard">{quote?.quote}</div>
      {answers.map((answer) => (
        <button
          type="button"
          key={answer.data.id}
          onClick={(evt) => good(evt, answer.data.id)}
        >
          {answer.data.title}
        </button>
      ))}
    </div>
  );
}
