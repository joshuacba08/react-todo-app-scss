import InputTask from '../InputTask/InputTask';
import TaskList from '../TaskList/TaskList';
import './TaskContainer.scss';

function TaskContainer(props){
    
    return (
        <main className='task-container'>
            <InputTask />
            <TaskList />
        </main>
    )
}

export default TaskContainer;