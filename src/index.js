//console.log("fhij")
import dotenv from "dotenv"

import dbconnect from "./db/index.js";

dotenv.config
({
    path:'./env'
})

dbconnect()

.then(()=>{
    app.listen(process.env.PORT ||4000, ()=>{
        console.log(` server is running at port: ${process.env.PORT}`)
    } )
})
.catch((err)=>{
    console.log("Mongodb db connection failed !!",err)
})