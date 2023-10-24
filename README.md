## Getting Started

Before you can start using this appliaction you need to set up your environment and configure the necessary parameters. Here's how to get started:

### Prerequisites

Ensure you have MySQL and nodejs installed on your local machine.

### Installation Steps
#### Clone the Repository
- Open your terminal or command prompt.
- Navigate to the directory where you want to install the application
- Clone the repository from GitHub.

``` bash
git clone https://github.com/ringtho/movielist-backend.git
```

#### Install Dependencies
- Change your current directory to the project folder and install project dependencies

``` bash
cd final-assignment-tia
npm install
```

#### Configure MySQL Database
- Create a test_db MySQL database for the project.
- Create a Movies Table for storing the movies with an id field set to auto increment.
- Update the database configuration in the project. Create a .env file and update the following values with your MySQL database information:
``` bash
PORT=8000
HOST=localhost
USER=your_mysql_username
PASSWORD=your_mysql_password
```
```

#### Start the server

``` bash
npm start
```

#### Access the Application
- The application should now be running locally. You can access it at the following URL:

``` bash
http://localhost:8000/
```

Now you have the application running on your local machine, connected to your MySQL database. You can use this local environment for testing and development.



