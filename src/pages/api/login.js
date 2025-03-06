import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User'; // Your User model
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    await connectToDatabase();

    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found or incorrect information.' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'User not found or incorrect information.' });
        }

        return res.status(200).json({ success: true, message: 'Login successfully.' });
    } else {
        return res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}
