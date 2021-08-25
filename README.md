# mongodb & Node.js Connection
## step:1 Install Node.js.
## step:2 Install the MongoDB Node.js Driver (npm install mongodb).
### npm init
### npm install

Create a free MongoDB Atlas cluster and load the sample data.
The final step is to prep your cluster for connection.
Connect to your database from a Node.js application.
Import MongoClient 
## const {MongoClient} = require('mongodb');
 
# Server Connection
##### const express = require("express")
##### const mongoose =require("mongoose")
##### const morgan = require("morgan")
##### const bodyParser = require("body-parser")
##### const cors = require("cors")

##### const AuthRoute = require('./routes/auth')

##### mongoose.connect('mongodb://localhost:27017/logindb', 
##### {useNewUrlParser: true, useUnifiedTopology: true}) 
##### const db = mongoose.connection 
#####  db.on ('error', (err) =>{
#####     console.log(err)
##### }) 
##### db.once('open', () => {
#####     console.log('Db Connection Established...!')
##### })


##### const app = express()
##### app.use(morgan('dev'))
##### app.use(bodyParser.urlencoded({extended : true}))
##### app.use(bodyParser.json())
#####  app.use(cors())

#####  const PORT = process.env.PORT || 9000
##### app.listen(PORT, ()  => {
#####     console.log(`Server is running on port ${PORT}`)
##### })
#####  app.use('/api', AuthRoute)
