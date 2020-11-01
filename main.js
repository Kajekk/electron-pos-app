// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const dbProduct = require('./db/stores/products');
const path = require('path');

const debug = /--debug/.test(process.argv[2]);
if (process.mas) app.setName('Electron test');

let mainWindow = null;

global.dbProduct = dbProduct;

function initialize () {
    makeSingleInstance();
    function createWindow () {
        // Create the browser window.
        const windowOptions = {
            width: 800,
            minWidth: 680,
            height: 600,
            title: app.getName(),
            webPreferences: {
                nodeIntegration: true
            }
        };

        // and load the index.html of the app.
        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow.webContents.openDevTools();
            mainWindow.maximize();
            require('devtron').install()
        }

        mainWindow.on('closed', () => {
            mainWindow = null
        })
    }

    app.on('ready', () => {
        createWindow()
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });

    app.on('activate', () => {
        if (mainWindow === null) {
            createWindow()
        }
    })
}


function makeSingleInstance () {
    if (process.mas) return;

    app.requestSingleInstanceLock();

    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus()
        }
    })
}

initialize();