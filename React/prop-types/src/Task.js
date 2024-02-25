import "./task.css";
export function TaskCard({ready}) {
  return (
    <div className='card'>
      <h1>My first task</h1>
      <span className={ready ? 'bg-black' : 'bg-red'}>{ready ? 'Task done!!' : 'Task pending...'}</span >
    </div>
  );
}
