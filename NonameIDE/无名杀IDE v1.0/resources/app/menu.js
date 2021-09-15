const { remote, shell } = require('electron');
const { BrowserWindow, Menu, dialog } = remote;
const path = require('path');
const contents = remote.getCurrentWindow().webContents;
const fs = require('fs');
let win;

var Menus = [{
	label: '文件',
	submenu: [{
		label: '打开文件',
		accelerator: 'ctrl+o', //绑定快捷键
		click: () => {
			let openDialog = dialog.showOpenDialog(remote.getCurrentWindow(), {
				title: '选择并打开一个js文件',
				properties: ['openFile'],
				defaultPath: localStorage.getItem('noname_path') || __dirname,
				filters: [
				    { name: '*', extensions: ['js', 'css', 'html', 'htm', 'json', 'ts', 'txt'] },
				]
			});
			if (openDialog) openDialog.then(result => {
				if(result.canceled) return;
				let filePath = result.filePaths[0];
				if(fs.existsSync(filePath)){
					localStorage.setItem('editor_filePath', filePath);
					let openFile = new CustomEvent("editor-openFile", {});
					window.dispatchEvent(openFile);
				} else {
					console.error("没有这个文件");
				}
			});
		}
	},{
		label: '格式化代码',
		accelerator: 'ctrl+alt+k', //绑定快捷键
		click: () => {
			if(!window.editor) return;
			window.editor.getAction('editor.action.formatDocument').run();
		}
	},{
		label: '保存',
		accelerator: 'ctrl+s', //绑定快捷键
		click: () => {
			if(!window.editor) return;
			 let value = window.editor.getValue();
			 let path = localStorage.getItem('editor_filePath');
			 fs.writeFile(path, value, (err) => {
			 	if(err) return console.error(err);
			 	return console.log("保存成功");
			 });
			 let menuAs = document.getElementById("editor-tabs").children;
			 for (let i = 0; i < menuAs.length; i++) {
			 	if(path == menuAs[i].getAttribute("filePath")) {
			 		//找到正在保存的文件
			 		menuAs[i].fileValue = value;
					break;
			 	}
			 }
		}
	}]
}, {
	label: '窗口',
	submenu: [{
		label: '重新加载当前窗口',
		role: 'reload',
	}, {
		label: '打开/关闭控制台',
		role: 'toggleDevTools',
	}, {
		type: 'separator' //分割线
	}, {
		label: '全屏模式',
		role: 'togglefullscreen',
	}, {
		label: '最小化',
		role: 'minimize',
	}, {
		type: 'separator' //分割线
	}]
}, {
	label: '操作',
	submenu: [{
		label: '绑定无名杀目录',
		accelerator: 'ctrl+k', //绑定快捷键
		click: () => {
			dialog.showOpenDialog(remote.getCurrentWindow(), {
				title: '选择并打开无名杀应用目录(例如："F:\\无名杀\\resources\\app")',
				properties: ['openDirectory'],
				defaultPath: __dirname
			}).then(result => {
				if(!result.canceled) localStorage.setItem('noname_path', result.filePaths[0]);
			});
		}
	},{
		label: '使用无名杀执行代码',
		accelerator: 'ctrl+j', //绑定快捷键
		click: () => {
			if(!window.editor) return;
			if (!localStorage.getItem('noname_path')) return alert('请先绑定无名杀目录');
			if (win) return alert('请先关闭正在调试的无名杀窗口！');
			let value = window.editor.getValue();
			localStorage.setItem('noname_preloadCode', value);
		
			win = new BrowserWindow({
				width: 1000,
				height: 800,
				autoHideMenuBar: true,
				parent: remote.getCurrentWindow(),
				webPreferences: {
					preload: path.join(__dirname, 'noname', 'preload.js'),
					contextIsolation: false,
					//nodeIntegration: true, //主页面用node
					//enableRemoteModule: true, //可以调用Remote
				},
			})
			win.loadURL(path.join('file://', localStorage.getItem('noname_path'), 'index.html'));
			win.on('closed', () => {
				localStorage.removeItem('noname_preloadCode');
				for(let i in localStorage){
					if(!localStorage.getItem(i)) continue;
					//清除缓存
					if(i.startsWith('noname_0.9_')) localStorage.removeItem(i);
				}
				win = null;
			});
			win.webContents.openDevTools();
		}
	}]
},{
	label: '帮助',
	submenu: [{
		label: 'JavaScript教程',
		click: () => {
			shell.openExternal('https://developer.mozilla.org/zh-CN/docs/learn/JavaScript');
		}
	}, {
		label: '无名杀QQ群合集',
		click: () => {
			shell.openExternal('https://mp.weixin.qq.com/s?__biz=MzUwOTMwMjExNQ==&mid=100009245&idx=1&sn=5671f6f4003d4fae44da3fc09630a759&chksm=7916e1114e616807e6aa34dec69c34ab1096d9ea332e6fb88b4b48116f41a948d907ff00f96b&mpshare=1&scene=23&srcid=0803MuuzUbphhaDV6y8C2noF&sharer_sharetime=1627992420112&sharer_shareid=0ebf733c5192798632ac5cf18bae205c#rd');
		}
	}, {
		label: '版权声明',
		click: () => {
			dialog.showMessageBoxSync(remote.getCurrentWindow(), {
				message: '无名杀作者为水乎。无名杀为开源免费游戏，谨防受骗！！！游戏开源，仅供个人学习，研究之用，请勿用于商业用途',
				type: 'info',
				title: '版权声明',
				icon: 'noname.ico'
			});
		}
	}, {
		label: '关于本应用',
		click: () => {
			dialog.showMessageBoxSync(remote.getCurrentWindow(), {
				message: '本应用使用了VSCode的web版本作为核心，加上独属于无名杀的代码提示（关于提示的文件由雷神Zero大佬花费很久时间编写），愿作为无名杀的最好的专属ide',
				type: 'info',
				title: '关于本应用',
				icon: 'noname.ico'
			});
		}
	}]
}];

Menu.setApplicationMenu(Menu.buildFromTemplate(Menus));