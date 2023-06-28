import Button from "../Button"
import Input from "../Input"
import { useState } from "react"
import styles from './style.module.css'

function TodoItem(props) {
    let [edit,updateEdit] = useState(false);

    return(
        <div className={styles.todo_item}>
            <div className={styles.todo_header}>
                <strong className={styles.todo_title}> {props.numb}.{props.post.title} </strong>
                {!edit 
                    ? 
                    <div className={styles.description}> {props.post.descr} </div> 
                    :    
                    <Input
                    value={props.post.descr}
                    onChange={e => props.editTodo(props.post ,e.target.value)}
                    placeholder='Enter a description'/>  }              
            </div>

            <div className={styles.buttons}>
            {!props.post.completed 
                    ?
                    <Button className={styles.not_completed} onClick={()=> props.complete(props.post)}> Not Completed </Button> 
                    :
                    <Button className={styles.completed} onClick={()=> props.complete(props.post)}> Completed </Button>
                }  
                <Button className={styles.delete_btn} onClick={()=> props.remove(props.post)}> Delete </Button>

                {!edit 
                    ?
                    <Button className={styles.edit_btn} onClick={()=> updateEdit(!edit)}> Edit </Button> 
                    :
                    <Button className={styles.update_btn} onClick={()=> updateEdit(!edit)}> Update </Button>
                }

                        
            </div>
        </div>
    )
}

export default TodoItem;