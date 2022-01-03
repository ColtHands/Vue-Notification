import Ajv from 'ajv'
const ajv = new Ajv()

ajv.addKeyword({
    keyword: 'position',
    type: 'string',
    validat: (schema, data) => {
        console.log("AJV ctx", schema, data)
    }
})

const optionsSchema = {
    type: 'object',
    properties: {
        position: { type: 'string' },
        style: { type: 'string' },
        time: { type: 'integer' }
    },
    additionalProperties: false
}

export default ajv.compile(optionsSchema)