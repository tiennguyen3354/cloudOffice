import express from 'express';
import { getFiles } from '../controllers/informationController.js'; // this will import the getFiles function from the informationController.js file

//now we make a router that connects to getFiles function
const informationRouter = express.Router(); // this will create a new router instance

informationRouter.get('/files', getFiles); // this will define a GET route for '/files' that calls the getFiles function

export {informationRouter } ;  // this will export the informationRouter so it can be used in other parts of the application 


