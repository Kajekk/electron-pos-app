const {BrowserWindow} = require('electron').remote;
const path = require('path');


$('.new-window').on('click', (event) => {
    event.preventDefault();

    const modalPath = path.join('file://', __dirname, '../sections/modal/image-to-scan.html')
    let win = new BrowserWindow({
        width: 400,
        height: 320,
        webPreferences: {
            nodeIntegration: true
        }
    });

    var options = {
        silent: true,
        printBackground: false,
        color: false,
        margin: {
            marginType: 'custom',
            top: 0,
            bottom: 0,
            left: 100,
            right: 100,
        },
        landscape: false,
        pagesPerSheet: 2,
        collate: true,
        scaleFactor: 50,
        copies: 1,
        dpi: {
            horizontal: 203,
            vertical: 203,
        },
    };

    win.webContents.on('did-finish-load', () => {
        win.webContents.send('item-code', event.target.dataset.itemCode);
        win.webContents.print(options);
    });

    win.on('close', () => { win = null });
    win.loadURL(modalPath);
    win.show()
});

// var ipcRenderer = require('electron').ipcRenderer;
// ipcRenderer.on('store-data', function (event,store) {
//     console.log(store);
// });

// $('.new-window').each(() => {
//     let item = $(this);
//     item.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         const modalPath = path.join('file://', __dirname, '../sections/modal/image-to-scan.html')
//         let win = new BrowserWindow({ width: 400, height: 320 });
//
//         win.webContents.on('did-finish-load', () => {
//             win.webContents.send('ping', 'whoooooooh')
//         });
//
//         win.on('close', () => { win = null });
//         win.loadURL(modalPath);
//         win.show()
//     })
// });

// newWindowBtn.addEventListener('click', (event) => {
//     const modalPath = path.join('file://', __dirname, '../sections/modal/image-to-scan.html')
//     let win = new BrowserWindow({ width: 400, height: 320 });
//
//     win.webContents.on('did-finish-load', () => {
//         win.webContents.send('ping', 'whoooooooh!')
//     });
//
//     win.on('close', () => { win = null });
//     win.loadURL(modalPath);
//     win.show()
// });