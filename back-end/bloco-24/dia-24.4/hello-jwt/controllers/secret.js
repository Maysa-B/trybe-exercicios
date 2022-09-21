const decoder = require('../middlewares/auth');
const admin = require('../middlewares/admin');

module.exports = (req, res) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ error: { message: 'Token not found' } });

  const decoded = decoder(token);
  const isAdmin = admin(decoded);

  if (!isAdmin) return res.status(401).json({ error: { message: 'restricted access' } });

  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Ararnha' });
};