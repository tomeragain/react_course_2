import { useState } from "react";

export default function Player({name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    }
    const handleChangePlayerName = (event) => {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" onChange={handleChangePlayerName} required value={playerName} />;
    }

    return <li>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
        <button onClick={handleEditClick} >{ isEditing ? 'Save' : 'Edit' }</button>
    </li>
}