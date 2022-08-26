import { useState } from 'react'
import ListBlock from './components/ListBlock'
import './styles/App.css'
import TodoForm from './components/TodoForm'

function App() {
const [lists, setList] = useState([{id:1 , title:"javascript", descr:'Description', completed:false},
                                   {id:2 , title:"ReactJs", descr:'testDescr', completed:false},
                                   {id:3 , title:"NodeJs", descr:'Description', completed:false}])
    const createTodo = (newTodo) => {
        setList([...lists, newTodo])
    }

    const removeTodo = (todo) => {
        setList(lists.filter(t => t.id !== todo.id))
    }

    const editTodo = (todo, value) => {
        const edited = lists.find(t => t.id == todo.id);
        edited.descr = value
        setList([...lists])
    }

    const completeTodo = (todo) => {
        const finded = lists.find(t => t.id == todo.id);
        if(!finded.completed) {
            finded.completed = true;
           return setList([...lists])
        }
        finded.completed = false;
        return setList([...lists])
    }

    return (
        <div className='App'>
            <TodoForm create={createTodo}/>
            {lists.length ? 
                <ListBlock 
                    lists={lists} 
                    removeTodo={removeTodo} 
                    editTodo={editTodo} 
                    completeTodo={completeTodo}
                    title={"Todo List"}
                /> 
                :
                <h1 style={{textAlign:'center'}}> Dont have Todo! </h1>}     
        </div>
    )
}

export default App