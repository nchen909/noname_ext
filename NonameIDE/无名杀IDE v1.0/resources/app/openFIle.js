window.addEventListener("editor-init", async e => {
	//console.log("editor-init");

	//导入代码提示
	const {
		keyWordsTips,
		consoleTips,
		nonameTips,
		/*nonamePlayerChineseTips*/
	} = await import('./suggestions/noname.js');

	monaco.languages.registerCompletionItemProvider('javascript', {
		provideCompletionItems: (model, position) => {
			let word = model.getWordUntilPosition(position);
			let range = {
				startLineNumber: position.lineNumber,
				endLineNumber: position.lineNumber,
				startColumn: word.startColumn,
				endColumn: word.endColumn
			};
			let list = [keyWordsTips, consoleTips, nonameTips].map((val) => {
				return val(range);
			}).flat();
			return {
				suggestions: list
			}
		}
	});

	let loop = (folders, files, name) => {
		for (let i = 0; i < files.length; i++) {
			if (!files[i].endsWith('.d.ts')) continue;
			//只读取.d.ts
			fs.readFile(__dirname + '/' + name + '/' + files[i], {
				encoding: 'utf-8'
			}, (err, str) => {
				if (err) return console.log(err);
				monaco.languages.typescript.javascriptDefaults.addExtraLib(str, __dirname + '/' + name + '/' + files[i]);
			});
		}
		for (let i = 0; i < folders.length; i++) {
			getFileList(name + '/' + folders[i], (foldersx, filesx) => {
				loop(foldersx, filesx, name + '/' + folders[i]);
			});
		}
	};

	let getFileList = function(dir, callback) {
		var files = [],
			folders = [];
		dir = __dirname + '/' + dir;
		if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
			console.error(dir, '不是一个目录');
			return false;
		}
		//dir不是文件夹就不执行
		fs.readdir(dir, function(err, filelist) {
			for (var i = 0; i < filelist.length; i++) {
				if (filelist[i][0] != '.' && filelist[i][0] != '_') {
					if (fs.statSync(dir + '/' + filelist[i]).isDirectory()) {
						folders.push(filelist[i]);
					} else {
						files.push(filelist[i]);
					}
				}
			}
			callback(folders, files);
		});
	};

	//读取noname/interface文件夹下的代码提示
	//自带了electron和cordova的提示
	getFileList('noname/interface', (folders, files) => {
		loop(folders, files, 'noname/interface');
	});

	//读取node_modules/@type/node文件夹下的代码提示
	//打包后执行一下cnpm install @types/node
	getFileList('node_modules/@types/node', (folders, files) => {
		loop(folders, files, 'node_modules/@types/node');
	});

	//加载css
	getFileList('css', (folders, files) => {
		for (let i = 0; i < files.length; i++) {
			let style = document.createElement('link');
			style.rel = "stylesheet";
			style.href = path.join(__dirname, 'css', files[i]);
			document.head.appendChild(style);
		}
	});
});

window.closeFile = (e, li) => {
	e.preventDefault();
	e.stopPropagation();
	//console.log("editor-closeFile");
	
	//保存打开的状态
	let pos = filePathList.indexOf(localStorage.getItem('editor_filePath'));
	if(pos !=- 1){
		filePathList.splice(pos, 1);
		localStorage.setItem('editor_filePathList', JSON.stringify(filePathList));
	}

	let typeGroup = document.getElementById("editor-tabs");
	for (let x = 0; x < typeGroup.childElementCount; x++) {
		let tab = typeGroup.children[x];
		if (tab == li) {
			let tab2 = typeGroup.children[x - 1] || typeGroup.children[x + 1];
			if (tab2) {
				let path = tab2.getAttribute("filePath");
				let type = tab2.getAttribute("fileType");
				monaco.editor.setModelLanguage(window.editor.getModel(), type);
				window.editor.setValue(tab2.fileValue);
				localStorage.setItem('editor_filePath', path);
				localStorage.setItem('editor_fileType', type);
			}
			tab.remove();
			break;
		}
	}

	if (!typeGroup.childElementCount) {
		//销毁
		localStorage.removeItem('editor_filePath');
		localStorage.removeItem('editor_fileType');
		editor.dispose();
		delete window.editor;
	}
}

