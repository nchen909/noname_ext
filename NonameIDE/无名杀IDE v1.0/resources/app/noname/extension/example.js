game.import("extension", function (lib, game, ui, get, ai, _status) {
	return {
		name: "示例扩展",
		content: function (config, pack) {
			//将游戏内部的对象暴露到全局中
			lib.cheat.i();
			//控制台输出文件地址
			//console.log('文件地址', localStorage.getItem('editor_filePath'));
		},
		precontent: function () {
			//隐藏联机模式
			lib.config.hiddenModePack.add('connect');
			game.saveConfig('hiddenModePack', lib.config.hiddenModePack);
			//添加扩展
			lib.config.extensions.add("示例扩展");
			//关闭背景音乐
			lib.config.background_music = 'music_off';
			//开发者模式
			lib.config.dev = true;
		},
		config: {
			example: {
				init: true,
				clear: false,
				name: '选项名',
				onclick: function (item) {
					console.log(item);
				},
			}
		},
		help: {},
		package: {
			character: {
				character: {},
				translate: {},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill: {
					example: {
						//技能示例
						trigger: {
							player: 'recoverAfter'
						},
						content: function (event, step, source, player,
							target, targets, card, cards, skill, forced,
							num, trigger, result) {
							//需要这些参数列表才能进行语法提示
							//当然，觉得麻烦可以不用
							player.draw(2);
						}
					},
				},
				translate: {
					example: "示例",
					example_info: "示例技能",
				},
			},
			intro: "扩展介绍",
			author: "诗笺",
			diskURL: "",
			forumURL: "",
			version: "1.0",
		},
		files: {
			"character": [],
			"card": [],
			"skill": []
		}
	}
});
