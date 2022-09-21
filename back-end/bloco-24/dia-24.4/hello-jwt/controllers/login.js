const Joi = require('joi');
const jwt = require('jsonwebtoken');

const str = Joi.string().min(5).required();
const schema = Joi.object({
  username: str.alphanum(),
  password: str
});

const segredo = 'meusegredotop';

const jwtConfig = {
  expiresIn: '1h',
}

module.exports = (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    const token = jwt.sign({ user: req.body.username, admin: true }, segredo, jwtConfig);
    return res.status(200).json({ token });
  };
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });


  const token = jwt.sign({ user: req.body.username, admin: false }, segredo, jwtConfig);
  res.status(200).json({ token });
};