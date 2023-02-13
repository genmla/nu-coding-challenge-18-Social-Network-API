# nu-coding-challenge-18-Social-Network-API
Social Network API using MongoDB 

## Description

This application is a back-end mongoDB database with API requests for adding, updating, and deleting users; posting, updating, and deleting toughts by those users; and adding and deleting reactions by users to existing thoughts. We learned how to work with a NoSQL database like MongoDB with this project, utlizing mongoose, and mocked the api requests for a simple social media app with users, posts, and reactions to those posts. 

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
This app requires the installation of [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/). 

To run this project locally, clone the repository, navigate to where the repository is cloned within the command line, type "npm i" to install the package.json file and follow the routes to add data to the mongoDB.

## Usage

Users can view, add, update, and delete users and thoughts to this backend mongoDB databse using the specified routes in the repository and demonstrated in the video. Users can also add or delete friends to existing users and reactions to existing thoughts within the database. 

To view users in the database, or add a new user to the database, perform a get or post request respectively with the following route: 

`/api/users`

![view users](/assets/getUsers.jpg)
![post users](/assets/postUser.jpg)

To view, update, or delete a single user in the database, peform a get, put, or delete request respectively with the following route: 

`/api/users/:userId`

![view single user](/assets/getSingleUser.jpg)
![update single user](/assets/putUser.jpg)
![delete single user](/assets/deleteUser.jpeg)

To add or delete a friend to a user in the database, peform a post or delete request respectively with the following route: 

`/api/users/:userId/friends/:friendId`

![add a friend to single user](/assets/postFriend.jpg)
![delete a friend from single user](/assets/deleteFriend.jpg)

To view thoughts in the database, or add a new thought to the database, perform a get or post request respectively with the following route: 

`/api/thoughts`

![view thoughts](/assets/getThoughts.jpg)
![post thought](/assets/postThought.jpg)

To view, update, or delete a single thought in the database, peform a get, put, or delete request respectively with the following route: 

`/api/thoughts/:thoughtId`

![view single thought](/assets/getSingleThought.jpg)
![update single thought](/assets/putThought.jpg)
![delete single thought](/assets/deleteThought.jpg)

To add a reaction to an existing thought in the database, peform a post request with the following route: 

`/api/thoughts/:thoughtId/reactions`

![add a reaction to single thought](/assets/postReaction.jpg)

To delete a reaction to an existing thought in the database, peform a delete request with the following route: 

`/api/thoughts/:thoughtId/reactions/:reactionId`

![delete a reaction from single thought](/assets/deleteReaction.jpg)

You can [view the link to the video demonstration here](https://drive.google.com/file/d/1pbbFIX8KFhIWXIo805JS_K4zkhBtsg_r/view)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

