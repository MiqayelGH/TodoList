import React from "react";
import styles from "./styles.module.css";

export default function TodoFooter({ todos }) {
const completedTodo = todos.filter((item) => item.completed).length;

  return todos.length ? (
    <footer className={styles.footer}>
      <div className={styles.footer_txt}>
        Completed {completedTodo} from {todos.length}
      </div>
    </footer>
  ) : (
    <div>
        <span className={styles.footer_txt}> Dont have Todo! </span>
    </div>
  );
}
