import express from "express";
import {Response, Request, } from "express";
import {CreateVendor, GetVendorById, GetVendors} from '../controllers'; // Import the CreateVendor function from the AdminController
 
const router = express.Router(); // Create a router

router.post('/vendor', CreateVendor); // Create a route for the CreateVendor function
router.get('/vendors', GetVendors); // Create a route for the GetVendors function
router.get('/vendor/:id', GetVendorById); // Create a route for the GetVendorById function

router.get('/', (req: Request, res: Response) => {
    res.send("Hello from Admin route !!!")
})



export {router as AdminRoute}; // Export the router


