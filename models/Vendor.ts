import mongoose, {Document, Schema, Model} from 'mongoose';

interface VendorDoc extends Document { // This is the interface for the document in the database 
    name: string;
    ownerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailable: boolean;
    rating: number;
    // food: any

}

const VendorSchema = new Schema({
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    foodType: { type: [String]},
    pincode: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean },
    coverImages: { type: Array },
    rating: { type: Number },
    // foods: [{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'Food'
    // }],
},{
    toJSON: {
        transform(doc, ret){
            delete ret.password,
            delete ret.salt,
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps: true
})

const Vendor = mongoose.model<VendorDoc>('vendor', VendorSchema) // This is the model for the database

export { Vendor }