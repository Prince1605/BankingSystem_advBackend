# BankingSystem_advBackend

A scalable and secure banking backend system built with Node.js, Express.js, MongoDB, and Mongoose.
This project follows ledger-based accounting principles and implements real-world banking transaction workflows with idempotency, transaction management, authentication, and account balance derivation.

## Features

* User Authentication & Authorization (JWT)
* Secure Password Hashing using bcrypt
* Account Creation & Management
* Ledger-Based Accounting System
* Transaction Processing with MongoDB Sessions
* Idempotency Key Support to Prevent Duplicate Transactions
* Initial Fund Transfer System
* Account Balance Calculation from Ledger Entries
* Email Notifications for Transactions
* Token Blacklisting for Secure Logout
* MongoDB Aggregation Pipelines
* Transaction Status Handling (PENDING, COMPLETED, FAILED, REVERSED)

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Nodemailer
* bcrypt

## Project Highlights

* Uses double-entry ledger concepts
* Implements transactional consistency using MongoDB sessions
* Follows scalable backend architecture
* Handles duplicate payment protection using idempotency keys
* Designed using modular MVC structure

## Learning Goals

This project was built to deeply understand:

* Banking backend architecture
* Ledger systems
* MongoDB transactions
* Authentication systems
* Secure backend engineering
* Scalable API design

## Future Improvements

* Role-based access control
* Rate limiting
* Redis caching
* Webhooks & event queues
* Audit logging
* Docker deployment
* Unit & Integration Testing

## Author

Prince Bhauuu
