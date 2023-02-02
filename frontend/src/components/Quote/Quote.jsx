import Timer from "@components/Timer/Timer";
import axios from "axios";
import { useState } from "react";
import "./style.scss";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleStart = async () => {
    const randomId = Math.floor(Math.random() * 47);
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
      randomIds.map((id) =>
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/tvshow/${id}`)
      )
    );
    // Concaténer les réponses aléatoires avec la réponse correcte
    // const allAnswers = responses.concat(correctAnswer);
    // Mélanger les réponses aléatoirement
    const shuffledAnswers = responses.sort(() => Math.random() - 0.5);

    setAnswers(shuffledAnswers);
    setQuote(response.data);
  };

  return (
    <div className="quoteComp">
      <div className="timer">
        <Timer handleStart={handleStart} />
      </div>
      <div className="quoteCard">{quote?.quote}</div>
      {answers.map((answer, index) => (
        <p key={index.id}>{answer.data.title}</p>
      ))}
    </div>
  );
}
