## Chef Experience - Express API

- This readme contains info about proyect setup and use
- In this repo you will find a JSON file with all needed endpoints (Chef Experience.Postman), that you can open in Postman
- Also you will find a Postgres Dump for setup the database, more info in database section


## Node version needed

```bash
$ v14.18.3
```

## Install and Run

```bash
# install dependencies
$ npm install

# run the app
$ npm run start

```

## Testing

```bash
# run tests
$ npm run test

```

## Database Connection

```
# This are the common instructions for create a DB from a Dump using postgres (psql) from mac terminal. Generally # you can skip some commands if you already have postgres:

# login 
psql test

# add roles for a user:
CREATE ROLE postgres WITH SUPERUSER CREATEDB 
CREATEROLE LOGIN PASSWORD 'passw0rd'

# create a new database
CREATE DATABASE chef_experience_db

# restore from the dump
psql -U postgres -d chef_experience_db -f chef_experience_db.sql

```

Once you have the DB up, you can edit "src/config/database-config.ts" if you need to change something.


## Proyect structure

- The proyect follows the controller-service-repository pattern. You will find a middleware folder too, and a config folder with additional abstractions. Files are in kebab-case

## DB Diagram

- https://drive.google.com/file/d/1DtQ_i7SWasUm9MG7MAlKyJbnSc9E_LIL/view?usp=sharing

## Basic Usage

- Once you have imported the Postman collection, first you need to call the Register EP, choose a username and a role ("customer" or "chef"). Then, you can call the Login EP with the user and password, and the api will give you a token, that you can configure in the collection options (All the EP's are configured for inherit that token).

- When you need to change the role, simply log with another user and replace the token, you should create a chef and a customer for basic usage.

- Then, as a Chef, you can start to create Meals, and as a Customer you can rate it.

- You can see at any time a list of meals, and filter it by Chef, no matter the role