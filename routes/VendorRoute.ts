import express from "express";
import {Response, Request} from "express";


const router = express.Router(); // Create a router

router.get('/', (req: Request, res: Response) => {
    res.send("Hello from Vendor route !!!")
})

export { router as VendorRoute }; // Export the router