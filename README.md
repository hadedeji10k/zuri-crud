# welcome to zuri-nodejs-crud-task

# github link: https://github.com/hadedeji10k/zuri-crud

## the app is hosted on heroku and the API endpoint is :

## https://zuri-node-crud.herokuapp.com/data

---

To GET all Data in the database send a GET request to https://zuri-node-crud.herokuapp.com/data
It will return a json result of all data in the Database

---

To CREATE a new data, send a POST request with your body containing json data to https://zuri-node-crud.herokuapp.com/data . The data sent should be through raw when using postman and the data should be in a format as below:

{
"name": "Adedeji",
"email":"adedejiyusuf@gmail.com",
"country":"nigeria"
}

---

To UPDATE a data send a PATCH request with the ID of the data you want to update as parameter to https://zuri-node-crud.herokuapp.com/data/id

---

To DELETE a data send a DELETE request width the ID of the data you want to delete as parameter to https://zuri-node-crud.herokuapp.com/data/id

## Author : Adedeji Yusuf
