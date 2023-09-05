import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    console.log(tasks)
    return <h1>Ninguna tarea</h1>;
  } else return (
    <div>
      {tasks.map( task => {
        {console.log('Hola')}
        <TaskCard task={task} />;
      })}
    </div>
  );
};

export default TaskList;