const BASE_URL = "http://127.0.0.1:8000/tasks";

export const validateTasks = async (tasks) => {
  const response = await fetch(`${BASE_URL}/validate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tasks),
  });
  return response.json();
};

export const prioritizeTasks = async (tasks) => {
  const response = await fetch(`${BASE_URL}/prioritize`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tasks),
  });
  return response.json();
};
