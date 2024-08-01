import  express  from "express";
import cors from "cors"

const server = express()
// middleware
server.use(cors())
server.use(express.json())
server.listen(5000, function(){console.log("listening now")})