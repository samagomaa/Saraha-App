import joi from 'joi'


const messageSchema = joi.object({
    message: joi.string().min(2).max(100).required(),
    receviedId: joi.string().hex().length(24)
})

const paramSchema = joi.object({
    id: joi.string().hex().length(24)
})


export {
    messageSchema,
    paramSchema
}