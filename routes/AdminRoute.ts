import express from "express";
import {Response, Request} from "express";
 
const router = express.Router(); // Create a router


router.get('/', (req: Request, res: Response) => {
    res.send("Hello from Admin route !!!")
})

export {router as AdminRoute}; // Export the router


