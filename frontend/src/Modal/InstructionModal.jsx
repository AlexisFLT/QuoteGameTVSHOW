/* eslint-disable react/destructuring-assignment */
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaHourglassEnd } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import "./style.scss";

export default function IntructionModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalcontent">
        <h1 className="modalTitle">So, what do you have to do ?</h1>
      </div>
      <div className="modalBody">
        <ul className="firstBlock">
          <li className="firstInstruc">
            Choose the number of players by clicking on{" "}
            <AiOutlineUserAdd className="iconsIns" />
          </li>
          <li className="SecondInstruc">
            Insert all players' names and validate
          </li>
          <li className="ThirdInstruc">
            Set the timer by licking on <FaHourglassEnd className="iconsIns" />
          </li>
        </ul>
        <p className="part1">A series of 10 quotes will appear.</p>
        <p className="part2">
          When you see your name, click on "play" and off you go!
        </p>
        <p className="part3">
          Choose the right answer:
          <br />
          The faster you are, the more points you get: On a 10s timer if you
          answer correctly between:
        </p>
        <ul className="scorePoints">
          <li className="five">1 to 3 seconds: 5 pts </li>
          <li className="three">4 to 7 seconds: 3 pts</li>
          <li className="one">8 to 10 seconds: 1 pt</li>
          <li className="zero">10+ : obviously 0 pt</li>
        </ul>
        <p className="quoteJoke">
          "And may the odds be ever in your favor" <br />
          ...Nah ! that's a movie quote ! wrong game !
        </p>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={props.onClose} className="buttonClose">
          <ImCross className="closeIcon pulse" />
        </button>
      </div>
    </div>
  );
}

IntructionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
};
