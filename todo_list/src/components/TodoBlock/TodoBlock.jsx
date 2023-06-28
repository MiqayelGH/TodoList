import TodoItem from "../TodoItem"
import styles from './styles.module.css'

function TodoBlock({lists, removeTodo, completeTodo, editTodo, title}) {
    

    return(

        <div className={styles.todo_block}>
            <span className={styles.list_header}>{title}</span>
            {lists.map((list, index) => 
               <TodoItem 
                remove={removeTodo}
                editTodo={editTodo}
                complete={completeTodo}
                numb={index + 1} 
                post={list} 
                key={list.id}/> 
            )}
        </div>
    )
}

export default TodoBlock