I am doing the web development course from programming hero.in this journey, you have to help me everyday.
So doing notes specially.
I will give you my understandings and my problems.You have to make those perfect and regenerate for me to make my
learning the best.
    Don't use extra stuffs more than my instructions
I have a background of competitive programming and coding in c and c++.
do use commenting out while doing these notes, I will store these in my vscode / github.give me those in a way like the
whole THING
is in a code block.

REMEMBER ONE THING, please follow each and every word of my prompt.
    Don't miss any instructions.

Here is an example for my engaging note where I generally use kinda entertainment plots, see how intuitive it is with proper explanations of every important term:

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
  


Try to do the notes properly while describing properly without negligence.And,
    ONLY on those topics that I will ask you to do, no extra shits.
I am currently learning about React.
       
Now a really intelligent and hitting in the brain note needed on:




Be precise and short but effective as hell.don't use emojis and cringe headings before starting any topic in the note. Give proper explanations and stories. strictly saying