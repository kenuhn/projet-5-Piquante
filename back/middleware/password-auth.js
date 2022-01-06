const schema = require('../models/password');

module.exports = (req,res,next)=> { // Middellware pour verirfier la complexité du mot passe à la création de celui-ci
    if (schema.validate(req.body.password)){
        console.log('password valide')
        next();
    }
    else{
        return res
        .status(400)
        .json({error:`le mot de passe ne correspond au schema passsord${schema.validate('req.body.password', { list: true })}` })
    }
}
