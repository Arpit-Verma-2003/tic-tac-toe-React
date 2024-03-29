import { useState } from "react";
export default function Player({ name, symbol }) {
  const [newPlayerName,setNewPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function onNameChange(event){
    setNewPlayerName(event.target.value);
  }
  let playerName = <span className="player-name">{newPlayerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerName = <input type="text" required value={newPlayerName} onChange={onNameChange}></input>;
    btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
