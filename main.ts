import { app, BrowserWindow, ipcMain, screen } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow = null;
const args = process.argv.slice(1),
  serve = args.some(val => val === '--serve');

const modelPath = path.join(app.getPath('userData'), "model.json");

function createWindow(): BrowserWindow {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve) ? true : false,
      enableRemoteModule : true // true if you want to run 2e2 test or use remote module in renderer context (ie. Angular)
    },
  });

  if (serve) {

    win.webContents.openDevTools();

    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');

  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Validate data directories
  if(fs.existsSync(app.getPath('userData'))) {
    console.log('User data path exists...');
    let modprotype = {
      inbox: {
        items: []
      },
      archive: {
        items: [
          {
            name: "Example archive item",
            history: {
              previousDest: 'inbox',
              metadata: undefined
            }
          }
        ]
      }
    };
    if(fs.existsSync(modelPath)) {
      console.log('Program model exists...');
    } else {
      console.log('Program model does not exist...');
      // TODO: Model migration code
      fs.appendFileSync(modelPath, JSON.stringify(modprotype));
    }
  } else {
    console.log('User data path does not exist...');
    fs.mkdirSync(app.getPath('userData'));
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(createWindow, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}

ipcMain.on('read-model', (evt, arg) => {
  console.log('Read model');
  fs.readFile(modelPath, 'utf8', (_, data) => {
    console.log('Reply model');
    console.log(`Read: ${data}`)
    evt.reply('reply-model', JSON.parse(data));
  });
});

ipcMain.on('save-model', (_, model) => {
  fs.writeFile(modelPath, model, () => {
    console.log(`New model successfully saved as: \n${model}`);
  });
});