window.addEventListener("editor-openFile", async e => {
	//console.log("editor-openFile");

	//文件位置
	let filePath = localStorage.getItem('editor_filePath') || path.join(__dirname, 'noname', 'extension', 'example.js');

	//文件语言
	let language;

	//文件名
	let fileName = path.win32.basename(filePath);

	//文件后缀名
	let fileType = path.win32.extname(filePath);
	
	let menuAs = document.getElementById("editor-tabs").children;
	for (let i = 0; i < menuAs.length; i++) {
		let path = menuAs[i].getAttribute("filePath");
		if(path == filePath) {
			//正在打开的文件已经打开过了
			let type = menuAs[i].getAttribute("fileType");
			monaco.editor.setModelLanguage(window.editor.getModel(), type);
			window.editor.setValue(menuAs[i].fileValue);
			localStorage.setItem('editor_filePath', path);
			localStorage.setItem('editor_fileType', type);
			return;
		}
	}

	switch (fileType) {
		case '.js':
			language = 'javascript';
			break;
		case '.ts':
			language = 'typescript';
			break;
		case '.html':
		case '.htm':
			language = 'html';
			break;
		case '.json':
			language = 'json';
			break;
		case '.css':
			language = 'css';
			break;
		//其他文件不用语法提示
		default:
			language = 'plaintext';
	}

	//文件内容
	let value = fs.readFileSync(filePath, {
		encoding: 'utf-8'
	});

	if (window.editor) {
		monaco.editor.setModelLanguage(window.editor.getModel(), language);
		window.editor.setValue(value);
	} else {
		window.editor = monaco.editor.create(document.getElementById('container'), {
			value,
			language,
			theme: 'vs-dark',
			fontSize: '20px',
			tabSize: 4, //缩进
			automaticLayout: true, //编辑器自适应布局
			overviewRulerBorder: false,
			fixedOverflowWidgets: true, // 超出编辑器大小的使用fixed属性显示
			scrollBeyondLastLine: false, //滚动配置，溢出才滚动
			lineNumbersMinChars: 4, //显示行号的位数
			mouseWheelZoom: true,
			minimap: {
				enabled: true
			},
		});
	}

	//保存文件内容
	localStorage.setItem('editor_filePath', filePath);
	//保存文件类型
	localStorage.setItem('editor_fileType', fileType);
	//保存打开的状态
	let pos = filePathList.indexOf(filePath);
	if(pos ==- 1 && filePath != path.join(__dirname, 'noname', 'extension', 'example.js')){
		filePathList.push(filePath);
		localStorage.setItem('editor_filePathList', JSON.stringify(filePathList));
	}

	//创建可拖动选项卡
	let typeGroup = document.getElementById("editor-tabs");
	let fileDIv = typeGroup.appendChild(document.createElement('li'));
	drag(fileDIv);
	fileDIv.setAttribute('draggable', true);
	fileDIv.setAttribute('class', 'tab');
	fileDIv.setAttribute('filePath', filePath);
	fileDIv.setAttribute('fileType', language);
	fileDIv.fileValue = value;
	fileDIv.addEventListener('click', function() {
		//编辑器切换到这个文件
		let path = this.getAttribute("filePath");
		let type = this.getAttribute("fileType");
		monaco.editor.setModelLanguage(window.editor.getModel(), type);
		if (path == localStorage.getItem('editor_filePath')) return;
		window.editor.setValue(this.fileValue);
		localStorage.setItem('editor_filePath', path);
		localStorage.setItem('editor_fileType', fileType);
	});
	fileDIv.innerHTML =
		`
		<div class="icon-default icon-html"></div>
		<span class="tabSpan">${fileName}</span>
		<div class="close codicon-close" onclick="window.closeFile(event, this.parentNode)"></div>
	`;
});

Event.prototype.__defineGetter__("x", function() {
	return this.clientX + 2
});
Event.prototype.__defineGetter__("y", function() {
	return this.clientY + 2
});

