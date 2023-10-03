// do not change the reference value of react.

import react from "react";
import registerValidator from 'validatorJs';
// login procedure
//  extract data from request

//  validate data
module.export = {
     login ( req, res ) {
        const { email, password} = req.body ;
        const validate = registerValidator( email, password )
        if(!validate.email){
            return res.status(400).json(" ")
        } else {
            res.status(200).json(" ")
        }
        if(!validate.password){
            return res.status(400)
        }else{

        }

    }
}
console.dir(react.useState)
//  check for user availability for user name or email
//  compare given password to hashed password
//  generate Token and response back for further login
 