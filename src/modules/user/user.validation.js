
import joi from 'joi'


const signUpSchema = joi.object({
    userName: joi.string().min(2).max(10).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/),
    rePassword: joi.valid(joi.ref('password')).required(),
    age: joi.number().integer().min(20).max(80).required()
})

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/),
})




export {
    signUpSchema,
    signInSchema
}