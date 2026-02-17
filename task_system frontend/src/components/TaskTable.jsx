import React from "react";
import styles from "./TaskTable.module.css";

export default function TaskTable({ tasks }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Score</th>
            <th className={styles.th}>Category</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.task_id}>
              <td className={styles.td}>{task.task_id}</td>

              <td className={styles.td}>{task.title}</td>

              <td className={styles.td}>{task.score}</td>

              <td
                className={`${styles.td} ${styles[task.category.toLowerCase()]}`}
              >
                {task.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
