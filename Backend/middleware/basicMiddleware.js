
const jwt = require('jsonwebtoken');

const tokenExtractor = (req ,res , next) =>{
    try {
    const token = req.headers.authorization;
    if(!token){
        return res.status(403).json({message: "Token not found"});
    }
    if(token){
        req.token = token.split(' ')[1];
    }
    jwt.verify(req.token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = user;
    });
    next();
    } catch (error) {
        res.status(500).json({message: "Interal Server Error, Token not Found"})
    }
}

module.exports = { tokenExtractor };