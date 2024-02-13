export const employeeList = [
    {
        "_id": 1,
        "fName": "Jan",
        "lName": "Kowalski",
        "nName": "Koval",
        "email": "jan.kowalski@acme.com",
        "empRole": "Artist"
    },
    {
        "_id": 2,
        "fName": "Adam",
        "lName": "Zieliński",
        "nName": "Zielu",
        "email": "adam.zielinski@acme.com",
        "empRole": "Programmer"
    },
    {
        "_id": 3,
        "fName": "Marian",
        "lName": "Nowak",
        "nName": "Novak",
        "email": "marian.nowak@acme.com",
        "empRole": "Manager"
    }
]

export const employeeDetailsList = [
    {
        "_id": 1,
        "fName": "Jan",
        "lName": "Kowalski",
        "nName": "Koval",
        "email": "jan.kowalski@acme.com",
        "empRole": "Artist",
        "tasks": [
            {
                "_id": 1,
                "taskName": "Enviro",
                "taskType": "Art",
                "taskDescription": "Zrobić enviro",
                "priority": "MUST",
                "deadline": "2001-01-01T00:00:00.000Z",
                "taskStatus": "Incomplete",
            }
        ]
    },
    {
        "_id": 2,
        "fName": "Adam",
        "lName": "Zieliński",
        "nName": "Zielu",
        "email": "adam.zielinski@acme.com",
        "empRole": "Programmer",
        "tasks": [
            {
                "_id": 2,
                "taskName": "Movement",
                "taskType": "Kod",
                "taskDescription": "Zrobić movement",
                "priority": "MUST",
                "deadline": "2001-01-01T00:00:00.000Z",
                "taskStatus": "Incomplete",
            }
        ]
    }
]