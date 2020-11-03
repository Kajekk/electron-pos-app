const {ipcMain, getGlobal} = require('electron').remote;
const dbProductInstance = getGlobal('dbProduct');

ipcMain.on('submitCreateProduct', (e, data) => {
    dbProductInstance.create(data)
});