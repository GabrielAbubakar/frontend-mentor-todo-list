import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {

    const [input, setInput] = useState("")
    const [todos, setTodos] =
        useState(JSON.parse(localStorage.getItem('todos')) !== [] ? JSON.parse(localStorage.getItem('todos')) : [])
    const [displayedArr, setDisplayedArr] = useState([...todos])

    const handleSubmit = (e) => {
        e.preventDefault()

        setTodos([...todos, { name: input, isCompleted: false }])
        setDisplayedArr([...todos, { name: input, isCompleted: false }])
        setInput('')
    }

    const toggleComplete = (index) => {
        const newTodos = [...todos]
        if (newTodos[index].isCompleted === false) {
            newTodos[index].isCompleted = true
        } else {
            newTodos[index].isCompleted = false
        }

        setTodos(newTodos)

    }

    const filterActive = () => {
        const filtered = [...todos]
        setDisplayedArr(filtered.filter(item => item.isCompleted === false))
    }

    const filterAll = () => {
        setDisplayedArr(todos)
    }

    const filterCompleted = () => {
        const filtered = [...todos]
        setDisplayedArr(filtered.filter(item => item.isCompleted !== false))
    }

    const delCompleted = () => {
        const filtered = [...todos]
        setTodos(filtered.filter(item => item.isCompleted === false))
    }



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        setDisplayedArr(todos)
    }, [todos])


    return (
        <div>
            <div className='background-img'>

            </div>
            <div className="container">
                <h1>Todo</h1>

                <form onSubmit={handleSubmit}>
                    <input value={input} type="text" placeholder='Create a new todo..' onChange={(e) => setInput(e.target.value)} required />
                </form>

                <ul>
                    {
                        displayedArr.map((todo, index) => (
                            <li key={index}>
                                <button
                                    className={todo.isCompleted ? 'completed-item' : 'uncompleted-item'}
                                    onClick={() => toggleComplete(index)}>
                                </button>
                                <p className={todo.isCompleted ? 'line-through' : ''}>{todo.name}</p>
                                <button className='delete-item'>
                                    <svg width={18} height={18}>
                                        <path
                                            fill="#494C6B"
                                            fillRule="evenodd"
                                            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                                        />
                                    </svg>;

                                </button>
                            </li>
                        ))
                    }
                </ul>

                <div className='status-bar'>
                    <p>
                        {todos.filter(item => item.isCompleted === false).length} items left
                    </p>
                    <div className="status-options">
                        <button onClick={filterAll}>All</button>
                        <button onClick={filterActive}>Active</button>
                        <button onClick={filterCompleted}>Completed</button>
                    </div>
                    <button onClick={delCompleted}>Clear Completed</button>
                </div>
            </div>
        </div>
    )
}

export default App