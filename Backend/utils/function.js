const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (user) => {
  return jwt.sign(
    {
        id: user._id,
        phone : user.phone,
        state : user.state,
        city : user.city,
        
    },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
}

const generateHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = { generateToken, generateHashPassword, comparePassword  };



