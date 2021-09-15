const { app, BrowserWindow } = require('electron');
const path = require('path');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function createWindow() {
	const win = new BrowserWindow({
		width: 1400,
		height: 900,
		title: '无名杀IDE',
		webPreferences: {
			preload: path.join(__dirname, 'menu.js'), //页面运行其他脚本之前预先加载指定的脚本
			nodeIntegration: true, //主页面用node
			contextIsolation: false, //必须为false
			plugins: true, //启用插件
			enableRemoteModule: true, //可以调用Remote
		}
	});
	win.loadURL(`file://${__dirname}/index.html`);
	//win.webContents.openDevTools();
}

app.setPath('home', path.join(__dirname, 'Home'));
app.setPath('appData', path.join(__dirname, 'Home', 'AppData'));
app.setPath('userData', path.join(__dirname, 'Home', 'UserData'));
app.setPath('temp', path.join(__dirname, 'Home', 'Temp'));
app.setPath('cache', path.join(__dirname, 'Home', 'Cache'));
app.setPath('crashDumps', path.join(__dirname, 'Home', 'crashDumps')); //崩溃转储文件存储的目录
app.setPath('logs', path.join(__dirname, 'Home', 'logs')); //日志目录

app.whenReady().then(() => {
	createWindow();
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	app.quit();
});
