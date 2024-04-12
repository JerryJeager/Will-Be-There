import mongoose from "mongoose";

const connect = async () => {
    if(mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected Successfully.");
    } catch(error) {
        console.error("Error connecting to MongoDB:", error); 
        throw new Error("Error connecting to Mongoose");
    }
    
}

export default connect;