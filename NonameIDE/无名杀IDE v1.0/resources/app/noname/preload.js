window.nodb = true;
window.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;
const vm = require("vm");
const fs = require("fs");
const path = require("path");
const exampleScript = new vm.Script(fs.readFileSync(path.join(__dirname, 'extension', 'example.js'), {
		encoding: 'utf-8'
	}), {
	filename: 'extension.js'
});
const fileType = localStorage.getItem('editor_fileType');
const filePath = localStorage.getItem('editor_filePath');
let language;
switch (fileType) {
	case '.js':
	case 'javascript':
		language = 'javascript';
		break;
	case '.css':
	case 'css':
		language = 'css';
		break;
		//其他文件
	default:
		language = '';
}
let script;
if (language == 'javascript' && localStorage.getItem('editor_filePath') != path.join(__dirname, 'extension', 'example.js')) {
	script = new vm.Script(localStorage.getItem('noname_preloadCode') || '', {
		filename: 'extension.js'
	});
} else if(!language){
	script = new vm.Script(`console.log('不能执行${path.win32.basename(filePath)}')`, {
		filename: 'info.js'
	});
}

let Game = undefined;
Object.defineProperty(window, 'game', {
	configurable: true,
	enumerable: true,
	get: () => {
		return Game;
	},
	set: game => {
		Game = game;
		exampleScript.runInThisContext();
		if (script) {
			script.runInThisContext();
		}
		setTimeout(() => {
			if (language == 'css') {
				let style = document.head.appendChild(document.createElement('style'));
				style.innerHTML = localStorage.getItem('noname_preloadCode') || '';
			}
			if (!localStorage.getItem('noname_0.9_loaded')) {
				localStorage.setItem('noname_0.9_loaded', "true");
				game.reload();
			}
			game.removeExtension = () => {
				alert("调试时不能删除扩展");
			};
			window.onbeforeunload = null;
		}, 2000);
	}
});
