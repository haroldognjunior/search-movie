First Command:

npm i

Second Command:

npm start

"In this project, we are consuming an API from a free server, which may experience occasional downtimes. If you encounter any issues accessing the API, we recommend running the project locally. To do this, follow these steps:

Create a local environment file: Create a file named .env in the root directory of your project.

Define the API endpoint: In the .env file, add the following line and replace it with the local API endpoint:

REACT_APP_MOVIESDB=http://localhost:4000/movies

Save the changes: Save the .env file with the defined endpoint.

Run the project locally: Open your terminal or command prompt and navigate to the project directory. Then, start your React application by running:

npm start
This will run your project locally, and it will use the local API endpoint defined in the .env file. This way, you can ensure the project's functionality even if the external server experiences downtime."

Feel free to use this text as a guide or incorporate it into your project documentation as needed.
