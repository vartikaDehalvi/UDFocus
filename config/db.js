import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const db = process.env.MONGO_URI;

export const connectDB = async () => {
	try {
		//connect db with an object having urlParser and unifiedTopology
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connection established');
	} catch (error) {
		console.error('Error connecting ' + error + err.message);
	}
};
