## The Cake Store

It’s all about cakes! The Cake Store is an serverless application built with React, AWS Gateway API, AWS Lambda and AWS DynamoDB. The application allows the user to view and add to a list of favorite cakes.

<img width="1680" alt="screen" src="https://user-images.githubusercontent.com/47988806/95799401-71715500-0cec-11eb-8e08-30e8d627e942.png">

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

#### Installation:

`npm install`

#### To Start Server:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Framework used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Styled Components](https://github.com/styled-components/styled-components), [React Router](https://reactrouter.com/web/guides/quick-start) and [AWS Amplify](https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js).

## API Reference

GET - https://q6wwqjqiel.execute-api.eu-west-2.amazonaws.com/api/cakes<br />
GET - https://q6wwqjqiel.execute-api.eu-west-2.amazonaws.com/api/cakes/{id}<br />
POST - https://q6wwqjqiel.execute-api.eu-west-2.amazonaws.com/api/cakes (with a JSON - it returns what the json contains)<br />
PUT - https://q6wwqjqiel.execute-api.eu-west-2.amazonaws.com/api/cakes/{id}<br />
DELETE - https://q6wwqjqiel.execute-api.eu-west-2.amazonaws.com/api/cakes/{id}<br />

## Reflection

This was a week-long project built as a technical exercise. Project goal included convert the technical requirements into a working website.  

Originally I wanted to build an application that allowed users to see a list of cakes with the image and name of the cake, add a new cake to the list and be able to select/click or tap any cake in the list and be taken to a view where I can see the comment/review made. I started this process by using the `create-react-app` boilerplate, then adding `styled-components` and `AWS Amplify` to handle the API requests.  

One of the main challenges I ran into was to create the API with AWS Gateway API, set up the AWS Lambda functions to call the API and then create the database using AWS DynamoDB. This leads me to spend a few hours planning a better way to display the information coming from the API. Due to project time constraints, I had to decide to not implement the functionality of Edit and Delete a cake.

At the end of the day, the technologies implemented in this project are React, Styled Components, and React Router. I choose to use as fewer frameworks as possible to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration with more time, I would like to implement the Edit and Delete a cake functionality.