function drag(dv) {
	dv.onmousedown = function(e) {
		e.preventDefault();
		e.stopPropagation();
		var d = document;
		e = e || window.event;
		var button;

		//左键才可拖动
		if (e.which == null)
			/**/
			/* IE case */
			button = (e.button < 2) ? "LEFT" : ((e.button == 4) ? "MIDDLE" : "RIGHT");
		else
			/**/
			/* All others */
			button = (e.which < 2) ? "LEFT" : ((e.which == 2) ? "MIDDLE" : "RIGHT");
		if (button != "LEFT") {
			return false;
		}

		var x = e.layerX || e.offsetX;
		var y = e.layerY || e.offsetY;

		dv.xy = getxy(dv);
		dv.mxy = {
			"mx": e.clientX - dv.xy.left,
			"my": e.clientY - dv.xy.top
		}; //鼠标在对象的内部位置

		//设置捕获范围

		if (dv.setCapture) {
			dv.setCapture();
		} else if (window.captureEvents) {
			window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
		}

		//拖动事件是否首次启动  目的：阻止拖动对象上的click事件不被执行
		var dragfirst = true;
		//移动函数
		d.onmousemove = function(e) {
			e = e || window.event;

			if (dragfirst) //拖动事件启动 首次加载
			{
				//在原有位置添加一个层
				//创建层
				var om = document.createElement("li");
				dv.otemp = om;
				om.style.width = dv.xy.width + "px";
				om.style.height = "100%";
				om.style.cssText = "border: 1px dashed #999999; background-color: #eeeeee";
				dv.parentNode.insertBefore(om, dv);

				//设置该对象浮动
				dv.style.position = "absolute";
				dv.oldcss = dv.className;
				dv.className = "touming tab";
				dv.style.cursor = "move";

				dragfirst = false;
			}

			var tx = e.clientX - dv.mxy.mx; //-x;
			var ty = e.clientY - dv.mxy.my; //-y;
			dv.style.position = "absolute";
			dv.style.left = tx + "px";
			// dv.style.top=ty+"px";


			createtmpl(dv, e);

			d.onselectstart = function() {
				return false
			}

		}; //end onmousemove

		window.onfocus = function() {
			document.onmouseup();
		}

		window.onblur = function() {
			document.onmouseup();
		}
		d.onmouseup = function() {
			//取消捕获范围
			if (dv.releaseCapture) {
				dv.releaseCapture();

			} else if (window.captureEvents) {
				window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			}
			if (!dragfirst) {
				dv.otemp.parentNode.insertBefore(dv, dv.otemp);
				dv.otemp.parentNode.removeChild(dv.otemp);
				dv.style.position = "";
				dv.className = dv.oldcss;
				dv.style.cursor = "";
				dv.style.left = "";
			}
			//清除事件
			d.onmousemove = null;
			d.onmouseup = null;
			d.onselectstart = null;
			window.onblur = null;
			window.onfocus = null;
		}; //end onmouseup
	};
} // end function drag(dv)

// 比较，挨个层比较
function createtmpl(dv, e) {
	var menuAs = document.getElementById("editor-tabs").children;
	if(menuAs.length == 1) return false;
	//遍历所有可拖动层
	for (var i = 0; i < menuAs.length; i++) {
		if (menuAs[i] == dv || menuAs[i] == dv.otemp)
			continue;
		var b = inner(menuAs[i], e);
		if (b == "no")
			continue;
		//在左边
		if (b == "left") {
			menuAs[i].parentNode.insertBefore(dv.otemp, menuAs[i]);
		} else //在右边
		{
			if (menuAs[i].nextSibling == null)
				menuAs[i].parentNode.appendChild(dv.otemp);
			else
				menuAs[i].parentNode.insertBefore(dv.otemp, menuAs[i].nextSibling);
		}
	}
	return false;
} // end createtemp

function inner(o, e) {
	var a = getxy(o);
	//判断是否在框里
	//if(e.x>a.left && e.x<(a.left+a.width) && e.y>a.top && e.y<(a.top+a.height))   //判断是否在一个矩形里
	if (e.x > a.left && e.x < (a.left + a.width)) {
		if (e.x < (a.left + a.width / 2))
			return "left";
		else
			return "right";
	} else {
		return "no";
	}
}

// 获取拖动层的 位置和大小
function getxy(o) {
	var t = o.offsetTop;
	var l = o.offsetLeft;
	var w = o.offsetWidth;
	var h = o.offsetHeight;
	while (o = o.offsetParent) {
		t += o.offsetTop;
		l += o.offsetLeft;
	}
	var j = {
		"width": w,
		"height": h,
		"top": t,
		"left": l
	};
	return j;
}
