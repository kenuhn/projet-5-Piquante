const passwordValidator = require('password-validator')

var schema = new passwordValidator();

// Add properties to it
schema
.is().min(6)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 10
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

module.exports = (req,res,next)=> {
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