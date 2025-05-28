// backend/seeder.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/admin');

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    const existingAdmin = await Admin.findOne({ email: 'admin@example.com' });

    if (!existingAdmin) {
      const admin = new Admin({
        email: 'admin@example.com',
        password: 'admin123', // This will be hashed by pre-save hook
      });

      await admin.save();
      console.log('✅ Admin user created: admin@example.com / admin123');
    } else {
      console.log('⚠️ Admin already exists');
    }

    process.exit();
  } catch (err) {
    console.error('Seeder error:', err);
    process.exit(1);
  }
};

seedAdmin();
