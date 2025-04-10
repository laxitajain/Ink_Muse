import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-qeddbk2-shard-00-00.j7qmmvo.mongodb.net:27017,ac-qeddbk2-shard-00-01.j7qmmvo.mongodb.net:27017,ac-qeddbk2-shard-00-02.j7qmmvo.mongodb.net:27017/?ssl=true&replicaSet=atlas-4uy4by-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{
        mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Succesfull");
    }
    catch(error){
        console.log("Error: ", error);
    }
}

export default Connection;