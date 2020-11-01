const {BrowserWindow} = require('electron').remote
const path = require('path');

$('#create-product-btn').on('click', (event) => {
    const modalPath = path.join('file://', __dirname, '../sections/modal/create-product.html');
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.on('close', () => { win = null });
    win.loadURL(modalPath);
    win.show();
});
