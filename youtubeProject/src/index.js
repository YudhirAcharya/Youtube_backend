import mongoose from 'mongoose'
import {DB_NAME} from "./constants"




// // Approach 1

// import express from 'express'
// const app = express()
// ( async () => {

//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=> {
//             console.log("ERR:", error);
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("ERROR: ", error) 

//     }
//     throw err
     
     

// }) ( )