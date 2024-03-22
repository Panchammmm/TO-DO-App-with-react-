import React, { useState } from "react";
import deletelogo from './media/delete.png';

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }

    return (
        <div className="item-container">

            <li style={{ textDecoration: isDone ? "line-through" : "none", color: isDone ? "#0000004c" : "black" }}
                onClick={handleClick}
            >
                {props.text}

            </li>

            <img src={deletelogo} alt="delete_logo"
                onClick={() => {
                    props.onPressed(props.id);
                }}
            />

        </div>
    );
}


export default ToDoItem;
