import "./style.scss";

export default function UsernameInput() {
  return (
    <form className="inputBlock">
      <input
        type="text"
        className="inputName"
        //   placeholder={name}
        //   onChange={handleName}
        //   value={name.nickname}
        name="player"
      />
    </form>
  );
}
