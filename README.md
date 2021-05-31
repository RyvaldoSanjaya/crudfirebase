# posting url
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/create
# posting example
{
    "id": 4,
    "name" : "bukan ryvaldo",
    "description" : "got PTSD",
    "sever" : "bad"
}

#get url
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/read

#update url (ex:4,customers dengan ID 4)
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/update/4
#update example
{
    "name" : "malam",
    "description" : "got punched(previously)",
    "sever" : "no improving"
}

#delete url(delete customers dengan ID 3)
https://us-central1-myapp-fb2ce.cloudfunctions.net/app/api/delete/3
