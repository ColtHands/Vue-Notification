import Ajv from 'ajv'
const ajv = new Ajv()

ajv.addKeyword({
    keyword: 'availibleValues',
    type: 'string',
    validate: (arrayOfValues, keyword) => arrayOfValues.includes(keyword),
    error: {
        message: 'Must contain any of availible values',
        params: ctx => ctx.schema
    }
})

const optionsSchema = {
    type: 'object',
    properties: {
        position: {
            type: 'string',
            availibleValues: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']
        },
        style: {
            type: 'string',
            availibleValues: ['default', 'basic', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark']
        },
        time: { type: 'integer' }
    },
    additionalProperties: false
}

export default ajv.compile(optionsSchema)