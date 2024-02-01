import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  

const dbconnect = async () => {
    try {
        const connectionInst = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n  MONGODB CONNECTED. DB HOST:${connectionInst.connection.host}`)
    }
    catch (err) {
        console.log("MONGODB CONNCTION FAILED", err)
        process.exit(1)

    }

}

export default dbconnect