import bcrypt from 'bcrypt';

export const GenerateSalt = async () => {
    return await bcrypt.genSalt(); // Generate a salt for the password encryption
}


export const GeneratePassword = async (password: string, salt: string) => {

    return await bcrypt.hash(password, salt); // Encrypt the password using the salt generated
    
}