import { useState } from 'react';
import InputTask from '../InputTask/InputTask';
import TaskList from '../TaskList/TaskList';
import './TaskContainer.scss';

function TaskContainer(){

    // declaro mi estado que contendrá la descripción de la tarea
    const [task, setTask] = useState('');
    
    const [arrayTask, setArrayTask] = useState([
        {
            id: 1,
            description: 'Comprar leche',
            completed: false,
            date: '2023-05-01'
        }
    ]);

    const addTask = (event) => {
        // evito que el formulario recargue la página
        event.preventDefault();
        // creo un objeto con la nueva tarea
        const newTask = {
            id: arrayTask.length + 1,
            description: task,
            completed: false, // por defecto la tarea no está completada
            date: new Date() // fecha actual
        }
        // seteo el estado de arrayTask con el nuevo array
        // uso el operador spread para para esparcir las tareas que ya tengo en el array
        setArrayTask([...arrayTask, newTask])
        console.log(arrayTask); // imprimo el array de tareas pero no tiene el estado actualizado porque aun no se ha vuelto a renderizar el componente, por eso se ve el array anterior. (usar react dev tools)
        // limpio el input de la tarea para que quede vacio
        setTask('');
    }

    return (
        <main className='task-container'>
            <InputTask task={task}  setTask={setTask} addTask={addTask} />
            <TaskList arrayTask={arrayTask}/>
        </main>
    )
}

export default TaskContainer;