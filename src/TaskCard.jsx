function TaskCard({task}){
    return (
        <div >
          {console.log('Holanda')}
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      );
}

export default TaskCard;