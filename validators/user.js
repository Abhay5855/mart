const Joi = require('joi');

const userValidator =  Joi.object({
  email: Joi.string().email().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  profilePic: Joi.string(),
 
});

const passwordValidationSchema = Joi.string().min(6).required();


module.exports = {
    userValidator, 
    passwordValidationSchema, 
}
