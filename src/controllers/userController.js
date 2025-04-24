const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select('-password')
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments();

    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      users
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getUsers };
