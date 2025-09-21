const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (user) => {
  return jwt.sign(
    {
        id: user._id,
        phone : user.phone,
        state : user.state,
        city : user.city,
        lat : user.lat,
        lng : user.lng
        
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

const tokenExtractor = (req , res , next) => {
    let token;
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }
    if (!token) {
        return null;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

        if (err) {
            return null;
        }
        req.user = user;
        next();
    });
}

module.exports = { generateToken, generateHashPassword, comparePassword, tokenExtractor };



