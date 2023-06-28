import {useState} from 'react';
import Button from '../Button'
import TodoInput from "../Input"
import styles from './style.module.css'

function TodoForm({create}) {
    const [todo, setTodo] = useState({title:'', descr:''})    
    
    function addNewList(event) { 
        event.preventDefault()
        if (todo.title !== '' && todo.descr !== '') {
            const newTodo = {id:Date.now(), ...todo};
            create(newTodo);
            setTodo({title:'', descr:''})
        }
    }

    return(
        <form className={styles.form__container}>
            <TodoInput
                value={todo.title}
                onChange={e => setTodo({...todo, title:e.target.value})}         
                placeholder='Title'/>                  
            <TodoInput
                value={todo.descr}        
                onChange={e => setTodo({...todo, descr:e.target.value})}
                placeholder='Description'/>
            <Button onClick={addNewList}> Create </Button>
        </form>
    )
}

export default TodoForm