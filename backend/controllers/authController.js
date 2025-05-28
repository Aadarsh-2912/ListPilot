const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const admin = await Admin.findOne({ email });

    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({
      message: 'Login successful',
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginUser };
