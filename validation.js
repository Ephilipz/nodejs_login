const Joi = require('@hapi/joi');

//Register validation
const registerValidation = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().required().email().min(6),
        password: Joi.string().required().min(6)
    };
    return Joi.validate(data, schema);
};

//Login validation
const loginValidation = (data) => {
    const schema = {
        email: Joi.string().required().email().min(6),
        password: Joi.string().required().min(6)
    };
    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;