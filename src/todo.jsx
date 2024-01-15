import { database } from './myDexie';
import './App.css';
import { useLiveQuery } from 'dexie-react-hooks';

const Todo = ()=>{
    const todos = useLiveQuery(()=> database.todo.toArray(), []);

    const addTodo = (event)=>{
        event.preventDefault();
        const userTodo = document.querySelector('#inputTodo').value;

        database.todo.add({
            todoText: userTodo,
            completed: false
        })
    }

    const removeTodo = (id) =>{
        database.todo.delete(id)
    }

    const toggleStatus = async (id, event) =>{
       await database.todo.update(id, {completed: !!event.target.checked})
    }

    return(
    <>
        <h1 className='header'>Todo App</h1>
        <form onSubmit={addTodo}>
            <input type="text" name="todoInput" id="inputTodo" placeholder='What are you doing today?' required />
            <button type="submit" className='submit-btn'>Add</button>
        </form>

        <div className="todos">
            {todos?.map((todo) =>(
                <div className='todo-list' key={todo.id}>
                    <label htmlFor={`checkTodo${todo.id}`}>
                        <input 
                            type="checkbox" 
                            name="completed" 
                            className='check-todo' 
                            id={`checkTodo${todo.id}`} 
                            checked={todo.completed}
                            onChange={(event) =>{toggleStatus(todo.id, event)}}
                        />

                        <span className={`todo-text ${todo.completed && 'strike-text'}`}>{todo.todoText}</span>

                    </label>
                    <i className="delete-todo fa-solid fa-trash" onClick={()=>{removeTodo(todo.id)}}></i>
                </div>
            ))}
        </div>
    </>
    )
}

export default Todo;