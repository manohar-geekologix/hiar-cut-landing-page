import connectToDatabase from '../../lib/mongodb';
import Appointment from '../../models/Appointment';

export default async function handler(req, res) {
    const { method } = req;

    await connectToDatabase();

    if (method === 'POST') {
        try {
            const appointment = new Appointment(req.body);
            await appointment.save();
            res.status(200).json({ success: true, message: 'Appointment saved!' });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
