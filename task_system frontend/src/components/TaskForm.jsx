import React, { useState } from "react";
import styles from "./Taskform.module.css";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    task_id: "",
    title: "",
    deadline: "",
    estimated_hours: "",
    importance: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      task_id: Number(task.task_id),
      title: task.title,
      deadline: Number(task.deadline),
      estimated_hours: Number(task.estimated_hours),
      importance: Number(task.importance),
    });
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name="task_id"
          placeholder="Task ID"
          onChange={handleChange}
        />

        <input
          className={styles.input}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />

        <input
          className={styles.input}
          name="deadline"
          placeholder="Deadline"
          onChange={handleChange}
        />

        <input
          className={styles.input}
          name="estimated_hours"
          placeholder="Hours"
          onChange={handleChange}
        />

        <input
          className={styles.input}
          name="importance"
          placeholder="Importance"
          onChange={handleChange}
        />

        <button className={styles.submit}>Add Task</button>
      </form>
    </>
  );
};

export default TaskForm;
