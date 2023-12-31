const Joi = require('joi');

const userValidator =  Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required().lowercase(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  profilePic: Joi.string(),
  password : Joi.string().required().min(7).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/).messages({
    'string.min': 'Password must be at least 7 characters long',
    'string.pattern.base':
      'Password must contain at least one uppercase letter, one number, and one special character',
  })
 
});

module.exports = {
    userValidator, 

}
