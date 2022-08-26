import {useState} from 'react';
import CreateButton from './Create-Button';
import CreateInput from './Create-Input';

function TodoForm({create}) {
    const [todo, setTodo] = useState({title:'', descr:''})    
    
    function addNewList(event) { 
        event.preventDefault()
        const newTodo = {id:Date.now(), ...todo};
        create(newTodo);
        setTodo({title:'', descr:''})
    }

    return(
        <form>
            <CreateInput
                value={todo.title}
                onChange={e => setTodo({...todo, title:e.target.value})}
                type='text'
                placeholder='For title'/>                  
            <CreateInput
                value={todo.descr}
                type='text'
                onChange={e => setTodo({...todo, descr:e.target.value})}
                placeholder='For description'/>
            <CreateButton onClick={addNewList}>Create</CreateButton>
        </form>
    )
}

export default TodoForm