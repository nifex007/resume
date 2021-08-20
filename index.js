const express = require('express');
const path = require('path');
const sendEmail = require('./emailSender')

const app = express();

app.use('/static', express.static(__dirname + '/templates/static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/templates/index.html'));
})

app.post('/confirm', (request, response) => {
    console.log(request.body)
    const name = request.body.name;
    const email = request.body.email;
    const message = request.body.message
    sendEmail(name, email, message, response)
})

app.get('*',function(req,res){
    res.redirect('/');
   });


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
