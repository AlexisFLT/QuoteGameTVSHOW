// import axios from "axios";
// import { useEffect, useState } from "react";
import "./style.scss";

export default function Players() {
  // const [player, setPlayer] = useState([]);

  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`).then(({ data }) => {
  //     setPlayer(data);
  //   });
  // }, []);
  return (
    <div className="players">
      <h1 className="playersTitle">Who's next ?</h1>
      <div className="playersBlock">
        {/* {player.map((elt) => {
          return <Player key={elt.id} data={elt} />;
        })} */}
        <p className="playerCard">USERNAME</p>
        <p className="playerCard">USERNAME</p>
        <p className="playerCard">USERNAME</p>
        <p className="playerCard">USERNAME</p>
      </div>
    </div>
  );
}
