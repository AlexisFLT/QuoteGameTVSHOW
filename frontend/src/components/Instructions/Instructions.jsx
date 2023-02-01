import { useState } from "react";
import { TbQuestionMark } from "react-icons/tb";
import IntructionModal from "../../Modal/InstructionModal";
import "./style.scss";

export default function Instructions() {
  const [show, setShow] = useState(false);
  return (
    <div className="instructionIcon">
      <button
        type="button"
        className="instrucButton"
        onClick={() => setShow(true)}
      >
        <TbQuestionMark className="instruIcon pulse" />
      </button>
      <IntructionModal onClose={() => setShow(false)} show={show} />
    </div>
  );
}
