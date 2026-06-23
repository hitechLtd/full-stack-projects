# OTP Verification System
## Overview
This is a full-stack OTP (One-Time Password) verification application built with Node.js, Express, MongoDB, and Nodemailer. The system allows users to enter their email address, receive a 4-digit OTP via email, and verify their identity using the generated OTP.

The OTP automatically expires after 5 minutes using MongoDB's TTL(Time To Live) functionality.

## Features
- Generate a 4-digit OTP
- Send OTP via email using Nodemailer
- Store OTPs in MongoDB
- Verify user-centered OTPs
- Automatically expire OTPs after 5 minutes
- REST API backend
- Simple and responsive user interface

## Tech Stack
- HTML5
- CSS3
- JavaScript (vanilla JS)

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Email Service
- Nodemailer
- Gmail SMTP

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/hitechLtd/full-stack-projects.git
```

### 2. Navigate to the Project Directory

```bash
cd otp-verification-system
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create a .env File

```
EMAIL=your_email@gmail.com
PASS=your_app_password
PORT=3000
```
>Note: Use a Gmail App Password instead of your normal Gmail password.

### 5. Start MongoDB

Ensure MongoDB is running locally:

```text
mongodb://127.0.0.1:27017/otpBD2
```

### 6. Start the server

```bash
npm start
```

or

```bash
nodemon server.js
```

## API Endpoints

### Generate 

Gnerates a new OTP and sends it to the specified email
address.

**Method:** POST

**Endpoint:** `/generate-otp`

#### Request Body

```json
{
   "email": "example@gmail.com",
   "otp": "1234"
}
```

#### Success Response

```text
OTP Verified successfully!
```

#### Error Response

```text
Invalid OTP!
```

## How It Works

1. The user enters their email address.
2. The application generates a random 4-digit OTP.
3. The OTP is stored in MongoDB.
4. The OTP is sent to the user's email address.
5. The user enters the OTP received via email.
6. The user enters the OTP received via email.
7. If the OTP is valid, verification is successful.
8. The OTP automatically expires after 5 minutes.

## Future Improvements

* JWT Aunthentication
* Password Reset Functionality
* Resend OTP Feature
* Rate Limiting
* User Registration and Login
* Email Templates
* Docker Support
* Automated Testing

## Author

**Bright Chimwaza**

Aspiring Full-Stack Developer focused on JavaScript, Node.js, Express.js, MongoDB, and modern Web development.



