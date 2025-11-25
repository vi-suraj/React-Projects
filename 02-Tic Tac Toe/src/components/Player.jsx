import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let player = <span className="player-name">{name}</span>;

  function handleEdit() {
    setIsEditing((edit) => !edit);
  }

  if (isEditing) {
    player = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
