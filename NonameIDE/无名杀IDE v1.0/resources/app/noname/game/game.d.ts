//game.import不能识别
//问问 string|undefined
//以后还得定义event, card, player等之类的来代替Object, div

/**lib由game.js提供*/
declare namespace lib {}
/**ui由game.js提供*/
declare namespace ui {}
/**get由game.js提供*/
declare namespace get {}
/**ai由game.js提供*/
declare namespace ai {}
/**_status由game.js提供*/
declare namespace _status {}
/**game由game.js提供*/
declare namespace game {
	/**添加一张卡牌*/
	function addCard(name: string, info: {}, info2: {}): void;
	/**添加一张卡牌包*/
	function addCardPack(pack: {}, packagename: string): void;
	/**添加一个武将*/
	function addCharacter(name: string, info: {}): void;
	/**添加一个武将包*/
	function addCharacterPack(pack: {}, packagename: string): void;
	/**添加一个随从*/
	function addFellow(position: number, character: Array<any>, animation: string): HTMLDivElement;
	/**添加一个全局技能*/
	function addGlobalSkill(skill: {}, player: HTMLDivElement): boolean;
	/**添加一个模式*/
	function addMode(name: string, info: {}, info2: {}): boolean;
	/**场上添加一个玩家
	*@param position 玩家位置
	*@param character 主将名，可无
	*@param character2 副将名，可无
	*/
	function addPlayer(position: number, character?: string, character2?: string): HTMLDivElement;	
	function addRecentCharacter(): void;
	function addRecord(bool: boolean): void;
	/**game.addSkill: 创建一个技能
	 *@param name 技能id
	 *@param info 技能内容
	 *@param translate 技能名
	 *@param description 技能描述
	*/
	function addSkill(name: string, info: {}, translate: string, description: string): boolean;
	/**将一个事件添加到录像里*/
	function addVideo(type: string, player: HTMLDivElement, content: Array<{}>): void;
	/**无名杀专属的alert弹窗*/
	function alert(str: string): void;
	declare namespace animate {
		function window(num: number): void;
		function flame(x: number, y: number, duration: number, type: string): void;
	}
	function arrangePlayers(): void;
	/**单个或多个玩家一起摸牌
	*@param players 角色数组
	*@param num 摸牌数/为每名角色分配摸牌数的数组/函数
	*/
	function asyncDraw(players: Array<HTMLDivElement>, num: number|Array<number>|function(HTMLDivElement)): void;
	/**单个或多个玩家一起摸牌
	*@param players 角色数组
	*@param num 摸牌数/为每名角色分配摸牌数的数组/函数
	*@param drawDeck 一个对象，里面应有drawDeck属性
	*/
	function asyncDrawAuto(players: Array<HTMLDivElement>, num: number|Array<number>|function(HTMLDivElement), drawDeck: {drawDeck: string}): void;
	function broadcast(): void;
	function broadcastAll(): void;
	function cardsDiscard(card: HTMLDivElement|Array<HTMLDivElement>): {};
	function cardsGotoOrdering(card: HTMLDivElement|Array<HTMLDivElement>): {};
	function cardsGotoSpecial(card: HTMLDivElement|Array<HTMLDivElement>, bool: boolean): {};
	function changeLand(url: string, player: HTMLDivElement): void;
	
	//function import(type: string, content: function()): void;
	function importx(type: string, content: function({}, game, {}, {}, {}, {}): {
		/**扩展名*/
		name: string;
		/**扩展主代码
		 *@param config 扩展设置
		 *@param pack 扩展的包
		*/
		content: function({}, {}): void;
		/**扩展启动代码*/
		precontent: function(): void;
		/**扩展config设置*/
		config: {};
		/**扩展武将,卡牌,技能设置*/
		package: {
			character: {
				/**扩展武将
				{
					武将id: 武将信息
				}
				*/
				character: {};
				/**扩展武将名的翻译
				{
					武将id: 武将名翻译
				}
				*/
				translate: {};
			},
			card: {
				/**扩展卡牌
				{
					卡牌id: 卡牌信息
				}
				*/
				card: {};
				/**扩展卡牌名的翻译
				{
					卡牌id: 卡牌名翻译
				}
				*/
				translate: {};
				/**设置牌堆*/
				list: [];
			},
			skill: {
				/**扩展技能
				{
					技能id: {
						trigger: {
							player: 'damageAfter'
						},
						content: function(){
							player.draw();
						}
					}
				}
				*/
				skill: {};
				/**扩展技能的翻译
				{
					技能id: 技能名翻译
					技能id_info: 技能描述
				}
				*/
				translate: {};
			},
			/**扩展介绍*/
			intro: string;
			/**扩展作者*/
			author: string;
			diskURL: string;
			forumURL: string;
			/**扩展版本*/
			version: string;
		};
		/**扩展文件,没用*/
		files: {
			character: string[];
			card: string[];
			skill: string[];
		};
	}): void;
	function loadExtension(obj: {}): void;
}