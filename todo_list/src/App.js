import { useState } from "react";
import ListBlock from "./components/TodoBlock";
import styles from './styles/App.module.css';
import Form from "./components/Form";
import Footer from "./components/TodoFooter";

function App() {
  const [lists, setList] = useState([
    { id: 1, title: "JavaScript", descr: "Description", completed: false },
    { id: 2, title: "ReactJs", descr: "Description", completed: false },
    { id: 3, title: "NodeJs", descr: "Description", completed: false },
  ]);

  const createTodo = (newTodo) => {
    setList([...lists, newTodo]);
  };

  const removeTodo = (todo) => {
    setList(lists.filter((t) => t.id !== todo.id));
  };

  const editTodo = (todo, value) => {
    const edited = lists.find((t) => t.id === todo.id);
    edited.descr = value;
    setList([...lists]);
  };

  const completeTodo = (todo) => {
    const finded = lists.find((t) => t.id === todo.id);

    if (!finded.completed) {
      finded.completed = true;
      return setList([...lists]);
    }

    finded.completed = false;
    return setList([...lists]);
  };

  return (
    <div className={styles.App}>
      <Form create={createTodo} />
      <ListBlock
        lists={lists}
        removeTodo={removeTodo}
        editTodo={editTodo}
        completeTodo={completeTodo}
        title={"Todo List"}
      />
      <Footer todos={lists} />
    </div>
  );
}

export default App;
