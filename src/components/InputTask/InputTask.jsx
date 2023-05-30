import "./InputTask.scss";

function InputTask({ task, setTask, addTask }) {
  return (
    <form className="input-task" onSubmit={addTask}>
      <input
        className="input-task__input"
        onInput={(event) => {
          console.log(event.target.value);
          setTask(event.target.value);
        }}
        type="text"
        placeholder="Create a new todo..."
        value={task}
      />
    </form>
  );
}

export default InputTask;
