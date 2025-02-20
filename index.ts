import express from 'express'; // Import express
import { Request, Response } from 'express';
import { AdminRoute, VendorRoute } from './routes';


const app = express(); // Create an express app

app.use('/admin', AdminRoute); // Use the AdminRoute
app.use('/vendor', VendorRoute); // Use the VendorRoute


app.listen(8000, () => {
    console.log('Server is running on port 8000')
})