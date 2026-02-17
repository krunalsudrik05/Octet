from tasks.utils.constants import *

#urgancy score

def urgency_score(deadline):
    if deadline == 0:
        return 100
    elif deadline == 1:
        return 90
    elif deadline <= 3:
        return 80
    elif deadline <= 7:
        return 60
    elif deadline <= 14:
        return 40
    else:
        return 20

# | Days | Score |
# | ---- | ----- |
# | 0    | 100   |
# | 1    | 90    |
# | 2–3  | 80    |
# | 4–7  | 60    |
# | 8–14 | 40    |
# | 15+  | 20    |

#effort score

def effor_score(hours):
    score=100-(hours*5)
    return max(0,score)

#importance score

def importance_score(importance):
    return (importance/10)*100

# priority calculate

def calculate_priority(task):
    imp=importance_score(task["importance"])

    urg=urgency_score(task["deadline"])

    eff=effor_score(task["estimated_hours"])

    #impossible penalty

    if task["estimated_hours"] > task["deadline"] *8:
        eff -=30
    
    score = (
        imp * IMPORTANCE_WEIGHT +
        urg * URGENCY_WEIGHT +
        eff * EFFORT_WEIGHT
    )

    return round(score)

#category logic

def categorize(score):

    if score >= HIGH_PRIORITY_THRESHOLD:
        return "HIGH"
    elif score >=MEDIUM_PRIORITY_THRESHOLD:
        return "MEDIUM"
    else:
        return "LOW"