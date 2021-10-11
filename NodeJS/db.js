const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CrudDB",(err) => {
    if (!err)
    console.log('MongoBD connection succeeded...');
    else
    console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

// mongoose.connect("mongodb://localhost/CrudDB", {});

// mongoose.connection
// .once("open", () => console.log("connection ok"))
// .on("error", error => {
//     console.log("error " , error)
// });