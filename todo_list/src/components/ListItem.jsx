import CreateButton from "./Create-Button"
import CreateInput from "./Create-Input"
import { useState } from "react"

function ListItem(props) {
    
   let [edit,updateEdit] = useState(false)
    return(
        <div className="ListItem">
            <div className="List__header">
                <strong className="title">{props.numb}.{props.post.title} </strong>
                {!edit 
                    ? 
                    <div> {props.post.descr} </div> 
                    :    
                    <CreateInput
                    value={props.post.descr}
                    onChange={e => props.editTodo(props.post ,e.target.value)}
                    type='text'
                    placeholder='Enter a description'/>  }              
            </div>

            <div className="List__buttons">
                <CreateButton onClick={()=> props.remove(props.post)}> Delete </CreateButton>

                {!edit 
                    ?
                    <CreateButton onClick={()=> updateEdit(!edit)}> Edit </CreateButton> 
                    :
                    <CreateButton onClick={()=> updateEdit(!edit)}> Update </CreateButton>
                }

                 {!props.post.completed 
                    ?
                    <CreateButton onClick={()=> props.complete(props.post)}> Not Complete </CreateButton> 
                    :
                    <CreateButton onClick={()=> props.complete(props.post)}> Complete </CreateButton>
                }             
            </div>
        </div>
    )
}

export default ListItem