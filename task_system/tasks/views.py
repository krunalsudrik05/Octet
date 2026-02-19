from rest_framework.decorators import api_view # type: ignore
from rest_framework.response import Response   # type: ignore

from .services.validation_service import validate_task
from .services.prioritization_service import calculate_priority,categorize

@api_view(['POST'])
def prioritize_tasks(request):
    tasks=request.data
    result=[]

    for task in tasks:
        errors=validate_task(task)

        if errors:
            result.append({
                "task_id":task.get("task_id"),
                "errors":errors
            })

        else:

            score=calculate_priority(task)

            category=categorize(score)

            result.append({
                "task_id":task["task_id"],
                "title":task["title"],
                "score":score,
                "category":category
            })
        
    return Response(result)

@api_view(['GET', 'POST'])
def validate_tasks(request):

    if request.method == 'GET':
        return Response({
            "message": "Validate API is working",
            "usage": "Send POST request with task list"
        })

    tasks = request.data

    valid = []
    invalid = []

    for task in tasks:

        errors = validate_task(task)

        if errors:
            invalid.append({
                "task_id": task.get("task_id"),
                "errors": errors
            })
        else:
            valid.append(task)

    return Response({
        "valid_tasks": valid,
        "invalid_tasks": invalid
    })
    
#Health Check

@api_view(['GET'])
def health(request):

    return Response({

        "status": "ok"

    })

