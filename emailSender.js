const nodemailer = require('nodemailer');
const path = require('path');

function sendEmail(name, email, message, response){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nsolaojo@gmail.com',
            pass: process.env.PASS
        }
    });

    var mailOptions = {
        from: 'nsolajo@gmail.com',
        to: 'nifemisolaojo@ymail.com',
        subject: 'Resume email',
        text: `Email from: ${name}, Body: ${message} sender's email: ${email}`
    };

    transporter.sendMail(mailOptions, function(error, info){   
        if (error) {
            console.log(error);
            response.sendFile(path.join(__dirname, '/templates/error.html'));
        } else {
            console.log('Email sent: ' + info.response);
            response.sendFile(path.join(__dirname, '/templates/confirm.html'));
        }
    });

}


module.exports = sendEmail;