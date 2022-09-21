const jwt = require('jsonwebtoken');
const segredo = 'meusegredotop';

module.exports = (token) => {
  const decoded = jwt.decode(token, segredo);
  return decoded;
}