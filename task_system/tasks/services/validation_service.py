def validate_task(task):
    errors = []

    # Task ID
    if "task_id" not in task:
        errors.append("Missing task_id")
    elif not isinstance(task["task_id"], int):
        errors.append("task_id must be integer")

    # Title
    if "title" not in task:
        errors.append("Missing title")
    elif not isinstance(task["title"], str):
        errors.append("title must be string")

    # Deadline
    if "deadline" not in task:
        errors.append("Missing deadline")
    elif not isinstance(task["deadline"], int):
        errors.append("deadline must be integer")
    elif task["deadline"] < 0:
        errors.append("deadline cannot be negative")

    # Estimated Hours
    if "estimated_hours" not in task:
        errors.append("Missing estimated_hours")
    elif not isinstance(task["estimated_hours"], (int, float)):
        errors.append("estimated_hours must be number")
    elif task["estimated_hours"] <= 0:
        errors.append("estimated_hours must be greater than 0")

    # Importance
    if "importance" not in task:
        errors.append("Missing importance")
    elif not isinstance(task["importance"], int):
        errors.append("importance must be integer")
    elif not (1 <= task["importance"] <= 10):
        errors.append("importance must be between 1 and 10")

    return errors
