import express from 'express'; // Import express
import { Request, Response } from 'express';
import { AdminRoute, VendorRoute } from './routes';
import bodyParser from 'body-parser'; // Import body-parser
import mongoose, { ConnectOptions } from 'mongoose';
import { MONGO_URI } from './config';

const app = express(); // Create an express app

app.use(bodyParser.json()); // Use body-parser to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies 

app.use('/admin', AdminRoute); // Use the AdminRoute
app.use('/vendor', VendorRoute); // Use the VendorRoute

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, // Parse URL string
    useUnifiedTopology: true, // Use the new topology engine
    // useCreateIndex: true 
} as ConnectOptions).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err))

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})