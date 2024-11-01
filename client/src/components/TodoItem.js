import { useState } from 'react';

// styles
import styles from './TodoItem.module.css';

// Library imports
import { CheckIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

function TodoItem({ todo, toggleCompleted, deleteTodo, enterEditMode }) {
    const [isChecked, setIsChecked] = useState(todo.completed);

    const handleCheckboxChange = (e) =>{
        setIsChecked(!isChecked);
        toggleCompleted(todo.id);
      }

    return (
        <li className={styles.todo}>
            <div className={styles["todo-group"]}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    name={todo.text}
                    id={todo.id}
                />
                <label
                    htmlFor={todo.id}
                    className={styles.label}
                >
                    {todo.text}
                    <p className={styles.checkmark}>
                        <CheckIcon strokeWidth={2} width={24} height={24} />
                    </p>
                </label>
            </div>
            <div className={styles["todo-group"]}>
                <button
                    className='btn'
                    aria-label={`Update ${todo.text} Todo`}
                    onClick={() => enterEditMode(todo)}
                >
                    <PencilSquareIcon width={12} height={12} />
                </button>

                <button
                    className={`btn ${styles.delete}`}
                    aria-label={`Delete ${todo.text} Todo`}
                    onClick={() => deleteTodo(todo.id)}
                >
                    <TrashIcon width={12} height={12} />
                </button>

            </div>
        </li>
    );
}
export default TodoItem