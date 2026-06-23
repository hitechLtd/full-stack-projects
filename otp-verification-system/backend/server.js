require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/otpDB2")
.then(()=>{
    console.log("connected to MongoDB!")
})
.catch((err) =>{
    console.error("connection failed:",err);
});
// define schema for otp
const otpSchema = new mongoose.Schema({
    email:String,
    otp:String,
    createdAt:{type:Date, expires: '5m', default:Date.now}
});
const OTP = mongoose.model('OTP', otpSchema);    


app.get("/", (req, res) =>{
    res.send("Hello from the backend!")
});
app.post('/generate-otp', async(req, res) =>{
  
    const { email } = req.body;
    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
    
    
    try {
        // const savedOTP =  await OTP.create({email, otp});
        // console.log(savedOTP);
        await OTP.create({email, otp})
        // send email via otp
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth : {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
        await transport.sendMail({
            from:process.env.EMAIL,
            to:email,
            subject: 'OTP verification',
            text: `Your OTP verification is: ${otp}`
        });
        res.status(200).send('OTP sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error Sending OTP')
    }
   
});
app.post('/verify-otp', async(req, res) =>{
    const {email, otp} = req.body;
    try {
        const otpRecord = await OTP.findOne({email, otp}).exec();
        if(otpRecord) {
            res.status(200).send("OTP verified successfully")
        } else {
            res.status(400).send("Invalid OTP!")
        }
    } catch (error) {

    }
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})