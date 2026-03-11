# Terraform DynamoDB Authentication Project
A simple full-stack project that demonstrates how to provision AWS infrastructure using Terraform and build a basic authentication system using Node.js, Express, and DynamoDB.
This project creates a DynamoDB table using Infrastructure as Code and then connects a web application that allows users to sign up and log in using stored data.
## Project Overview
This project demonstrates:
- Infrastructure provisioning using Terraform
- Backend development using Node.js and Express
- User authentication (Signup & Login)
- Data storage in DynamoDB
- Simple frontend using HTML
- Environment variable management using .env
- Version control ready with .gitignore
## Architecture
User → Frontend (HTML) → Express Server → DynamoDB → Response
Signup Flow:
User enters email and password  
→ Backend receives request  
→ Data stored in DynamoDB  
Login Flow:
User enters credentials  
→ Backend fetches user from DynamoDB  
→ Password verified  
→ Dashboard page shown
## Technologies Used

Infrastructure:
- Terraform
- AWS DynamoDB
Backend:
- Node.js
- Express.js
- AWS SDK
Frontend:
- HTML
- CSS
- JavaScript
Other Tools:
- dotenv
- body-parser
- AWS CLI
## Project Structure
terraform-dynamodb-auth

terraform/
main.tf
variables.tf

app/
server.js

public/
signup.html
login.html
dashboard.html

.env
.gitignore
package.json
README.md
## Prerequisites
Before running this project, make sure you have installed:
- Node.js
- Terraform
- AWS CLI
You also need an AWS account (Free Tier recommended).
## AWS Configuration
Configure AWS credentials using the AWS CLI:
Enter:
AWS Access Key ID
AWS Secret Access Key
Region: eu-north-1
Output format: json
## Infrastructure Setup (Terraform)
Navigate to the Terraform folder:
cd terraform
Initialize Terraform:
terraform init
Preview the infrastructure plan:
terraform plan
Create the DynamoDB table:
terraform apply
Confirm with:
yes
This will create a DynamoDB table named:
users
## Application Setup
Install dependencies:
npm install
Create a `.env` file in the root directory:
PORT=3000
AWS_REGION=us-east-1
DYNAMODB_TABLE=users
## Run the Application
Start the server:
node app/server.js
The server will start on:
http://localhost:3000
## Application Routes
Signup page:
http://localhost:3000/signup.html
Login page:
http://localhost:3000/login.html
Dashboard page:
http://localhost:3000/dashboard.html
## Features
- Terraform based infrastructure
- DynamoDB integration
- User signup
- User login
- Simple dashboard UI
- Environment configuration using `.env`
- Clean project structure
- Ready for GitHub
## Security Note
For simplicity, passwords are stored as plain text in this demo.
In a production environment, you should use:
- bcrypt for password hashing
- JWT for authentication
- HTTPS
- Proper IAM roles
## Cleanup (Avoid AWS Charges)
After finishing the project, destroy the infrastructure:
cd terraform
terraform destroy
## Future Improvements
Possible improvements include:
- Password hashing using bcrypt
- JWT authentication
- Session management
- React frontend
- Deploy to AWS EC2
- CI/CD pipeline
- Docker containerization
## Author
Created as a learning project to demonstrate Infrastructure as Code with Terraform and a simple authentication system using Node.js and DynamoDB.

