# Project Infrastucture

## Front End
The front end of the project is written in Angular. It is hosted on a AWS S3 bucket which was configured to host
static websites and was made publicly accessible with ACLs. 

## Back end 
The back end of the project is written in NodeJS and Express. It runs on a AWS Elastic Beanstalk Web Server and 
it is the destination of the API calls of the front end. Environment variables where set up in Beanstalk in order
to have access to AWS and other things like RDS and JWT secrets.

## Database
The database of the project is Postgres which runs on AWS RDS. It is accessed by the back end and utilizes evironment
variables to do so.

## CI/CD
Every time a change is made to the main (udagram-project) branch of the project, a CI/CD configuration is triggered
in order to install dependencies, build and deploy the application. This is done by CircleCI, which is connected to
the GitHub repo, it follows the instructions in .circleci/config.yml. The tasks are done by using node, aws cli and
aws elastic beanstalk orbs.