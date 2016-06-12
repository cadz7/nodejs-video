### Simple Node.js app that syncs comments made on the video to server

### Made with AngularJS + Node.js + MongoDB

This app contains an embedded video to which a user can post comments.  
Posted comments are stored in a database and are displayed to the user.  
When the video is playing, all comments with a similar timestamp as the video get highlighted.

Sample: nodejs-video-app.herokuapp.com

The app is built to be responsive and should work across various devices.

###App Structure

The App is built using standard Angular directives, controllers, services and UI Router.

Directives:    
commentDir(comment-dir.js) syncs the listed comments with the playing video and highlights those comments posted at time similar to the video's current timestamp.  

Services:  
 main(main-service.js) is responsible for making CRUD requests, integrating and fetching data from Node.js server.   
 main-service is built primarily using Promises.
 server(server-service.js) sends and consume REST API data from the server.  

Controllers:  
 VideoCtrl(video-ctrl.js) sends data and consumes promises from the service layer.
 
Views:  
 home.html is the introductory home page of the application.  
 view.html contains an embedded HTML5 video(.mp4) that runs on Chrome and Safari   browsers.  
 documentation.html contains a small document describing the app workflow.
 
Server:  
server.js is a Node.js/Express.js app that contains routes and connects to a remote MongoDB instance.  
The server app is small enough to contain both routes and models.


Running the App
========

The app can be run via 2 ways.

1. Running 'nodemon server.js' will host the app on localhost:3000
2. Heroku URL: nodejs-video-app.herokuapp.com
