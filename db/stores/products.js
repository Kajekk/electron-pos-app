const Datastore = require('nedb');
const Ajv = require('ajv');
const productSchema = require('../schemas/product');

class Product {
    constructor() {
        const ajv = new Ajv({
            allErrors: true,
            useDefaults: true
        });

        this.schemaValidator = ajv.compile(productSchema);
        const dbPath = `${process.cwd()}/products.db`;
        this.db = new Datastore({
            filename: dbPath,
            timestampData: true,
            autoload: true,
        });
    }

    validate(data) {
        return this.schemaValidator(data);
    }

    create(data) {
        const isValid = this.validate(data);
        if (isValid) {
            return this.db.insert(data);
        } else {
            return isValid
        }
    }

    read(_id) {
        return this.db.findOne({_id}).exec()
    }

    readAll() {
        return this.db.find({})
    }
}

module.exports = new Product();