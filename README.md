# Argent-bank

Argent-bank is a new bank which allows users to consult all their activities on their bank account.

# Technologies

- CSS
- JS
- REACT
- REDUX
- MONGODB

# AUTHOR

. CHRIS5477

# SUMMARY

- iNSTALL MONGODB
- INSTALL AND USE API
- INSTALL AND USE APPLICATION **_argent-bank_**
- EXAMPLE API AND RESPONSE

## Install **_MongoDB_**

To install **MongoDB** on your computer, I invite you to refer to the documentation on MongoDB. Below, you will find the links of the documentation according to your operating system

### MongoDB on **windows**

[MongoDB on Window](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### MongoDB on **macOs**

[MongoDB on MacOs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### MongoDB on **Linux**

[MongoDB on Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

## Install and use API

### Install

To install the API, you need to go to github on the following repository [API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).

Then Fork this repository and clone it on your computer.

### Use API

Then , you need to go to the repository `cd (PATH-YOUR-REPO-API)` and run the following command `npm install` to install all the dependencies for good performance.

To populate your database, you can run this command, you can run this command `npm run populate-db`.

Finally use the command `npm run dev:server` to run the server.

## INSTALL AND USE APPLICATION

### Install application

To install application , you need to run this command `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## EXAMPLE API AND RESPONSE

For requests API , we use `axios`. below , you find severals examples of requests

axios.post(""http://localhost:3001/api/v1/user/login"",

{

      "email" : "example@email.com,

      "password" : "*************"

})

.then(response => console.log(response.data))`

Example response

{

    "status": 200,

    "message": "User successfully logged in",

    "body": { "token": "TOKENEXAMPLE" }

}
