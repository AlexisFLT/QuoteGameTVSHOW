/* eslint-disable react/destructuring-assignment */
import { AiOutlineUserAdd } from "react-icons/ai";
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
            Insert all players'names, validate and click on the ready button
          </li>
          <li className="ThirdInstruc">Choose your name and off you go !</li>
        </ul>
        <p className="part1">
          You will have 30 seconds to find the maximum of quotes.
        </p>
        <p className="part3">
          Choose the right answer:
          <br />
          The faster you are, the more points you get !
        </p>
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
  onClose: PropTypes.func.isRequired,
};
