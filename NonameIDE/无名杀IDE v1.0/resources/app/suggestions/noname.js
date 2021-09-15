"use strict";
//import { _status, lib, game, ui, get, ai } from './noname/game/game.js';
//$1:生成代码后光标的初始位置.
//$2:生成代码后光标的第二个位置,按tab键可进行快速切换,还可以有$3,$4,$5.....
//${1,字符}:生成代码后光标的初始位置(其中1表示光标开始的序号，字符表示生成代码后光标会直接选中字符。)
export const keyWordsTips = function(range) {
	return [{
		label: 'if(){}',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: ['if (${0:condition}) {', '\t', '}'].join('\n'),
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'if声明',
		range: range,
	}, {
		label: 'if-else',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: ['if (${0:condition}) {', '\t', '} else {', '\t', '}'].join('\n'),
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'if-else声明',
		range: range,
	}, {
		label: 'else-if',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: ['else if (${0:condition}) {', '\t', '}'].join('\n'),
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'else-if声明',
		range: range,
	}, ]
};

export const consoleTips = function(range) {
	return [{
		label: 'clog',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'console.log($0);',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'console.log()',
		range: range,
	}, {
		label: 'cerr',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'console.error($0);',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'console.error()',
		range: range,
	}]
};

export const nonameTips = function(range) {
	return [{
		label: 'glog',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'game.log($0);',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'game.log()',
		range: range,
	},{
		label: 'gprint',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'game.print($0);',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'game.print()',
		range: range,
	},{
		label: 'gfilterPlayer',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'game.filterPlayer(function(current){\n\treturn $0;\n});',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'game.filterPlayer()',
		range: range,
	},{
		label: 'gcountPlayer',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'game.countPlayer(function(current){\n\treturn $0;\n});',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'game.countPlayer()',
		range: range,
	},{
		label: 'ghasPlayer',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'game.hasPlayer(function(current){\n\treturn $0;\n});',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: 'game.hasPlayer()',
		range: range,
	},{
		label: 'triggerSkillTips',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'lib.skill.$1 = {\n\ttrigger: {\n\t\t$2\n\t},\n\tfilter: function(event, player, name) {\n\t\t$3\n\t},\n\tcontent: function(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {\n\t\t$4\n\t},\n};',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: '技能示例',
		range: range,
	},{
		label: 'triggerSkillTips',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'lib.skill.$1 = {\n\ttrigger: {\n\t\t$2\n\t},\n\tfilter: function(event, player, name) {\n\t\t$3\n\t},\n\tcontent: function(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {\n\t\t$4\n\t},\n};',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: '触发技能示例',
		range: range,
	},{
		label: 'enableSkillTips',
		kind: monaco.languages.CompletionItemKind.Snippet,
		insertText: 'lib.skill.$1 = {\n\tusable: $2,\n\tenable: $3,\n\tfilter: function(event, player, name) {\n\t\t$3\n\t},\n\tcontent: function(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {\n\t\t$4\n\t},\n};',
		insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
		detail: '主动技能示例',
		range: range,
	}];
};