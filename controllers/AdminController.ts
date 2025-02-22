import {Request, Response, NextFunction} from 'express'; // Import interfaces from express
import { CreateVendorInput } from '../dto';
import { Vendor } from '../models'
import { GeneratePassword, GenerateSalt } from '../utility';

export const CreateVendor = async (req: Request, res: Response, next: NextFunction): Promise<void>=> {
        const { name, ownerName, password, email, pincode, foodType, phone, address } = req.body as CreateVendorInput;
    
        const existingVendor = await Vendor.findOne({ email: email });
    
        // Generate a salt

        const salt = await GenerateSalt();
        const userPassword = await GeneratePassword(password, salt);
                
        // encrypt the password using the salt

        if(existingVendor) {
            // res.json({ message: "Vendor already exist with this email"})
            res.json({ message: "Vendor already exists with this email" });
        }
        else {                
        const createdVendor = await Vendor.create({
            name: name,
            address: address,
            pincode: pincode,
            foodType: foodType,
            email: email,
            password: userPassword,
            salt: salt,
            ownerName: ownerName,
            phone: phone,
            rating: 0,
            serviceAvailable: false,
            coverImages: [],
        })    
        // res.json(createdVendor)
        res.json(createdVendor);
        }
}

export const GetVendors = async(req: Request, res: Response, next: NextFunction) => {

} 

export const GetVendorById = async(req: Request, res: Response, next: NextFunction) => {

}