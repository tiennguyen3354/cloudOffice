import {getAllFiles} from  '../config/database.js'; // this will import the getAllFiles function from the database.js file

export const getFiles = (req, res) => {
    const files = getAllFiles(); // this will call the getAllFiles function to retrieve the list of files
    res.json(files); // this will return the list of files as a JSON response
} // this will return the list of files as a JSON response
