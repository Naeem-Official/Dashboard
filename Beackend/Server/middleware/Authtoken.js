const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret_key_is_Gray_Loops';

const adminMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }
    
    const token = authHeader.split(' ')[1];  // Extract token after "Bearer"
    
    if (!token) {
      return res.status(401).json({ message: 'Token missing after Bearer' });
    }
    
    try {
      const decoded = jwt.verify(token, JWT_SECRET);  // Verify with correct secret
      
      console.log("Decoded token: ", decoded);
      
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
      }
      
      req.user = decoded;
      next();
    } catch (error) {
      console.log("JWT verification error in adminMiddleware: ", error);
      res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { adminMiddleware };
