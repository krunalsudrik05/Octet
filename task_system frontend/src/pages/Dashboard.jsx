import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";
import { validateTasks, prioritizeTasks } from "../services/api";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [result, setResult] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleValidate = async () => {
    const data = await validateTasks(tasks);
    alert(JSON.stringify(data, null, 2));
  };

  const handlePrioritize = async () => {
    const data = await prioritizeTasks(tasks);
    setResult(data);
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Task Prioritization System</h1>

        <TaskForm addTask={addTask} />

        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={handleValidate}>
            Validate
          </button>

          <button className={styles.button} onClick={handlePrioritize}>
            Prioritize
          </button>
        </div>
        <TaskTable tasks={result} />
      </div>
    </>
  );
};

export default Dashboard;
