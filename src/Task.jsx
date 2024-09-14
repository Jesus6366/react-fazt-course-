import "./Task.css";

const TaskCard = (props) => {
  return (
    <div className="card">
      <h1>My First Task </h1>
      <span
        style={props.ready ? { background: "green" } : { background: "red" }}
      >
        {props.ready ? "Task Done" : "Task Pending"}
      </span>
    </div>
  );
};

export default TaskCard;
