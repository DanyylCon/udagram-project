# Pipeline steps
- Orbs are imported. Orbs are CircleCI helper programs, which need to be installed for use with Node, AWS CLI and AWS EBS.
- A docker image is created in which CircleCI will run all the instructions
- Environemnt variables which were configured in CircleCI are set up
- NodeJS is installed
- Code is checked out and cloned to CircleCI
- AWS CLI and access to AWS are set up
- AWS EBS is set up
- Run the frontend:install script. Installs all the front end dependencies
- Run the backend:install script. Installs all the back end dependencies
- Run the frontend:build script. Builds the front end and creates the build directory
- Run the backend:build script. Builds the back end and creates the build directory
- Run the frontend:deploy script. Deploys the build directory to AWS S3
- Run the backend:deploy script. Deploys the build directory to AWS EBS

