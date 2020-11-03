const {getGlobal} = require('electron').remote;
const dbProductInstance = getGlobal('dbProduct');

function getAllProducts() {
    dbProductInstance.readAll().exec(function (err, docs) {
        let template = $('#product-item-template').html();
        let productWrapper = $('#products-wrapper');
        docs.forEach((item) => {
            productWrapper.append(template);

            let itemCode = $('#item-product-code');
            itemCode.attr('data-item-code', item.productCode);
            itemCode.attr('id', item.productCode);
            itemCode.text(item.name)
        });
    });
}

getAllProducts();