//req fs path uuidv1 express
//create var called router and set to express.router()

//create var called dbPath and set it to the path db.json file
// this is path.join method, __dirname, and relative path from ?

//create a get route using router router.get
//endpoint is '/notes'
//in the CB-
// use fs.readFile method to read the db.json file
//if theres an error respond with a 500 (res.status) and the error as json
//otherwise parse the json returned and send it using the res.json method

//create a post route using the router
//the endpoint is '/notes'

//in the cb 
// use fs.readFile method to read the db.json file
//if theres an error respond with a 500 (res.status) and the error as json
//otherwise parse the json returned
//use the req.body and the uuvid1() to create a new obj with values sent
//add the new note you just created to the notes returned from readFile and stringify 
//use the fs.readFile method to write to the db.json file using the updated
    //if err respond with 500 status (res.status) and the rror as
    // otherwise return the new ntoe using res.json

    //create a delete router using the router
    // the endpoint should be '/notes:id'
    //in the CB - 
        // get the id sent in the req using from req.params
        //use the fs.readFIle method to read the db.json file
        // iff err respond with 500 and error as json 
        //otherwise parse
        // filter notes retuenred by the readFile method to include all of the entries whose id doesnt match the id sent
        //stringify the filtered notes
        // use fs.writeFile method to write to the db.json file using the filtered, stringd notes
        //iff err same same
        // otherwise return {ok:true} using res.json

        //export router
