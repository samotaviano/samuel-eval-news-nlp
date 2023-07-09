# Evaluate a news article with NLP project
This app evaluate a blog post or article submitted by the user. It uses MeaningCloud's Sentiment Analysis API to get a text snippet, the polarity and subjectivity of the text.
The build tool used in this project is Webpack with all the necessary dependencies and the development and production enviroments.
## The UI
The app has a simple UI that has a header with the logo and a fake navigation button (cause it has only one page), and a simple footer. The main interactive element on the page is the form to insert the url to be evaluated. There's also the results box that displays all the retrieved data from the sentiment analysis API.
All the styling is made with scss files
## Error handling
The app has appropriated error messages when the user submits a blank form, or don't provide a valid url and also if the url can´t be evaluated
## Initializing
In order to initialize the app it's necessary to start de server with `npm run start`and the development or production enviroment, respectively `npm run build-dev`ans `npm run build-prod`
## Testing
It is possible to run basic tests to the js files that run in the client by running `npm run test`
## Future improvments
- Some minor tweeks in the UI - like subtle animations when displaying results or errors
- Storing a list of user analisys