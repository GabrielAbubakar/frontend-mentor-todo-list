import { useState, useEffect } from 'react';

function App() {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState({ name: '', isCompleted: false })
    const [todos, setTodos] = useState([])

    function addTodo(e) {
        e.preventDefault()

        if (input !== '') {
            setTodos([...todos, { name: input, completed: false }])
            setTodo({ name: '', completed: false })
        }
    }

    // function completeTask(todoName) {
    //     todos.map(todo => {
    //         if (todo.name === todoName) {
    //             todo.isCompleted = true
    //         }
    //         return todos
    //     })
    // }

    return (
        <div className="App">
            <h1>Todo List</h1>
            {/* Form Input */}
            <form onClick={addTodo}>
                <input type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    splaceholder="Create a new Todo" />
                <button>Add</button>
            </form>

            {/* Listing out all the components */}
            <ul>
                {/* {
                    todos && (
                        todos.map(todo => (
                            <li key={todo.name} onClick={() => completeTask(todo.name)}>
                                <p>
                                    {todo.name}
                                </p>
                                <span style={{ color: !todo.isCompleted ? 'red' : 'blue' }}>
                                    {!todo.isCompleted ? 'Uncompleted' : 'Completed'}
                                </span>
                                {console.log(todo.isCompleted)}
                            </li>
                        ))
                    )
                } */}
                {/* {todos && (
                    todos.map(todo => (
                        <li key={todo.name}>{todo.name} {console.log(todo.name)}</li>

                    ))

                )} */}
            </ul>

        </div>
    );
}

export default App;