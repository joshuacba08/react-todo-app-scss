import './TaskList.scss'

function TaskList({ arrayTask }){
    return(
        <div>
            <h3>Lista de tareas</h3>
            <ul>
                {   
                    // TODO: explicar key y por qué no se puede usar index
                    arrayTask.map( (task)=>{
                        return(
                            <li>{task.description}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default TaskList;