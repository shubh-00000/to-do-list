import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ id, title, completed, handleDelete, handleEdit, handleDoneTask }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className={completed ? "completed" : ""}>
                {title}
            </span>
            <div>
                <span className="mx-2 text-success" onClick={() => handleDoneTask(id, completed)}>
                    <FontAwesomeIcon icon={completed ? faUndo : faCheck} />
                </span>
                <span className="mx-2 text-primary" onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </span>
                <span className="mx-2 text-danger" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </div>
        </li>
    );
};

export default TodoItem;
