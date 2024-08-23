## Learning Platform API

This API is designed to manage subjects, topics, and learner progress. It allows users to view subjects and topics, track topic completion, and rank learners based on their progress. The API is built with NestJS, TypeORM, and PostgreSQL, and is fully Dockerized for ease of testing.

## Table of Contents

- Installation
- Environment Configuration
- Running the Application
- API Endpoints
- Docker Configuration
- Assumptions

## Installation

Prerequisites

  - Node.js (v14+)
  - npm (v6+)
  - Docker and Docker Compose

## Clone the Repository

```bash
$ git clone https://github.com/MajemiteJames/etap-assesment.git
$ cd learning-platform-api
```

## Installation of Dependencies

```bash
npm install
```

## Environment Configuration

Create a .env file in the root directory and configure it with your environment variables. Here's an example:

```bash
    # Application
    PORT=3000
    NODE_ENV=development

    # Database
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=password
    DB_NAME=learning_platform

    # JWT
    JWT_SECRET=your_secret_key

    # Docker
    DB_HOST=docker_db
```
Ensure you replace DB_USER, DB_PASSWORD, and DB_NAME with your actual PostgreSQL credentials.


## Running the Application

Running Locally

  - Start PostgreSQL: Ensure your PostgreSQL server is running and matches the configuration in your .env file.
  - Run Database Migrations: To set up the database schema, run:

```bash
$ npm run typeorm migration:run
```

- Start the Server:

```bash
$ npm run start:dev

```
The server will start on <http://localhost:3000>.

## Running with Docker

- Build the Docker Containers:

```bash
docker-compose build

```

- Run the Docker Containers:

```bash
docker-compose up

```

The application will be available at <http://localhost:3000>.

## API Endpoints

Authentication

- Sign Up

    - URL: /auth/signup
    - Method: POST
    - Body:

```bash
    {
      "email": "user@example.com",
      "password": "strongpassword",
      "role": "LEARNER"
    }
```
    - Description: Creates a new user account.

- Login

    - URL: /auth/login
    - Method: POST
    - Body:

```bash
    {
      "email": "user@example.com",
      "password": "strongpassword"
    }
```
    - Description: Authenticates a user and returns a JWT.

## Subjects

- Get All Subjects

    - URL: /subjects
    - Method: GET
    - Description: Returns a list of all available subjects.

- Get Topics by Subject

    - URL: /subjects/:subjectId/topics
    - Method: GET
    - Description: Returns a list of topics for a specific subject.

## Topics

- Get Topic Details

    - URL: /topics/:topicId
    - Method: GET
    - Description: Returns details about a specific topic, including the title, video, and description.

## Mark Topic as Complete

    - URL: /topics/complete/:topicId
    - Method: POST
    - Description: Marks a topic as complete for the logged-in user.

## Learners

- Get Learner Rankings for a Subject

    - URL: /subjects/:subjectId/rankings
    - Method: GET
    - Description: Returns a list of learners ranked by their completion rate for a specific subject.

## Docker Configuration

Docker Compose

The docker-compose.yml file is used to configure and run the application with Docker. Here’s an overview:

```bash
version: '3'
services:
  app:
    build:
      context: .
    ports:
      - '3000:3000'
    env_file:
      - .env
    depends_on:
      - db
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: learning_platform
    ports:
      - '5432:5432'
    volumes:
      - db_data:/var/lib/postgresql/data
volumes:
  db_data:
```

## Running Docker

  - Build the Docker Containers:

```bash
docker-compose build
```

- Run the Docker Containers:

```bash
docker-compose up
```

- Stopping Docker Containers:

```bash
docker-compose down
```

## Assumptions

- The application assumes that users have unique email addresses.
- The completion tracking is based on the assumption that a user can complete a topic only once.
- The ranking is based on the completion rate, which is the number of completed topics divided by the total topics in a subject.

