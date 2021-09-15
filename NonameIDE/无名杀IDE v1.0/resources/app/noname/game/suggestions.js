//import {_status, lib, game, ui, get, ai} from './game.js';
import * as fun from './game.js';

fun.lib.cheat.i();

// 触发提示的字符
let triggerCharacters = (name) => {
	let arr = [];
	for (let c = 1; c < name.length; c++) {
		arr.push(name.slice(0, c));
	}
	return arr;
};

let game = {
	name: 'game',
	triggerCharacters: triggerCharacters('game'),
	kind: 'Variable', //显示提示内容后的不同的图标
	detail: '由game.js提供',//提示
	property: {
		addCard: {
			name: 'addCard',
			insertText: 'addCard',
			triggerCharacters: ['game.'],
			kind: 'Function', //显示提示内容后的不同的图标
			detail: '添加一张卡牌信息',
		},
		addCardPack: {
			name: 'addCardPack',
			insertText: 'addCardPack',
			triggerCharacters: ['game.'],
			kind: 'Function', //显示提示内容后的不同的图标
			detail: '添加一个卡牌包',
		},
	},
};

export let suggestions = (() => {
	let arr = [];
	arr.push({
		label: game.name, // 显示的提示内容
		kind: monaco.languages.CompletionItemKind[game.kind], 
		// 用来显示提示内容后的不同的图标
		insertText: game.name, // 选择后粘贴到编辑器中的文字
		detail: game.detail ,// 提示内容后的说明
		triggerCharacters: game.triggerCharacters,
	});
	
	for (let objName in game.property) {
		arr.push({
			label: game.property[objName].name, // 显示的提示内容
			kind: monaco.languages.CompletionItemKind[game.property[objName].kind], 
			// 用来显示提示内容后的不同的图标
			insertText: game.property[objName].insertText, // 选择后粘贴到编辑器中的文字
			detail: game.property[objName].detail ,// 提示内容后的说明
			triggerCharacters: game.property[objName].triggerCharacters,
		});
	}
	return arr;
})();