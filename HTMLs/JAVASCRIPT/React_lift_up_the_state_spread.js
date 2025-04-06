import { useState } from 'react';

export default function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'learn react', done: false },
        { id: 2, text: 'build stuff', done: false },
    ]);

    function toggleTodo(id) {
        //  clone + update with map (immutability)
        const updated = todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(updated); // ✅ new reference
    }

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
                    {todo.done ? '✅' : '⬜'} {todo.text}
                </li>
            ))}
        </ul>
    );
}
