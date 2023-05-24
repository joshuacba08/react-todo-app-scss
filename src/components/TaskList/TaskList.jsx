import "./TaskList.scss"; 
import check from "../../assets/icons/icon-check.svg";
import cross from "../../assets/icons/icon-cross.svg";

function TaskList({ arrayTask, changeStatusTask, deleteTask }) {
  return (
    <div>
      <ul className="tasks-list-container">
        {arrayTask.map((task) => {
          return (
            <li className="task-list__item" key={task.id}>
                <button className="check-task"
                    onClick={ ()=>{ changeStatusTask(task.id) } }
                >
                    { task.completed ? <img src={check} /> : null }
                </button>
                <span>{task.description}</span>
                <button className="delete-button"
                    onClick={ ()=>{ deleteTask(task.id) }}
                >
                    <img src={cross} alt="" />
                </button>
            </li>);
        })}
      </ul>
    </div>
  );
}

export default TaskList;
