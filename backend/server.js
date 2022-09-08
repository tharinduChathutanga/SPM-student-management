const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();

//import routes
const postClass = require('./routes/classRoutes');
const stdpayment = require('./routes/student_pay_R.js');
const teachSal = require('./routes/teacher_sal_route.js');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postClass);
app.use(stdpayment);
app.use(teachSal);

const PORT = 8000;
const DB_URL = "mongodb+srv://user:user@cluster0.odqhx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection error', err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});