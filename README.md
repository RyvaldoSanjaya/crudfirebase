# posting url
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/create
# posting example
{
    "id": 6,
    "age" : "5",
    "q1" : 5,
    "q2" : 5,
    "q3" : 5,
    "q4" : 5,
    "q5" : 5,
    "q6" : 5,
    "q7" : 5,
    "score" : "69",
    "rank" : "4"
}

#get url
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/read

#update url (ex:4,customers dengan ID 4)
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/update/4
#update example
{
    "age" : "5",
    "q1" : 5,
    "q2" : 5,
    "q3" : 5,
    "q4" : 5,
    "q5" : 5,
    "q6" : 5,
    "q7" : 5,
    "score" : "69",
    "rank" : "4"
}

#delete url(delete customers dengan ID 3)
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/delete/3
