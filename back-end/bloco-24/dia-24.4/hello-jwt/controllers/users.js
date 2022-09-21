const decoder = require('../middlewares/auth');

module.exports = (req, res) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ error: { message: 'Token not found' } });

  const decoded = decoder(token);

  res.status(200).json({ username: decoded.user, admin: decoded.admin });
};