// Importing Todo component from Todo.jsx file . First this is App.jsx
import Todo from './Todo';

export default function App() {
    // Dummy tasks array to pass as props to the Todo component
    const tasks = [
        { task: "Buy groceries", isDone: true },
        { task: "Walk the dog", isDone: false },
        { task: "Complete homework", isDone: true }
    ];

    return (
        <div>
            <h1>My To-Do List</h1>
            {/* Mapping through tasks and rendering Todo component for each task */}
            <ul>
                {tasks.map((task, index) => (
                    <Todo key={index} task={task.task} isDone={task.isDone} />
                ))}
            </ul>
        </div>
    );
}



// Function component that accepts task and isDone as props. This is Todo.jsx
export default function Todo({ task, isDone }) {
    return (
      <li
        style={{
          // Conditional styling for task based on its completion status
          textDecoration: isDone ? 'line-through' : 'none', // Line-through if isDone is true, else no decoration
          color: isDone ? 'green' : 'red' // Green color if isDone is true, else red
        }}
      >
        {/* Displaying task name */}
        Task: {task}
  
        {/* Conditional rendering of task completion status */}
        {/* Showing "Completed" if task is done, else "Pending" */}
        <span style={{ marginLeft: '10px' }}>
          {isDone ? 'Completed' : 'Pending'}
        </span>
      </li>
    );
  }
  