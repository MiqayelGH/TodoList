import ListItem from "./ListItem"

function ListBlock({lists, removeTodo, completeTodo, editTodo, title}) {
    return(

        <div className="ListBlock">
            <h1>{title}</h1>
            {lists.map((list, index) => 
               <ListItem 
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

export default ListBlock