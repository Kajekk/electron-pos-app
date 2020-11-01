const productSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        price: {
            type: 'number',
        },
        productCode: {
          type: 'string',
        },
        barcode: {
          type: 'string',
        },
        quantity: {
            type: 'number',
            default: 0,
        },
        categories: {
          type: 'array', items: [
                { "type": "string" }
            ]
        }
    },
};

module.exports = productSchema;
