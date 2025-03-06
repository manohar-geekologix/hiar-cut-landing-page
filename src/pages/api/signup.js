import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User'; // Your User model
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    await connectToDatabase();

    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        return res.status(201).json({ success: true, message: 'User registered successfully.' });
    } else {
        return res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}
