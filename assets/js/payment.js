const {remote} = require('electron');

const dbInstance = remote.getGlobal('db');

var itemList = [];

function createOrderItemView(content) {
    var template = $('#update-quantity-addition').html();
    let isExisted = false;

    itemList.forEach((item) => {
        if (item === content) {
            isExisted = true;
            return false
        }
        itemList.push(content)
    });

    if (isExisted === true) {
        let itemQuantity = $('#'+content+'-quantity');
        let quantity = itemQuantity.text();
        itemQuantity.text((parseInt(quantity) + 1).toString())
    } else {
        let orderSummaryContent = $('#order-summary-content');
        if (itemList.length === 0) {
            orderSummaryContent.text('');
            itemList.push(content);
        }
        orderSummaryContent.append(template);
        let orderItemQuantity = $('#order-item-quantity');
        let orderItemIncrease = $('#order-item-increase-quantity');
        let orderItemDecrease = $('#order-item-decrease-quantity');
        let itemName = $('#item-name');
        itemName.text(content);
        itemName.attr('id', content);
        orderItemQuantity.attr('id', content+'-quantity');
        orderItemIncrease.on("click", (event) => {
            let itemQuantity = $('#'+content+'-quantity');
            let quantity = itemQuantity.text();
            itemQuantity.text((parseInt(quantity) + 1).toString())
        });
        orderItemDecrease.on("click", (event) => {
            let itemQuantity = $('#'+content+'-quantity');
            let quantity = itemQuantity.text();
            let number = parseInt(quantity) - 1;
            if (number < 0) {
                number = 0
            }
            itemQuantity.text(number.toString())
        });
        orderItemIncrease.attr('id', content+'-increase-quantity');
        orderItemDecrease.attr('id', content+'-decrease-quantity');
    }
}



function clearOrderSummary() {
    $('.order-summary-wrapper2').addClass('hidden');
    // $('#order-summary-content').css('border', '1px solid #e2e8f0')
}

function updateView(inputValue) {
    createOrderItemView(inputValue)
}

document.getElementById('myInput').addEventListener('keyup', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        const inputValue = document.getElementById('myInput').value;
        if (inputValue !== "") {
            document.getElementById('myInput').value = null;
            updateView(inputValue)
        }
    }
});
document.getElementById('myInput').focus();