const BASE_URL = "https://octet-3hqn.onrender.com/";

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
