# Saraha App

Saraha App is a backend project implemented using Node.js and Mongoose that allows users to sign up, verify their email, and manage messages. It provides CRUD operations for users and messages, with additional features for error handling, authentication, and more.

## Features

- **User CRUD Operations**: Sign up, Sign in, and Verify email after sign up.
- **Message CRUD Operations**: Add message, Get message, and Share profile.
- **Authentication**: User authentication using `jsonwebtoken`.
- **Password Hashing**: Secure password storage using `bcrypt`.
- **Middleware**: Implemented custom middleware for authentication and error handling.
- **Environment Variables**: Configuration using `dotenv`.
- **File Upload**: Support for uploading files.
- **QR Code Generation**: Generate QR code for user profile using `qrcode`.
- **Validation**: Input validation to ensure data integrity.
- **Email Verification**: Send email to verify user's email after sign up.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv
- multer (for file uploads)
- qrcode
- nodemailer (for sending emails)

## Methods Practiced

- **CRUD Operations**: Implemented Create, Read, Update, and Delete operations for users and messages.
- **Mongoose Models**: Defined and used Mongoose schemas and models to interact with MongoDB.
- **RESTful API Design**: Designed RESTful endpoints for managing users and messages.
- **Error Handling**: Implemented middleware to handle errors gracefully.
- **Authentication**: Used `jsonwebtoken` for secure user authentication.
- **Password Hashing**: Used `bcrypt` to hash user passwords.
- **File Upload**: Implemented file upload functionality using `multer`.
- **QR Code Generation**: Generated QR codes for user profiles using `qrcode`.
- **Validation**: Ensured data integrity with input validation.
- **Email Verification**: Sent verification emails using `nodemailer`.

## What I Learned

- **Backend Development**: Gained hands-on experience with backend development using Node.js and Express.
- **Database Management**: Learned how to interact with MongoDB using Mongoose for data storage and retrieval.
- **API Design**: Understood the principles of designing RESTful APIs.
- **Security Best Practices**: Implemented secure password hashing with `bcrypt` and token-based authentication with `jsonwebtoken`.
- **Middleware**: Developed custom middleware for handling authentication and errors.
- **Configuration Management**: Utilized `dotenv` for environment variable management.
- **File Handling**: Managed file uploads using `multer`.
- **QR Code Integration**: Integrated QR code generation using `qrcode`.
- **Email Services**: Implemented email sending functionality using `nodemailer`.
