const mongoose = require("mongoose");

const connectDb = async() => { 
    try { 
        const connect = await mongoose.connect('mongodb+srv://okoyechukwunonso17:noscarosylva17@sylvacluster.1hqwfzy.mongodb.net/mycontacts-backend');
        console.log(
            "Database connected: ",
             connect.connection.host, 
             connect.connection.name
             );
    }catch (err) { 
        console.log(err);
        process.exit(1);
    } 
};

module.exports =  connectDb;


