import {UseState} from 'react';
import Todo from ".\todo"

import '.\todoApp.css'

export default function TodoApp(){

    const [title, setTitle] = UseState("")


    function handleChange(e) {
        const   value = event.target.value
        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault()

        const newTodo = {
            id: crypto.RandomUID(),
            title: title,
            completed: false   
        }

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp)
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
        setTitle("");
    }

    return (
        <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}></input>
            <input onClick={handleSubmit} 
            type="submit" 
            value="Create todo" 
            className="ButtonCreate">
            </input>

            {title}
        </form>

        <div className='todosContainer'>
            {
                todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
    )
}