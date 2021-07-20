# A very simple express app
This is a great course from angela yu held at udemy (not sponsoring anything... I have really learned a lot in this course).
The app takes 2 numbers (not validated yet) and performs an addition.

## Instructions
It is relevant to know that we have to install 3 npm packages to make it work.
```
-npm install express
-npm install -g nodemon
-npm install body-parser
```

The first one ```nodemon``` works as a live express server
The second ```body-parser``` to interpret the post info.

## Inside
The server is allocated in calculator.js. The file holds 

-app.get. this one selects the index.html file to render the form to introduce the numbers.
-app.post. this one catch the information from the index.html form to add the numbers in the server side.
-app.listen. this is checking the localserver connection and responds with a message.

The form is inside index.html and has:
-action="/"
-method="POST"

