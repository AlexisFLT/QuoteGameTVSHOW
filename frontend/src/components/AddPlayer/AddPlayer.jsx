import { AiOutlineUserAdd } from "react-icons/ai";
import UsernameInput from "@components/UsernameInput/UsernameInput";
import "./style.scss";
import { useState } from "react";

export default function AddPLayer() {
  const [addP, setAddP] = useState([]);

  const onAddBtnClick = () => {
    if (addP.length < 6) {
      setAddP(addP.concat(<UsernameInput key={Date.now()} />));
    }
  };

  return (
    <div className="AddPlayerBlock">
      <button type="button" className="formAddPlayer" onClick={onAddBtnClick}>
        <AiOutlineUserAdd className="iconAdd" />
      </button>
      {addP}
    </div>
  );
}
