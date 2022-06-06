import Joi from 'joi'

export const schemaEmail = Joi.object({
    email: Joi.string()
        .email({tlds:{allow: false}})
        .empty()
        .messages({
            "string.email": "Formato no válido",
            "string.empty": "Campo obligatorio",
        })
})

export const schemaPassword = Joi.object({
    password: Joi.string()
        .empty()
        .min(6)
        .max(100)
        .alphanum()
        .messages({
            "string.empty": "Campo obligatorio",
            "string.min": "El password debe tener al menos 6 caracteres",
            "string.alphanum": "Deben ser caracteres alfanumericos"
        })
})