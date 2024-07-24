// models/userModel.js

//in-memory storage for users
let users = [];

//Fuction to find a user by username
const findUserByUsername = (username) => {
    //Return the user object if found, otherwise return underfined
    return users.find(user => user.username === username);

}

//Function to add a new user to the in-memory strorage
const addUser = (user) => {
    users.push(user);

}

module.exports = { findUserByUsername, addUser };