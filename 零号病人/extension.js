game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"零号病人",content:function (config,pack){
//var coding=get.config('零号病人_player_number')||8;
//game.saveConfig('零号病人_player_number',config);     
game.saveConfig('player_number',8,'identity');     
			//身份定义:
					lib.translate.PatientZero_human='人类';
					lib.translate.PatientZero_human2='人类';
					lib.translate.PatientZero_virus='病毒';
					lib.translate.PatientZero_interactor_bf_id='交互者';//蝙蝠
					lib.translate.PatientZero_interactor_csj_id='交互者';//穿山甲
					lib.translate.PatientZero_interactor_bc_id='交互者';//白痴
					lib.translate.PatientZero_interactor_hz_id='交互者';//患者
					lib.translate.PatientZero_interactor_bf_id2='蝙蝠';
					lib.translate.PatientZero_interactor_csj_id2='穿山甲';
					lib.translate.PatientZero_interactor_bc_id2='白痴';
					lib.translate.PatientZero_interactor_hz_id2='患者';
					//势力定义
					lib.group.push('PatientZero_human');
    	lib.groupnature.PatientZero_human='thunder';
					lib.group.push('PatientZero_virus');
    	lib.groupnature.PatientZero_virus='fire';
    	lib.group.push('PatientZero_interactor');
    	lib.groupnature.PatientZero_interactor='water';
    	lib.translate.PatientZero_interactor='交互者';
   	 
       var translate={
            "event":"事件",
            "PatientZero_virus1":"病毒",
            "PatientZero_virus2":"病毒",
            "PatientZero_virus3":"病毒",
            "PatientZero_virus4":"病毒",
            "PatientZero_interactor_bf":"蝙蝠",
            "PatientZero_interactor_csj":"穿山甲",
            "PatientZero_interactor_bc":"白痴",
            "PatientZero_human_jz":"记者",
            "PatientZero_human_ys":"医生",
            "PatientZero_human_zj":"专家",
            "PatientZero_human_kdy":"快递员",
            "PatientZero_human_tg":"贪官",             
        };
        for(var i in translate){
        lib.translate[i]=translate[i];
        }
        var characterIntro={
            "PatientZero_virus1":"四个新冠病毒分别有自己的技能，其余玩家只能在游戏中猜测四个病毒分别拥有以下哪个技能<li>1号新冠病毒--【气溶胶】针对有宅技能的玩家，即使不出门仍会起到传播效果。<li>2号新病毒--【潜伏】过一轮之后你可以指定一个身边距离为1的人感染。<li>3号新病毒--【RNA复制】每一轮你可以指定一个病毒将血量翻倍。<li>4号新病毒--【包膜】病毒囊膜的主要功能是帮助病毒进入宿主细胞。##<li>【S亚型】该轮你可以让一名患者失去一点体力<li>【L亚型】你可以让一名患者直接死亡<li>【变异】S亚型，L亚型只能交替发动。",
            "PatientZero_virus2":"四个新冠病毒分别有自己的技能，其余玩家只能在游戏中猜测四个病毒分别拥有以下哪个技能<li>1号新冠病毒--【气溶胶】针对有宅技能的玩家，即使不出门仍会起到传播效果。<li>2号新病毒--【潜伏】过一轮之后你可以指定一个身边距离为1的人感染。<li>3号新病毒--【RNA复制】每一轮你可以指定一个病毒将血量翻倍。<li>4号新病毒--【包膜】病毒囊膜的主要功能是帮助病毒进入宿主细胞。##<li>【S亚型】该轮你可以让一名患者失去一点体力<li>【L亚型】你可以让一名患者直接死亡<li>【变异】S亚型，L亚型只能交替发动。",
            "PatientZero_virus3":"四个新冠病毒分别有自己的技能，其余玩家只能在游戏中猜测四个病毒分别拥有以下哪个技能<li>1号新冠病毒--【气溶胶】针对有宅技能的玩家，即使不出门仍会起到传播效果。<li>2号新病毒--【潜伏】过一轮之后你可以指定一个身边距离为1的人感染。<li>3号新病毒--【RNA复制】每一轮你可以指定一个病毒将血量翻倍。<li>4号新病毒--【包膜】病毒囊膜的主要功能是帮助病毒进入宿主细胞。##<li>【S亚型】该轮你可以让一名患者失去一点体力<li>【L亚型】你可以让一名患者直接死亡<li>【变异】S亚型，L亚型只能交替发动。",
            "PatientZero_virus4":"四个新冠病毒分别有自己的技能，其余玩家只能在游戏中猜测四个病毒分别拥有以下哪个技能<li>1号新冠病毒--【气溶胶】针对有宅技能的玩家，即使不出门仍会起到传播效果。<li>2号新病毒--【潜伏】过一轮之后你可以指定一个身边距离为1的人感染。<li>3号新病毒--【RNA复制】每一轮你可以指定一个病毒将血量翻倍。<li>4号新病毒--【包膜】病毒囊膜的主要功能是帮助病毒进入宿主细胞。##<li>【S亚型】该轮你可以让一名患者失去一点体力<li>【L亚型】你可以让一名患者直接死亡<li>【变异】S亚型，L亚型只能交替发动。",
            "PatientZero_interactor_bf":"病毒传染源",
            "PatientZero_interactor_csj":"病毒中间宿主",
            "PatientZero_interactor_bc":"明知自己被感染病毒还要出来乱跑的人",
            "PatientZero_human_jz":"疫情期间传播正面新闻",
            "PatientZero_human_ys":"可以净化交互者，但很容易被感染",
            "PatientZero_human_zj":"研制新冠疫苗，可查杀病毒",
            "PatientZero_human_kdy":"不得不乘风破浪去送快递",
            "PatientZero_human_tg":"看轻疫情，闲暇时爱吃野味",        
        				};
				for(var i in characterIntro){
        lib.characterIntro[i]=characterIntro[i];
        }
        window.foreval=function(a,b,c){
        if(typeof a!='object'||a==null){ 
        throw 'arguments[0]必须为对象且不为null';
        }        
        for(var i=0;i<a.length;i++){
        if(a[i][b]){
        a[i][b](c);
        }
        }       
        return true;
        };       
        //例子:window.foreval(game.players,'draw',1);所有人摸一张牌
if(lib.brawl) {
lib.brawl.PatientZero={
				name:'零号病人',
				mode:'identity',
				intro:'零号病人<li><a target="_blank" href=\"'+lib.assetURL+'extension/零号病人/PatientZero.html\">点击查看【零号病人】完整介绍</a><li>每名角色每回合只能重铸两次基本牌',//介绍
				showcase:function(init){			
				},				
				init:function(){
				//身份模式
				 game.saveConfig('identity_mode','normal','identity');
				 //禁止自由选身份和座位
				 game.saveConfig('change_identity',false);
				 _status.brawl.noAddSetting=true;
				 //12人
     game.saveConfig('player_number','12','identity');     
     game.saveConfig('layout','long2');
     game.saveConfig('player_height','short');     
     //game.saveConfig('player_height_nova','short');
					lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='9']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='2']{top:calc(100% / 3 - 70px);left:calc(85% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='3']{top:5px;left:calc(75% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='4']{top:0;left:calc(60% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='5']{top:0;left:calc(40% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='6']{top:5px;left:calc(25% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='7']{top:calc(100% / 3 - 70px);left:calc(15% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='8']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='11']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='4']{top:0;left:calc(77% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='5']{top:0;left:calc(59% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='6']{top:0;left:calc(41% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='7']{top:0;left:calc(23% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='8']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='9']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='10']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='12']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='4']{top:0;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='5']{top:0;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='6']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='7']{top:0;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='8']{top:0;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='9']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='10']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='11']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
     //固定单将
					game.saveConfig('double_character',false,'identity');							
					//行动点
					game.addGlobalSkill('PatientZero_skill_chongzhu');
					lib.translate["PatientZero_skill_chongzhu_discard"]="获得行动点";
					lib.skill._chongzhu.usable=2;
					//标志:
					window.PatientZero=true;
				/*	_status.brawl.list=[];
					var myp = lib.characterPack['零号病人'];    
				for (var i in myp) {
					myp[i][4].remove('unseen');
				_status.brawl.list.push(i);							
			}						*/
						//身份定义:
					lib.translate.PatientZero_human='人类';
					lib.translate.PatientZero_human2='人类';
					lib.translate.PatientZero_virus='病毒';
					lib.translate.PatientZero_interactor_bf_id='交互者';//蝙蝠
					lib.translate.PatientZero_interactor_csj_id='交互者';//穿山甲
					lib.translate.PatientZero_interactor_bc_id='交互者';//白痴
					lib.translate.PatientZero_interactor_hz_id='交互者';//患者
					lib.translate.PatientZero_interactor_bf_id2='蝙蝠';
					lib.translate.PatientZero_interactor_csj_id2='穿山甲';
					lib.translate.PatientZero_interactor_bc_id2='白痴';
					lib.translate.PatientZero_interactor_hz_id2='患者';
					//势力定义
					lib.group.push('PatientZero_human');
    	lib.groupnature.PatientZero_human='thunder';
					lib.group.push('PatientZero_virus');
    	lib.groupnature.PatientZero_virus='fire';
    	lib.group.push('PatientZero_interactor');
    	lib.groupnature.PatientZero_interactor='water';
    	lib.translate.PatientZero_interactor='交互者';
   	 
   	 lib.element.content.gameDraw=function(){
					"step 0"
					if(_status.brawl&&_status.brawl.noGameDraw){
						event.finish();
						return;
					}
					var end=player;
					do{				
						player.directgain(get.cards(3));				
						player=player.next;
					}
					while(player!=end);					
					"step 1"
					/*console.log=function(){
					window.alert(arguments[0])
					}
					if(event.changeCard!='disabled'&&!_status.auto){
						event.dialog=ui.create.dialog('是否使用手气卡？');
						ui.create.confirm('oc');
						event.custom.replace.confirm=function(bool){
							_status.event.bool=bool;
							game.resume();
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.changeCard=='once'){
						event.changeCard='disabled';
					}
					else if(event.changeCard=='twice'){
						event.changeCard='once';
					}
					else if(event.changeCard=='disabled'){
						event.bool=false;
						return;
					}
					_status.imchoosing=true;
					event.switchToAuto=function(){
						_status.event.bool=false;
						game.resume();
					}
					game.pause();
					"step 3"
					_status.imchoosing=false;
					if(event.bool){
						if(game.changeCoin){
							game.changeCoin(-3);
						}
						var hs=game.me.getCards('h');
						game.addVideo('lose',game.me,[get.cardsInfo(hs),[],[]]);
						for(var i=0;i<hs.length;i++){
							hs[i].discard(false);
						}
						game.me.directgain(get.cards(hs.length));
						event.goto(2);
					}
					else{
						if(event.dialog) event.dialog.close();
						if(ui.confirm) ui.confirm.close();
						event.finish();
					}					*/
				};
					//新增函数:
					//吃
					lib.element.player.PatientZero_eat=function(target){
					var next=game.createEvent('PatientZero_eat');
					next.player=target;					
					next.source=this;
					next.setContent('PatientZero_eat');
					return next;
				};
				lib.element.content.PatientZero_eat=function(){
					"step 0"
					event.forceDie=true;
					if(_status.roundStart==player){
						_status.roundStart=player.next||player.getNext()||game.players[0];
					}
					if(ui.land&&ui.land.player==player){
						game.addVideo('destroyLand');
						ui.land.destroy();
					}
					var unseen=false;
					if(player.classList.contains('unseen')){
						player.classList.remove('unseen');
						unseen=true;
					}
					var logvid=game.logv(player,'die',source);
					event.logvid=logvid;
					if(unseen){
						player.classList.add('unseen');
					}
					if(source&&source!=player){
						game.log(player,'被',source,'吃掉');
						if(source.stat[source.stat.length-1].kill==undefined){
							source.stat[source.stat.length-1].kill=1;
						}
						else{
							source.stat[source.stat.length-1].kill++;
						}
					}
					else{
						game.log(player,'阵亡')
					}
					
					if(!game.reserveDead){
						for(var mark in player.marks){
							player.unmarkSkill(mark);
						}
						while(player.node.marks.childNodes.length>1){
							player.node.marks.lastChild.remove();
						}
						game.broadcast(function(player){
							while(player.node.marks.childNodes.length>1){
								player.node.marks.lastChild.remove();
							}
						},player);
					}
					for(var i in player.tempSkills){
						player.removeSkill(i);
					}
					var skills=player.getSkills();
					for(var i=0;i<skills.length;i++){
						if(lib.skill[skills[i]].temp){
							player.removeSkill(skills[i]);
						}
					}
						game.broadcastAll(function(player){
						player.classList.add('dead');
						player.removeLink();
						player.classList.remove('turnedover');
						player.classList.remove('out');
						player.node.count.innerHTML='0';
						player.node.hp.hide();
						player.node.equips.hide();
						player.node.count.hide();
						player.previous.next=player.next;
						player.next.previous=player.previous;
						game.players.remove(player);
						game.dead.push(player);
						_status.dying.remove(player);

						if(lib.config.background_speak){
							if(lib.character[player.name]&&lib.character[player.name][4].contains('die_audio')){
								game.playAudio('die',player.name);
							}
							// else if(true){
							else{
								game.playAudio('die',player.name,function(){
									game.playAudio('die',player.name.slice(player.name.indexOf('_')+1));
								});
							}
						}
					},player);

					game.addVideo('diex',player);
					if(event.animate!==false){
						player.$die(source);
					}
					if(player.hp!=0){
						player.changeHp(0-player.hp,false).forceDie=true;
					}
					"step 1"
					if(player.dieAfter) player.dieAfter(source);
					"step 2"
					event.trigger('PatientZero_eat');
					"step 3"
					if(player.isDead()){
						event.cards=player.getCards('hej');
						if(event.cards.length){
							player.lose(event.cards,'visible').forceDie=true;
							player.$throw(event.cards,1000);
							game.log(player,'弃置了',event.cards,event.logvid);
						}
					}
					"step 4"
					if(player.dieAfter2) player.dieAfter2(source);
					"step 5"
					game.broadcastAll(function(player){
						if(game.online&&player==game.me&&!_status.over&&!game.controlOver&&!ui.exit){
							if(lib.mode[lib.configOL.mode].config.dierestart){
								ui.create.exit();
							}
						}
					},player);
					if(!_status.connectMode&&player==game.me&&!_status.over&&!game.controlOver){
						ui.control.show();
						if(get.config('revive')&&lib.mode[lib.config.mode].config.revive&&!ui.revive){
							ui.revive=ui.create.control('revive',ui.click.dierevive);
						}
						if(get.config('continue_game')&&!ui.continue_game&&lib.mode[lib.config.mode].config.continue_game&&!_status.brawl){
							ui.continue_game=ui.create.control('再战',game.reloadCurrent);
						}
						if(get.config('dierestart')&&lib.mode[lib.config.mode].config.dierestart&&!ui.restart){
							ui.restart=ui.create.control('restart',game.reload);
						}
					}

					if(!_status.connectMode&&player==game.me&&!game.modeSwapPlayer){
						// _status.auto=false;
						if(ui.auto){
							// ui.auto.classList.remove('glow');
							ui.auto.hide();
						}
						if(ui.wuxie) ui.wuxie.hide();
					}
					
					if(typeof _status.coin=='number'&&source&&!_status.auto){
						if(source==game.me||source.isUnderControl()){
							_status.coin+=10;
						}
					}
					if(source&&lib.config.border_style=='auto'&&(lib.config.autoborder_count=='kill'||lib.config.autoborder_count=='mix')){
						switch(source.node.framebg.dataset.auto){
							case 'gold':case 'silver':source.node.framebg.dataset.auto='gold';break;
							case 'bronze':source.node.framebg.dataset.auto='silver';break;
							default:source.node.framebg.dataset.auto=lib.config.autoborder_start||'bronze';
						}
						if(lib.config.autoborder_count=='kill'){
							source.node.framebg.dataset.decoration=source.node.framebg.dataset.auto;
						}
						else{
							var dnum=0;
							for(var j=0;j<source.stat.length;j++){
								if(source.stat[j].damage!=undefined) dnum+=source.stat[j].damage;
							}
							source.node.framebg.dataset.decoration='';
							switch(source.node.framebg.dataset.auto){
								case 'bronze':if(dnum>=4) source.node.framebg.dataset.decoration='bronze';break;
								case 'silver':if(dnum>=8) source.node.framebg.dataset.decoration='silver';break;
								case 'gold':if(dnum>=12) source.node.framebg.dataset.decoration='gold';break;
							}
						}
						source.classList.add('topcount');
					}
				};
					//变成患者
					lib.element.player.init_interactor=function(){
					this.storage.PatientZeroName=this.name;
					this.storage.PatientZeroIdentity=this.identity;
					this.identity='PatientZero_interactor_hz_id';
					this.setIdentity('PatientZero_interactor_hz_id');
					this.init('PatientZero_interactor_hz');
					if(arguments&&arguments[0]=='qianfu'){
					this.storage.PatientZeroQianfu=true;
					this.addSkill("PatientZero_skill_liuxing");
					}
					this.addSkill('PatientZero_skill_disable');									 
				 game.log(this.storage.PatientZeroName,'变为了患者，',this.storage.PatientZeroName,'的身份变为了交互者');
			  this.update();
			  var next=game.createEvent('$init_interactor');
     next.player=this;        
     next.setContent(lib.element.event.$init_interactor);
     return next;
					};				
					lib.element.event.$init_interactor=function(){
        event.trigger('$init_interactor');
    };
					//变回人类
					lib.element.player.init_human=function(baichi,die){					
					if(baichi!=true){
					this.removeSkill('PatientZero_skill_disable',true);
					this.init(this.storage.PatientZeroName);
					if(this.storage.PatientZero_skill_zhiliao){
				 if((this.countMark("PatientZero_skill_zhiliao")<this.storage.PatientZero_skill_zhiliao)){				 
					this.addMark("PatientZero_skill_zhiliao",this.storage.PatientZero_skill_zhiliao-this.countMark("PatientZero_skill_zhiliao"));
					}
					else{
					this.removeMark("PatientZero_skill_zhiliao",this.countMark("PatientZero_skill_zhiliao")-this.storage.PatientZero_skill_zhiliao);
					}
					}
					if(die){
					this.identity=this.storage.PatientZeroIdentity;
					game.log(this,'的身份变为了人类');
					}
					if(this.storage.PatientZeroName=='PatientZero_human_zj'){
					this.awakenSkill('PatientZero_skill_fusheng');
					this.addSkill('PatientZero_skill_yimiao');
					game.log(this,'失去了【复生】，获得了【疫苗】');
					}
					}
					else{
					this.clearSkills();
					this.identity='PatientZero_human';
					this.changeGroup('PatientZero_human');
					this.setIdentity('PatientZero_human');
					game.log(this,'的身份变为了人类');
					this.update();
					}
					delete this.storage.PatientZeroQianfu;
					};								     
     //技能	 		
     lib.skill.PatientZero_skill_disable={
     init:function (player,skill){
					var skills=player.getSkills(true,false);
					for(var i=0;i<skills.length;i++){
						if(get.skills[i]||lib.skill[skills[i]].charlotte){
							skills.splice(i--,1);
						}
					}
					skills.remove('PatientZero_skill_huanzhe');
					skills.remove('PatientZero_skill_liuxing');
					player.disableSkill(skill,skills);
				},
				onremove:function (player,skill){
					player.enableSkill(skill);
				},
				mark:true,
				locked:true,
				intro:{
					content:function (storage,player,skill){
						var list=[];
						for(var i in player.disabledSkills){
							if(player.disabledSkills[i].contains(skill)){
								list.push(i)
							}
						}
						if(list.length){
							var str='失效技能：';
							for(var i=0;i<list.length;i++){
								if(lib.translate[list[i]+'_info']){
									str+=get.translation(list[i])+'、';
								}
							}
							return str.slice(0,str.length-1);
						}
					},
				},
     };
     lib.translate.PatientZero_skill_disable='封印';
				lib.skill['_PatientZero_1']={
					forced:true,
					trigger:{global:'dieBegin'},
        forced:true,
        filter:function(event,player){
        return player==_status.event.player&&player.identity=='PatientZero_interactor_hz_id';        
        },
        content:function(){
        player.init_human(false);
    },    
				};
},    	
content:{
submode:'normal',
list:['PatientZero_virus1','PatientZero_virus2','PatientZero_virus3','PatientZero_virus4','PatientZero_interactor_bf','PatientZero_interactor_csj','PatientZero_interactor_bc','PatientZero_human_jz','PatientZero_human_ys','PatientZero_human_zj','PatientZero_human_kdy','PatientZero_human_tg'],
chooseCharacterFixed:true,
chooseCharacterAi:function(player){
							_status.brawl.list.remove(game.me.name);
							player.init(_status.brawl.list.randomRemove());
},
chooseCharacter:function(){						
							_status.brawl.list.randomSort();
							return _status.brawl.list;						
},
cardPile:function(list){
						game.identityVideoName='零号病人';					
      var list2=[];
      //花色，点数，卡牌名
      for(var i=1 ; i<7 ; i++){
      list2.push( [ "diamond" , i , "PatientZero_card_kouzhao"] )
      }
      for(var i=7 ; i<14 ; i++){      
      list2.push( [ "diamond" , i , "PatientZero_card_kouzhao2"] );
      }     
      for(var i=2 ; i<14 ; i++){
      list2.push( [ "spade" , i , "PatientZero_card_chuanbo"] );      
      if(i>=8) list2.push( [ "spade" , i , "PatientZero_card_chuanbo"] );      
      }     
      for(var i=2 ; i<8 ; i++){
      list2.push( [ "spade" , i , "PatientZero_card_jiujing"] );      
      }
      list2.push( [ "spade" , 1 , "PatientZero_card_linghao"] );
      list2.push( [ "spade" , 1 , "PatientZero_card_linghao"] );
      
      list2.push( [ "heart" , 13 , "PatientZero_card_malasong"] );
      list2.push( [ "heart" , 13 , "PatientZero_card_malasong"] );
      for(var i=6 ; i<13 ; i++){
      list2.push( [ "heart" , i , "PatientZero_card_malasong"] );
      }
      
      list2.push( [ "heart" , 1 , "PatientZero_card_geli"] );
      
       for(var i=2 ; i<8 ; i++){
      list2.push( [ "club" , i , "PatientZero_card_shichang"] );      
      }
      for(var i=8 ; i<10 ; i++){
      list2.push( [ "heart" , i , "PatientZero_card_shichang"] );      
      }
      
      list2.push( [ "heart" , 1 , "PatientZero_card_wanhui"] );
      
      list2.push( [ "club" , 1 , "PatientZero_card_shelun"] );
      for(var i=2 ; i<7 ; i++){
      list2.push( [ "club" , i , "PatientZero_card_shelun"] );      
      }
      
      list2.push( [ "club" , 1 , "PatientZero_card_zuanshi"] );
      
      list2.push( [ "club" , 2 , "PatientZero_card_kuaidifugong"] );
      list2.push( [ "diamond" , 1 , "PatientZero_card_kuaidifugong"] );
      list2.push( [ "diamond" , 7 , "PatientZero_card_kuaidifugong"] );
      list2.push( [ "diamond" , 10 , "PatientZero_card_kuaidifugong"] );
      
      for(var i=8 ; i<14 ; i++){
      list2.push( [ "club" , i , "PatientZero_card_shiweijieru"] );      
      }
      
      for(var i=2 ; i<4 ; i++){
      list2.push( [ "heart" , i , "PatientZero_card_zhuanjiazhengming"] );      
      list2.push( [ "heart" , i , "PatientZero_card_zhuanjiazhengming"] );      
      }
      
      list2.push( [ "heart" , 4 , "PatientZero_card_huoshenshan"] );      
      list2.push( [ "heart" , 4 , "PatientZero_card_huoshenshan"] ); 
           
      list2.push( [ "heart" , 5 , "PatientZero_card_kongcheng"] );   
      for(var i=11 ; i<14 ; i++){
      list2.push( [ "diamond" , i , "PatientZero_card_kongcheng"] );      
      }   
      
      for(var i=2 ; i<6 ; i++){
      list2.push( [ "club" , i , "PatientZero_card_3E"] );      
      }
      for(var i=6 ; i<14 ; i++){
      list2.push( [ "club" , i , "PatientZero_card_zhai"] );      
      }
      for(var i=5 ; i<13 ; i++){
      list2.push( [ "heart" , i , "PatientZero_card_zhai"] );      
      } 
      list2.randomSort();
      return list2;
      },
gameStart:function(){
 for(var i=0;i<game.players.length;i++){   
     var id=game.players[i].group;
     if(id=='PatientZero_human'){     
     game.players[i].identity='PatientZero_human';
     game.players[i].setIdentity();
     game.players[i].node.identity.dataset.color='thunder';
     }
     else if(id=='PatientZero_virus'){
     game.players[i].identity='PatientZero_virus';
     game.players[i].setIdentity();
     game.players[i].node.identity.dataset.color='fire';
     }
     else {
     game.players[i].identity=game.players[i].name+'_id';
     game.players[i].setIdentity();
     game.players[i].node.identity.dataset.color='water';
     }					
}
game.zhu.maxHp=lib.character[game.zhu.name][2];
game.zhu.update();
//lib.characterPack['PatientZero'].PatientZero_interactor_hz=["none","PatientZero_human",2,['PatientZero_skill_huanzhe'],[]];
lib.character.PatientZero_interactor_hz=["none","PatientZero_human",2,['PatientZero_skill_huanzhe'],["ext:/零号病人/PatientZero_interactor_hz.png"]];
lib.translate.PatientZero_interactor_hz='患者';
lib.characterIntro.PatientZero_interactor_hz="被病毒感染的人";
//game.showIdentity();

	  game.checkResult=function (){	  
	  var identity=get.population;
	  var human='PatientZero_human';
	  var virus='PatientZero_virus';
	  var interactorbf='PatientZero_interactor_bf_id';//蝙蝠
	  var interactorcsj='PatientZero_interactor_csj_id';//穿山甲
	  var interactorbc='PatientZero_interactor_bc_id';//白痴
	  var interactorhz='PatientZero_interactor_hz_id';//患者
	  var meidentity=game.me.identity;
	  var list=[human,virus,interactorbf,interactorcsj,interactorbc,interactorhz];
	  //无效条件1:人类存活且病毒存活
	  if(identity(human)>0&&identity(virus)>0){return;};
	  //无效条件2:患者存活且病毒存活
	  if(identity(interactorhz)>0&&identity(virus)>0){return;};
	  //无效条件3:白痴存活且病毒存活
	  if(identity(interactorbc)>0&&identity(virus)>0){return;};
	  //无效条件4:穿山甲存活且病毒人类存活
	  if(identity(interactorcsj)>0&&identity(virus)>0&&identity(human)>0){return;};
	  //无效条件5:人类病毒存活且蝙蝠存活
	  if(identity(interactorbf)>0&&identity(human)>0&&identity(virus)>0){return;};
	  //有效，进行结算:
	 for(var i=0;i<list.length;i++){
	  if(meidentity==list[i]){
	   if(i==0||i==5){//人类和患者的条件:
	   game.over(identity(virus)<=0);break;//无病毒则胜利，否则失败
	   }
	   if(i==1){//病毒的条件:
	   game.over(identity(human)<=0&&identity(interactorhz)<=0);break;
	   //无人类和患者则胜利，否则失败
	   }	   
	   if(i==2){//蝙蝠的条件:
	   game.over(game.me.isAlive()&&identity(virus)>0);break;
	   //有病毒且自己存活
	   }
	   if(i==3){//穿山甲的条件:
	   game.over(game.me.isAlive()&&identity(human)>0);break;
	   //有人类且自己存活
	   }
	   if(i==4){//白痴的条件
	   game.over(game.me.group==human&&identity(virus)<=0);break;
	   //自己变成人类且无病毒
	   }
	  }
	  }
	  //防止别人强行用别的身份，其他身份不显示结果
	  game.over();
	  };
	  //态度修改
	  get.attitude = function(from,to){
              var identity1 = from.identity,
                  identity2 = to.identity;
              switch(identity1){
                case 'PatientZero_human':
                  switch(identity2){
                    case 'PatientZero_human':return 10;break;
                    case 'PatientZero_interactor_csj_id':return 10;break;
                    case 'PatientZero_interactor_hz_id':return 10;break;
                    case 'PatientZero_interactor_bc_id':return 8;break;
                    case 'PatientZero_interactor_bf_id':return -6;break;
                    case 'PatientZero_virus':return -10;   break;                 
                  }
                  break;
                case 'PatientZero_interactor_csj_id':
                  switch(identity2){
                    case 'PatientZero_human':return 10;break;
                    case 'PatientZero_interactor_csj_id':return 10;break;
                    case 'PatientZero_interactor_hz_id':return 10;break;
                    case 'PatientZero_interactor_bc_id':return 10;break;
                    case 'PatientZero_interactor_bf_id':return -5;break;
                    case 'PatientZero_virus':return -10;       break;
                  }
                  break;
                case 'PatientZero_interactor_hz_id':
                  switch(identity2){
                    case 'PatientZero_human':return 10;break;
                    case 'PatientZero_interactor_csj_id':return 10;break;
                    case 'PatientZero_interactor_hz_id':return 10;break;
                    case 'PatientZero_interactor_bc_id':return 10;break;
                    case 'PatientZero_interactor_bf_id':return -5;break;
                    case 'PatientZero_virus':return -10;       break;
                  }
                  break;
                case 'PatientZero_interactor_bc_id':
                  switch(identity2){
                    case 'PatientZero_human':return 10;break;
                    case 'PatientZero_interactor_csj_id':return 10;break;
                    case 'PatientZero_interactor_hz_id':return 10;break;
                    case 'PatientZero_interactor_bc_id':return 10;break;
                    case 'PatientZero_interactor_bf_id':return -5;break;
                    case 'PatientZero_virus':return -10;       break;
                  }
                  break;
                  case 'PatientZero_interactor_bf_id':
                  switch(identity2){
                    case 'PatientZero_human':return -10;break;
                    case 'PatientZero_interactor_csj_id':return -10;break;
                    case 'PatientZero_interactor_hz_id':return -10;break;
                    case 'PatientZero_interactor_bc_id':return -10;break;
                    case 'PatientZero_interactor_bf_id':return 10;break;
                    case 'PatientZero_virus':return 10;       break;
                  }
                  break;
                  case 'PatientZero_virus':
                  switch(identity2){
                    case 'PatientZero_human':return -10;break;
                    case 'PatientZero_interactor_csj_id':return -10;break;
                    case 'PatientZero_interactor_hz_id':return -8;break;
                    case 'PatientZero_interactor_bc_id':return -5;break;
                    case 'PatientZero_interactor_bf_id':return 5;break;
                    case 'PatientZero_virus':return 10;       break;
                  }
                  break;
              }
              return -1;
            };		
},
},
};
}  
  
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "PatientZero_virus1":["none","PatientZero_virus",2,["PatientZero_skill_virus"],[]],
            "PatientZero_virus2":["none","PatientZero_virus",2,["PatientZero_skill_virus"],[]],
            "PatientZero_virus3":["none","PatientZero_virus",2,["PatientZero_skill_virus"],[]],
            "PatientZero_virus4":["none","PatientZero_virus",2,["PatientZero_skill_virus"],[]],
            "PatientZero_interactor_bf":["none","PatientZero_interactor",2,["PatientZero_skill_bf"],[]],
            "PatientZero_interactor_csj":["none","PatientZero_interactor",2,["PatientZero_skill_csj"],[]],
            "PatientZero_interactor_bc":["none","PatientZero_interactor",2,["PatientZero_skill_baichi"],[]],
            "PatientZero_human_ys":["none","PatientZero_human",Infinity,["PatientZero_skill_zhiliao"],[]],
            "PatientZero_human_jz":["none","PatientZero_human",Infinity,["PatientZero_skill_xinwen"],[]],
            "PatientZero_human_zj":["none","PatientZero_human",Infinity,["PatientZero_skill_yanjiu","PatientZero_skill_fusheng"],[]],
            "PatientZero_human_kdy":["none","PatientZero_human",Infinity,["PatientZero_skill_kuaidi","PatientZero_skill_liuxing"],[]],
            "PatientZero_human_tg":["none","PatientZero_human",Infinity,["PatientZero_skill_tanguan","PatientZero_skill_tanguan2","PatientZero_skill_tanlan"],[]],
        },
        translate:{
        },
        characterIntro:{
        },
    },
    card:{
        card:{
            "PatientZero_card_kouzhao":{
                audio:true,
                type:"basic",
                cardcolor:"red",
                notarget:true,
                nodelay:true,
                chongzhu:function (event,player){
                    var List=['PatientZero_human'];
                    return List.contains(player.identity)==false;
                },
                content:function (){
        event.result='shaned';
        event.getParent().delayx=false;
        game.delay(0.5);
    },
                ai:{
                    basic:{
						useful:[5,1],
						value:[5,1],
					},
                    result:{
                        player:1,
                        target:-1,
                    },
                },
                fullskin:true,
            },
            "PatientZero_card_kouzhao2":{
                audio:true,
                fullskin:true,
                type:"basic",
                cardcolor:"red",
                notarget:true,
                nodelay:true,
                chongzhu:function (event,player){
                    var List=['PatientZero_human'];
                    return List.contains(player.identity)==false;
                },
                content:function (){
        event.result='shaned';
        event.getParent().delayx=false;
        game.delay(0.5);
    },
                ai:{
                    basic:{
						useful:[5,1],
						value:[5,1],
					},
                    result:{
                        player:1,
                    },
                },
            },
            "PatientZero_card_malasong":{
                audio:true,
                fullskin:true,
                type:"basic",
                cardcolor:"red",
                notarget:true,
                nodelay:true,
                chongzhu:function (event,player){
                    var List=['PatientZero_virus'];
                    return List.contains(player.identity)==false;
                },
                content:function (){
        event.result='shaned';
        event.getParent().delayx=false;
        game.delay(0.5);
    },
                ai:{
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                    result:{
                        player:3,
                        target:-1,
                    },
                },
            },
            "PatientZero_card_geli":{
                audio:true,
                fullskin:true,
                type:"basic",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                if(List.contains(_status.event.player.identity)) return false;
                return true
                },
                chongzhu:function (event,player){
                    var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                    return List.contains(player.identity);
                },
                filterTarget:function (card,player,target){   
    var id=target.identity;
    return id=='PatientZero_interactor_bc_id'||id=='PatientZero_interactor_hz_id';       
    },
                selectTarget:1,
                content:function (){
        target.addTempSkill('baiban',{player:'phaseAfter'});
    },
                ai:{
                    wuxie:function (){
            return 3;
        },
                    basic:{
                        useful:3,
                        value:3,
                        order:5,
                    },
                    result:{
                        target:function (player,target){                        
            return get.attitude(player,target);    
        },
                        player:2,
                    },
                },
            },
            "PatientZero_card_jiujing":{
                audio:true,
                fullskin:true,
                type:"basic",
                enable:function (event){
                //console.log(_status.event) 
                return true
                },
                chongzhu:function (event,player){
                    var List=['PatientZero_human'];
                    return List.contains(player.identity)==false;
                },
                filterTarget:function (card,player,target){
  //  if(target.identity=='PatientZero_human') {return false;}
    var id=target.identity;
    return id=='PatientZero_virus'||id=='PatientZero_interactor_bc_id'||id=='PatientZero_interactor_csj_id'||id=='PatientZero_interactor_bf_id';       
    },
                content:function (){
        target.loseHp();
    },
                ai:{
                    basic:{
                        useful:3,
                        value:3,
                        order:5,
                    },
                    result:{
                        target:-2,
                        player:1,
                    },
                },
            },
            "PatientZero_card_wanhui":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                               if( List.contains(_status.event.player.identity)==false ) return false;                
                return true
                },
                filterTarget:function (card,player,target){                                        
    var id=target.name;
    return id=='PatientZero_human_tg';
    },
                content:function (){
        target.init("PatientZero_interactor_bc");
    },
                ai:{
                    basic:{
                        useful:3,
                        value:3,
                        order:5,
                    },
                    result:{
                        target:function (player,target){
                        if(get.attitude(player,target)<0){
            return 0;    
            } 
            return 10;
        },
                        player:2,
                    },
                },
            },
            "PatientZero_card_shichang":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                return true
                },
                selectTarget:1,
                filterTarget:function (card,player,target){    
      var id=target.identity;
      if(id=='PatientZero_virus') return game.hasPlayer(function(current){
      return current.identity=='PatientZero_interactor_csj_id';
      });
      if(id=='PatientZero_human') return game.hasPlayer(function(current){
      return current.identity=='PatientZero_interactor_bf_id';
      });
      return false;
    },
                content:function (){
                var id=target.identity;
                var playerx;
      if(id=='PatientZero_virus') playerx = game.filterPlayer(function(current){
      return current.identity=='PatientZero_interactor_csj_id';
      })[0];
      if(id=='PatientZero_human') playerx = game.filterPlayer(function(current){
      return current.identity=='PatientZero_interactor_bf_id';
      })[0];
        playerx.discardPlayerCard(true,'h',target);
    },
                ai:{
                    basic:{
                        useful:3,
                        value:3,
                        order:5,
                    },
                    result:{
                        target:function (player,target){                      
            return -2;
        },
                        player:2,
                    },
                },
            },
            "PatientZero_card_shelun":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_virus','PatientZero_interactor_bf_id'];
                if(!List.contains(_status.event.player.identity)) return false;
                return true
                },
                selectTarget:-1,
                filterTarget:function (card,player,target){       
        return player.identity!=target.identity&&target.identity=='PatientZero_human';
    },
                content:function (){                
                target.randomDiscard('he');
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:-2,
                        player:3,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_chuanbo":{
                audio:true,
                fullskin:true,
                type:"basic",
                enable:function (event){
                //console.log(_status.event) 
                if(_status.event.player.identity=='PatientZero_human') {return false;}
                return true
                },
                chongzhu:function (event,player){
    return player.identity=='PatientZero_human';
    },
                selectTarget:1,
                filterTarget:function (card,player,target){
                return target.identity!=player.identity;
    },
                content:function (){
    'step 0'
    if(target.identity=='PatientZero_human'){
    var num=target.storage.PatientZero_card_kuaidifugong;    
    var next=target.chooseToUse('请使用'+ (isNaN(num+1) ? 1 : num)+'个口罩抵消此次感染');
    next.set('ai2',function(card){    
     return 10;
    });
    next.set('ai1',function(card){    
     return 10;
    });
    next.set('filterCard',function(card){
    if(get.name(card)!='PatientZero_card_kouzhao'&&get.name(card)!='PatientZero_card_kouzhao2') return false;
    return true;    
    });   
    next.autochoose=function (){				
				return false;
			};
			next.filterTarget=undefined;
    }
    else{target.loseHp();event.finish();return;}    
    'step 1'
    if(!result.bool){
        game.log(target,'没有使用口罩');
        target.init_interactor();
    }
    else if(target.storage.PatientZero_card_kuaidifugong){
    target.storage.PatientZero_card_kuaidifugong--;
    event.goto(0)
    }
    },
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:8,
                        value:9.5,
                    },
                    result:{
                        target:function(player,target){
                        var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                        if( List.contains(player.identity)&&(target.name=='PatientZero_human_ys'||target.name=='PatientZero_human_zj') ) return -10;
                        else return -1;
                        },
                    },
                },
            },
            "PatientZero_card_zhai":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                if(_status.event.player.identity!='PatientZero_human') {return false;}
                return true
                },
                selectTarget:1,
                cardcolor:"red",
                toself:true,
                filterTarget:function (card,player,target){
                return target==player
                },
                content:function (){
                target.addTempSkill('PatientZero_skill_zhai',{player:'phaseUseBegin'});
                var evt=_status.event.getParent('phaseUse');
        if(evt){
            game.resetSkills();
            _status.event=evt;
            _status.event.finish();
            _status.event.untrigger(true);
        }
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_linghao":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //game.log(_status.event.player)
                return true
                },
                filterTarget:function (card,player,target){
        return target.identity!=player.identity;
    },
                content:function (){
        "step 0"
        if(event.turn==undefined) event.turn=target;
        if(typeof event.baseDamage!='number') event.baseDamage=1;
        if(typeof event.extraDamage!='number'){
            event.extraDamage=0;
            if(!event.shaReq) event.shaReq={};
            if(typeof event.shaReq[player.playerid]!='number') event.shaReq[player.playerid]=1;
            if(typeof event.shaReq[target.playerid]!='number') event.shaReq[target.playerid]=1;
        }
        _status.event.playerCards=[];
        event.targetCards=[];
        "step 1"
        event.trigger('PatientZero_card_linghao');
        event.shaRequired=event.shaReq[event.turn.playerid];
        "step 2"
        if(event.directHit){
            event._result={bool:false};
        }
        else{
           var next=event.turn.chooseToUse('请使用一个口罩');
    next.set('ai2',function(card){    
     return 10;
    });
    next.set('ai1',function(card){    
     return 10;
    });
    next.set('filterCard',function(card){
    if(get.name(card)!='PatientZero_card_kouzhao'&&get.name(card)!='PatientZero_card_kouzhao2') return false;
    return true;    
    });   
    next.autochoose=function (){				
				return false;
			};
			next.filterTarget=undefined;
            if(event.shaRequired>1){
                next.set('prompt2','共需使用'+event.shaRequired+'张口罩')
            }            
            next.set('splayer',player);
            next.set('starget',target);
            next.set('shaRequired',event.shaRequired);
            //next.autochoose=lib.filter.autoRespondSha;
            if(event.turn==target){
                next.source=player;
            }
            else{
                next.source=target;
            }
        }
        "step 3"
        if(event.target.isDead()||_status.event.player.isDead()){
            event.finish();
        }
        else{
            if(result.bool){
                event.shaRequired--;
                if(event.turn==target){
                    if(result.cards) event.targetCards.addArray(result.cards);
                    if(event.shaRequired>0) event.goto(2);
                    else{
                        event.turn=player;
                        event.goto(1);
                    }
                }
                else{
                    if(result.cards) _status.event.playerCards.addArray(result.cards);
                    if(event.shaRequired>0) event.goto(2);
                    else{
                        event.turn=target;
                        event.goto(1);
                    }
                }
            }
            else{
                if(event.turn==target){
                    target.loseHp(1);
                }
                else{
                    player.loseHp(1);
                }
            }
        }
    },
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                    },
                },
                selectTarget:1,
            },
            "PatientZero_card_zuanshi":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                if(game.countPlayer(function(current){return current.identity=="PatientZero_human"})==0) return false;
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                if(List.contains(_status.event.player.identity)==false) return false;
                return true;
                },
                content:function (){
                var targets=game.filterPlayer(function(current){return current.identity=="PatientZerohuman"}) ;
                for(var i=0;i<targets.length;i++){
                targets[i].addTempSkill('PatientZero_skill_disable',{global:'roundStart'});
                }
                targets.randomGet().addSkill('PatientZero_skill_qianfu2');
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_kongcheng":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                return true
                },
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return true
    },
                content:function (){
                if(!target.isHealthy){target.recover()}
                else if(target.identity=='PatientZero_interactor_hz_id'){
                target.init_human(false,true)
                }
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_zhuanjiazhengming":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                               if( List.contains(_status.event.player.identity) ) return false;
                return true
                },
                selectTarget:1,
                filterTarget:function (card,player,target){     
        return target.name=='PatientZero_human_zj'
    },
                content:function (){
                if(!target.isHealthy){
                target.recover(target.maxHp-target.hp);
                }
                target.storage.PatientZero_skill_yanjiu=true;
                /*else if(如果人类太弱的话，专家为患者则变成人类){
                target.init_human(false,true)
                }*/
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_shiweijieru":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
               if(List.contains(_status.event.player.identity)) return false
                return true;
                },
                selectTarget:-1,
                filterTarget:function (card,player,target){        
        //return true;
        return target.identity=='PatientZero_human'||target.identity=='PatientZero_interactor_hz_id';
    },
                content:function (){              
                //if(target.identity=='PatientZero_human'||target.identity=='PatientZero_interactor_hz_id')  {
                target.addSkill('PatientZero_skill_shiweijieru');                
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_huoshenshan":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
               if(List.contains(_status.event.player.identity)) return false
                return true
                },
                selectTarget:1,
                filterTarget:function (card,player,target){
      var id=target.identity;      
      if(target.name=="PatientZero_human_ys") return false
      if(id=='PatientZero_human') return game.hasPlayer(function(current){
      return current.name=='PatientZero_human_ys';
      });
      return false
    },
                content:function (){                                
                target.addMark('PatientZero_skill_zhiliao',1);   
                target.addSkill("PatientZero_skill_zhiliao_effect") 
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_3E":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                if(List.contains(_status.event.player.identity)) return false
                return true
                },
                selectTarget:1,
                filterTarget:function (card,player,target){
                return target.identity=='PatientZero_virus';
    },
                content:function (){                
                if(target.name=='PatientZero_virus3') target.clearSkills();
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "PatientZero_card_kuaidifugong":{
                audio:true,
                fullskin:true,
                type:"event",
                enable:function (event){
                //console.log(_status.event) 
                var List=['PatientZero_interactor_bf_id','PatientZero_virus'];
                if(List.contains(_status.event.player.identity)==false) return false
                return true
                },
                selectTarget:1,
                filterTarget:function (card,player,target){
                return player.identity!='PatientZero_human'&&target.name=='PatientZero_human_kdy';
    },
                content:function (){                
                target.storage.PatientZero_card_kuaidifugong = target.storage.PatientZero_card_kuaidifugong ||0;
                target.storage.PatientZero_card_kuaidifugong ++
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
        },
        translate:{
            "PatientZero_card_kouzhao":"N95口罩",
            "PatientZero_card_kouzhao_info":"抵消一次感染",
            "PatientZero_card_kouzhao2":"医用外科口罩",
            "PatientZero_card_kouzhao2_info":"抵消一次感染",
            "PatientZero_card_malasong":"马拉松",
            "PatientZero_card_malasong_info":"抵消一次专家的【研究】",
            "PatientZero_card_geli":"隔离",
            "PatientZero_card_geli_info":"使用后，患者和白痴失去技能直到其回合结束",
            "PatientZero_card_chuanbo":"传播",
            "PatientZero_card_chuanbo_info":"出牌阶段，对一名与你身份不同的角色使用，若目标为人类则被感染，否则失去一点体力",
            "PatientZero_card_zhai":"宅",
            "PatientZero_card_zhai_info":"人类可以跳过出牌阶段，以避开【潜伏】(若玩家为快递员，则消除快递员的负面影响)",
            "PatientZero_card_jiujing":"75%酒精消毒液",
            "PatientZero_card_jiujing_info":"扣除病毒或交互者一点血(状态:未被发现)",
            "PatientZero_card_wanhui":"晚会",
            "PatientZero_card_wanhui_info":"将贪官变为白痴",
            "PatientZero_card_shichang":"华南海鲜市场",
            "PatientZero_card_shichang_info":"令穿山甲弃置病毒一张牌或令蝙蝠弃置人类一张牌",
            "PatientZero_card_shelun":"社论",
            "PatientZero_card_shelun_info":"人类的注意力被分散，每人随机失去一张牌",
            "PatientZero_card_linghao":"零号病人",
            "PatientZero_card_linghao_info":"对一名不同阵营的角色使用，由其开始，其与你轮流使用一张【口罩】，直到其中一方未使用【口罩】为止。未使用【口罩】的一方受到另一方失去一点体力。",
            "PatientZero_card_zuanshi":"钻石公主号",
            "PatientZero_card_zuanshi_info":"此轮内人类技能失效，且随机一名人类将被感染",
            "PatientZero_card_kongcheng":"空城",
            "PatientZero_card_kongcheng_info":"所有角色回复一点体力，满血患者将变为人类",
            "PatientZero_card_zhuanjiazhengming":"专家证明人传人",
            "PatientZero_card_zhuanjiazhengming_info":"专家回复至满血并使专家可以多发动一次【研究】",
            "PatientZero_card_shiweijieru":"世卫介入",
            "PatientZero_card_shiweijieru_info":"所有人类角色(包括患者)摸牌后可以多获得一张基础牌(限一次)",
            "PatientZero_card_huoshenshan":"火神山医院开建",
            "PatientZero_card_huoshenshan_info":"医生指定一名其他人类获得一瓶“解药”",
            "PatientZero_card_3E":"3E原则",
            "PatientZero_card_3E_info":"对一个病毒使用，若其是3号病毒，其失去所有技能",
            "PatientZero_card_kuaidifugong":"快递业复工",
            "PatientZero_card_kuaidifugong_info":"2月10日，快递员必须使用两张“口罩”抵挡“传播”",
        },
        list:[],
    },
    skill:{
        skill:{
            "PatientZero_skill_chongzhu":{
                marktext:"行",
                intro:{
                    name:"行动点",
                    "name2":"行",
                    content:"当前有#个“行动点”",
                },
                trigger:{
                    global:["gameStart","roundStart"],
                },
                priority:null,
                forced:true,
                content:function (){               
                var name=event.triggername;
                if(name=="gameStart"){
                //player.addMark('PatientZero_skill_chongzhu',0);               
                player.storage.PatientZero_skill_chongzhu=0;
                player.markSkill('PatientZero_skill_chongzhu');                                        
                }
                if(name=="roundStart"){
                if(player.identity!="PatientZero_human") player.addMark('PatientZero_skill_chongzhu',1);
                }
                },
                mod:{
                    "cardEnabled2":function (card,player){
                    if(player.countMark('PatientZero_skill_chongzhu')<=0&&player.isPhaseUsing()) return false;
                    },
                },
                group:["PatientZero_skill_chongzhu_discard","PatientZero_skill_chongzhu_use"],
                subSkill:{
                    use:{
                        sub:true,
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){                       
                       return player.isPhaseUsing();
                       },
                        content:function (){
                       player.removeMark('PatientZero_skill_chongzhu',1)
                       },
                    },
                    discard:{
                        sub:true,
                        enable:"phaseUse",
                        position:"h",
                        filterCard:function (card){
    return get.type(card)=="event"
    },
                        filter:function (event,player){
    return player.countCards('h',function(card){
                       return get.type(card)=="event"
                       })>0;
    },
                        selectCard:1,
                        prompt:"弃置1张事件牌并获得行动点",
                        check:function (card){
        return 6-get.value(card)
    },
                        content:function (){
        player.addMark('PatientZero_skill_chongzhu',1)
    },
                        ai:{
                            order:1,
                            result:{
                                player:1,
                            },
                            threaten:1.5,
                        },
                    },
                },
            },
            "_PatientZero_skill_qianfu":{
                trigger:{
                    global:"roundStart",
                },
                popup:false,
                forced:true,
                filter:function (event,player,name){
                var num=game.countPlayer(function (target){
                if(target.identity!='PatientZero_human') {return false;}
                return player!=target&&get.distance(player,target)<=1&&(!target.hasSkill('PatientZero_skill_zhai')||player.hasSkill('PatientZero_skill_qirongjiao2'));
                });
                return player.name=="PatientZero_virus2"&&num>0&&player.hasSkill('PatientZero_skill_virus');
                },
                content:function (){  
                'step 0'
                player.chooseTarget(1,function (card,player,target){
                if(target.identity!='PatientZero_human') {return false;}
                return player!=target&&get.distance(player,target)<=1&&(!target.hasSkill('PatientZero_skill_zhai')||player.hasSkill('PatientZero_skill_qirongjiao2'));
                }).ai=function(target){
                return -get.attitude(player,target);
                };
    'step 1'
    if(result.bool&&result.targets.length){
     var target=result.targets[0];
        target.addSkill('PatientZero_skill_qianfu2');
        target.updateMarks('PatientZero_skill_qianfu2');
        }
    },
            },
            "PatientZero_skill_qianfu2":{
                charlotte:true,
                mark:true,
                intro:{
                    content:"下一轮开始时将被感染",
                },
                init:function (player,skill){
  if(!player.storage[skill]) player.storage[skill]=0;
  },
                onremove:true,
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                filter:function (){
                if(game.roundNumber<=1) return false;
                return true;
                },
                content:function (){
    'step 0'
    var next=player.chooseToUse('请使用一个口罩抵消此次感染');
    next.set('ai',function(card){    
    return get.value(card);
    });
    next.set('filterCard',function(card){
    if(get.name(card)!='PatientZero_card_kouzhao'&&get.name(card)!='PatientZero_card_kouzhao2') return false;
    return true;
    });   
  'step 1'
    if(!result.bool){
    player.init_interactor('qianfu');
    }
    player.removeSkill('PatientZero_skill_qianfu2',true);
    },
            },
            "PatientZero_skill_yanjiu":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        var id=target.identity;
        if(id=='PatientZero_interactor_hz'||id=='PatientZero_virus') {return true;}
        return false;
    },
                filter:function (event,player,name){
    return game.hasPlayer(function(target){
    var id=target.identity;
        if(id=='PatientZero_interactor_hz_id'||id=='PatientZero_virus') {return true;}
        return false;
    })
    },
                content:function (){
                'step 0'
    var id=target.identity;
    if(id=='PatientZero_interactor_hz_id'){
    target.init_human(false,true) ;  
    event.finish();
    return;
    }
    else if(id=='PatientZero_virus'){
    //target.die();
    var next=target.chooseToUse('请使用一张马拉松抵消【研究】');
    next.set('ai',function(card){    
    return 10;
    });
    next.set('filterCard',function(card){
    if(get.name(card)!='PatientZero_card_malasong') return false;
    return true;    
    });   
    }
    'step 1'
    if(!result.bool){target.loseHp(3);}
    },
                contentAfter:function (){
    if(player.storage.PatientZero_skill_yanjiu==true){
    delete player.storage.PatientZero_skill_yanjiu;
    player.getStat().skill.PatientZero_skill_yanjiu=0;
    }
    },
                ai:{
                    order:1,
                    result:{
                        player:function (player,target){            
            return 2;
            },
                    },
                },
            },
            "PatientZero_skill_fusheng":{
                derivation:"PatientZero_skill_yimiao",
            },
            "PatientZero_skill_yimiao":{
                enable:"phaseUse",
                round:1,
                filterTarget:function (card,player,target){
        var id=target.identity;
        if(id=='PatientZero_virus') {return true;}
        return false;
    },
                content:function (){    
    target.clearSkills();
    game.log(target,'失去了特性');
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
            var id=target.identity;   
            return get.population(id);
            },
                    },
                },
                group:["PatientZero_skill_yimiao_roundcount"],
            },
            "PatientZero_skill_baichi":{
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                return game.countPlayer(function(target){
                target.identity=='PatientZero_human'&&target!=player
                })>0;
                },
                content:function (){    
    'step 0'
    player.chooseTarget(true,function(card,player,target){
    return target.identity=='PatientZero_human'&&target!=player;
    }).ai=function(target){
    var id=target.name;
        if(id=='PatientZero_human_tg') {return 5;}
        else {return 1;}
    };
    'step 1'
    if(result.bool&&result.targets&&result.targets.length){
    event.target=result.targets[0];
    player.logSkill('PatientZero_skill_baichi',result.targets);
    var next=result.targets[0].chooseToUse('请使用一个口罩抵消此次感染');
    next.set('ai',function(card){    
    return 10;
    });
    next.set('filterCard',function(card){
    if(get.name(card)!='PatientZero_card_kouzhao'&&get.name(card)!='PatientZero_card_kouzhao2') return false;
    return true;
    });   
    }
  'step 2'
    if(!result.bool){
    game.log('目标没有使用口罩');
    event.target.init_interactor();
    }
    },
            },
            "PatientZero_skill_huanzhe":{
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function (){
        player.loseHp(1);
        var players=game.filterPlayer(function(target){return get.distance(player,target)<=1&&target!=player&&target.identity=='PatientZero_human'});
       if(players.length){
        for(var i=0;i<players.length;i++){
        var playeri=players[i];
        if(playeri.countCards('h',{type:'basic'})>0){
        playeri.discard(playeri.getCards('h',{type:'basic'}).randomGet());
        }
        }
        }
        },
            },
            "PatientZero_skill_zhiliao":{
                marktext:"药",
                intro:{
                    name:"治疗",
                    "name2":"药",
                    content:"当前有#瓶“药”",
                },
                trigger:{
                    global:"gameDrawAfter",
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                init:function (player){
                if(!player.storage.PatientZero_skill_zhiliao){
                player.storage.PatientZero_skill_zhiliao=0;
                }
                },
                content:function (){
        var triggername=event.triggername;
        if(triggername=='gameDrawAfter'){
        player.addMark('PatientZero_skill_zhiliao',2);
        //player.storage.PatientZero_skill_zhiliao+=2;
        }
        else{
        player.addMark('PatientZero_skill_zhiliao',1);   
        //player.storage.PatientZero_skill_zhiliao+=1;
        }
    },
                group:["PatientZero_skill_zhiliao_effect","PatientZero_skill_zhiliao_die"],
                subSkill:{
                    effect:{
                        sub:true,
                        enable:"phaseUse",
                        usable:1,
                        init:function (player,skill){
                        lib.translate.PatientZero_skill_zhiliao_effect="治疗";
                        lib.translate.PatientZero_skill_zhiliao_effect_info="你的回合内，你可以失去一瓶“药”令一名患者或白痴回复一点体力或令其变为人类(其体力值必须为满)，或令一个病毒失去一点体力";
                        },
                        filter:function (event,player){
                        return player.countMark('PatientZero_skill_zhiliao')>0&&game.players.length>1;
                        },
                        ai:{
                        order:10,
                            result:{
                                player:10,
                                target:function (player,target){
                                return get.attitude(player,target);
                                },
                                //target:5,
                            },
                        },
                        filterTarget:function (card,player,target){                        
                        return (target.identity=='PatientZero_interactor_virus'||target.identity=='PatientZero_interactor_hz_id'||target.identity=='PatientZero_interactor_bc_id')&&player!=target 
                        },
                        content:function (){
                        player.removeMark('PatientZero_skill_zhiliao',1);     
                        //player.storage.PatientZero_skill_zhiliao-=1;                          
                    switch(target.identity){                  
                    case 'PatientZero_interactor_hz_id':
                    if(target.isHealthy()){
                    target.init_human(false,true)
                    }
                    else{target.recover();}
                    break;
                    case 'PatientZero_interactor_bc_id':
                    if(target.isHealthy()){
                    target.init_human(true)}
                    else{target.recover();}
                    break;               
                    case 'PatientZero_virus':
                    target.loseHp();
                    break;       
                    default:break;
                    }
    },
                    },
                    die:{
                        sub:true,
                        forceDie:true,
                        trigger:{
                            player:"die",
                        },
                        filter:function (event,player){
                    return player.countMark('PatientZero_skill_zhiliao')>0&&game.countPlayer(function(current){return current.identity=='PatientZero_human'&&current!=player})>0;
                    },
                        content:function (){
                    'step 0'
                    player.chooseTarget(function(card,player,target){
                    return target.identity=='PatientZero_human'&&target!=player;
                    }).set('forceDie',true).set('ai',function(target){
                    return get.attitude(player,target)>0;
                    });
                    'step 1'
                    if(result.targets&&result.targets.length){
                    var target=result.targets[0];
                    if(!target.storage.PatientZero_skill_zhiliao){
                        target.storage.PatientZero_skill_zhiliao=0;
                        }                    
                    target.addMark('PatientZero_skill_zhiliao',1);
                    player.removeMark('PatientZero_skill_zhiliao',1); 
                    //player.storage.PatientZero_skill_zhiliao-=1;
                    target.addSkillLog('PatientZero_skill_zhiliao_effect');
                    if(player.countMark('PatientZero_skill_zhiliao')>0){event.goto(0);}
                    }
                    },
                    },
                },
            },
            "PatientZero_skill_tanguan":{
                mod:{
                    cardEnabled:function (card,player){
                         if(get.name(card)=='PatientZero_card_kouzhao'||get.name(card)=='PatientZero_card_kouzhao2') return false;
                    },
                    cardUsable:function (card,player){
                         if(get.name(card)=='PatientZero_card_kouzhao'||get.name(card)=='PatientZero_card_kouzhao2') return false;
                    },
                    cardRespondable:function (card,player){
                         if(get.name(card)=='PatientZero_card_kouzhao'||get.name(card)=='PatientZero_card_kouzhao2') return false;
                    },
                },
            },
            "PatientZero_skill_tanguan2":{
                forced:true,
                juexingji:true,
                mark:true,
                intro:{
                    content:"limited",
                },
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function (event,player){
            return player.getCards('h','PatientZero_card_kouzhao').length+player.getCards('h','PatientZero_card_kouzhao2').length>3&&game.countPlayer(function(current){return current.identity=='PatientZero_human'&&current!=player})>0;
            },
                content:function (){
            'step 0'
            player.chooseTarget(function(card,player,target){
            return target!=player&&target.identity=='PatientZero_human';
            }).ai=function(target){return 10;};
            'step 1'
            if(result.bool){
            event.target=result.targets[0];
            player.chooseCard('h',function(card){
            return get.name(card)=='PatientZero_card_kouzhao'||get.name(card)=='PatientZero_card_kouzhao2';
            });            
            }
            else{event.finish();return;}            
            'step 2'
            if(result.cards&&result.cards.length){
            player.awakenSkill('PatientZero_skill_tanguan2');
            player.$give(result.cards.length,event.target);
                           event.target.gain(result.cards,player);
                           if(player.getCards('h','PatientZero_card_kouzhao').length+player.getCards('h','PatientZero_card_kouzhao2').length>0){
                           event.goto(0);
                           }
            }
            else{event.finish();return;}
        },
            },
            "PatientZero_skill_tanlan":{
                trigger:{
                    global:["roundStart","$init_interactor"],
                },
                filter:function (event,player,name){
        var num=game.countPlayer(function(target){
        return target.identity=='PatientZero_interactor_csj_id'||target.identity=='PatientZero_interactor_bf_id';
        });
        if(num==0){return false;}
        if(name=='roundStart'){
        if(game.roundNumber<=1) {        
        delete player.storage.$init_interactor;
        return false;
        }
        else {return player.storage.$init_interactor==true;}
        }
        else if(name=='$init_interactor'){
        player.storage.$init_interactor=true;
        return false;
        }
        },
                forced:true,
                content:function (){
        'step 0'
        player.chooseTarget(true,function(card,player,target){
        return target.identity=='PatientZero_interactor_csj_id'||target.identity=='PatientZero_interactor_bf_id';
        });
        'step 1'
        if(result.bool){
        //game.log(result.targets[0],'被',player,'吃掉');
        //result.targets[0].die();
        player.PatientZero_eat(result.targets[0]);
        }
        },
            },
            "PatientZero_skill_kuaidi":{
                enable:"phaseUse",
                round:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.identity=='PatientZero_human';
    },
                filter:function (event,player){
        return player.getCards('h','PatientZero_card_kouzhao').length+player.getCards('h','PatientZero_card_kouzhao2').length>0;
    },
                filterCard:function (card){
    return card.name=='PatientZero_card_kouzhao'||card.name=='PatientZero_card_kouzhao2';
    },
                selectCard:1,
                discard:false,
                lose:true,
                content:function (){
        player.$give(cards.length,target);
        target.gain(cards,player);        
        target.addSkill("PatientZero_skill_kuaidi2");
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==1&&player.countCards('h','du')) return -1;
                if(player.hp<=2&&player.countCards('h','shan')) return 0;
                if(target.countCards('h')+player.countCards('h')>target.hp+2) return 0;
                if(get.attitude(player,target)>3) return 1;
                return 0;
            },
                    },
                },
                group:["PatientZero_skill_kuaidi_roundcount"],
            },
            "PatientZero_skill_kuaidi2":{
                mark:true,
                superCharlotte:true,
                charlotte:true,
                markText:"快",
                intro:{
                    content:"从快递员手中获得了【口罩】",
                },
            },
            "PatientZero_skill_zhai":{
                mark:true,
                superCharlotte:true,
                charlotte:true,
                markText:"宅",
                intro:{
                    content:"处于【宅】状态",
                },
            },
            "PatientZero_skill_liuxing":{
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                popup:false,
                content:function (){
        var num=game.countPlayer(function(current){
        if(player!=current&&current.hasSkill("PatientZero_skill_kuaidi2")){
        if(player.storage.PatientZeroQianfu&&!player.hasSkill('PatientZero_skill_zhai')){
        current.init_interactor();        
        }
        current.removeSkill("PatientZero_skill_kuaidi2");
        return true;
        }
        });
        if(num>0){
        player.logSkill("PatientZero_Skill_liuxing");
        delete player.storage.PatientZeroQianfu;
        }
        },
            },
            "PatientZero_skill_csj":{
                trigger:{
                    player:"PatientZero_eat",
                },
                forced:true,
                forceDie:true,
                filter:function (event){return event.source;},
                content:function (){
        trigger.source.init_interactor();
        },
            },
            "PatientZero_skill_bf":{
                trigger:{
                    player:"PatientZero_eat",
                },
                forced:true,
                forceDie:true,
                filter:function (event){return event.source;},
                content:function (){
        trigger.source.die();
        },
            },
            "PatientZero_skill_xinwen":{
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function (){
        'step 0'
        for(var i=0;i<game.players.length;i++){
        var playeri=game.players[i];        
        playeri.enableSkill('PatientZero_skill_xinwen');
        }
        var List=["拒绝野味","建议居家"];
        if(player.storage.PatientZero_skill_xinwen){
        List.remove(player.storage.PatientZero_skill_xinwen);
        }
        player.chooseControl(List);
        'step 1'
        if(result.control){        
        player.storage.PatientZero_skill_xinwen=result.control;
        var str;if(result.control=='拒绝野味'){str='贪官'}else{str='白痴'}
        game.log(player,'选择了',result.control,'，本轮',str,'将失去技能');
        for(var i=0;i<game.players.length;i++){
        var playeri=game.players[i];
        if(lib.translate[playeri.name]==str){
        playeri.disableSkill('PatientZero_skill_xinwen',lib.character[playeri.name][3]);
        }
        }
        }
        else{delete player.storage.PatientZero_skill_xinwen;}
        },
            },
            "PatientZero_skill_virus":{
            },
            "_PatientZero_skill_RNAfz":{
                trigger:{
                    global:"roundStart",
                },
                nobracket:true,
                popup:false,
                forced:true,
                filter:function (e,player,name){
                var bool=game.hasPlayer(function (target){
        return target.identity=='PatientZero_virus'&&target.maxHp<8;
    })
                return player.name=="PatientZero_virus3"&&bool&&player.hasSkill('PatientZero_skill_virus');
                },
                content:function (){
         'step 0'
        player.chooseTarget(true,function (card,player,target){
        return target.identity=='PatientZero_virus'&&target.maxHp<8;
    }).ai=function(target){
    return 1;
    };
    'step 1'
    if(result.targets.length){
     var target=result.targets[0];
        var hp=target.hp*2;
        if(target.maxHp<hp){target.maxHp=hp;}
        target.hp=hp;
        target.update();
        }
        },
            },
            "_PatientZero_skill_baomo":{
                trigger:{
                    global:"roundStart",
                },
                popup:false,
                forced:true,
                filter:function (e,player,name){
                return player.name=="PatientZero_virus4"&&player.hasSkill('PatientZero_skill_virus');
                },
                content:function (){
        'step 0'        
        var List=["S亚型","L亚型"];
        if(player.storage.PatientZero_skill_baomo){
        List.remove(player.storage.PatientZero_skill_baomo);
        }
        player.chooseControl(List);
        'step 1'
        if(result.control){        
        player.storage.PatientZero_skill_baomo=result.control;        
        }
        else{delete player.storage.PatientZero_skill_baomo;}
        'step 2'
        if(!game.hasPlayer(function(target){
        return target.identity=='PatientZero_interactor_hz_id';
        })){
         event.finish();
         return;
         }
        player.chooseTarget(true,function(card,player,target){
        return target.identity=='PatientZero_interactor_hz_id';
        });
        'step 3'
        if(result.targets.length){
        var target=result.targets[0];
        var storage=player.storage.PatientZero_skill_baomo;
        if(storage=='S亚型'){
        target.loseHp();
        }
        else if(storage=='L亚型'){
        target.die();
        }
        }
        },
            },
            "_PatientZero_skill_qirongjiao":{
                trigger:{
                    global:"gameStart",
                    player:"die",
                },
                popup:false,
                forced:true,
                forceDie:true,
                filter:function (e,player,name){
                if(player.name!="PatientZero_virus1"||player.hasSkill('PatientZero_skill_virus')==false) return false;       
        if(name=='gameStart'){
        window.foreval(game.players.concat(game.dead),'addSkill','PatientZero_skill_qirongjiao2');
        return false;
        }
        else{return true;}
        },
                content:function (){
        window.foreval(game.players.concat(game.dead),'removeSkill','PatientZero_skill_qirongjiao2');
        },
            },
            "PatientZero_skill_qirongjiao2":{
            },
            "PatientZero_skill_shiweijieru":{
                trigger:{
                    player:"drawAfter",
                },
                forced:true,
                nobracket:true,
                content:function (){
                'step 0'
                var card=get.cardPile(function(card){
                    return get.type(card)=='basic';
                });
                if(card) player.gain(card,'gain2');
                'step 1'
                game.updateRoundNumber();
                player.removeSkill("PatientZero_skill_shiweijieru");
        },
            },
        },
        translate:{
            "PatientZero_skill_qianfu":"潜伏",
            "PatientZero_skill_qianfu_info":"每轮开始，你可以指定一名距离1以内的身份为人类的其他角色，若如此做，其将在下一轮开始时被感染",
            "PatientZero_skill_qianfu2":"潜伏",
            "PatientZero_skill_qianfu2_info":"",
            "PatientZero_skill_yanjiu":"研究",
            "PatientZero_skill_yanjiu_info":"你的回合限一次，你可以治愈一名患者，或令一个病毒失去3点体力",
            "PatientZero_skill_fusheng":"复生",
            "PatientZero_skill_fusheng_info":"觉醒技，当你被治愈后，你失去此技能，获得技能【疫苗】",
            "PatientZero_skill_yimiao":"疫苗",
            "PatientZero_skill_yimiao_info":"每轮限一次，你的回合内，你可以令一个病毒失去特性(技能)",
            "PatientZero_skill_baichi":"白痴",
            "PatientZero_skill_baichi_info":"锁定技，你的回合，你必须令一名其他角色被感染",
            "PatientZero_skill_huanzhe":"患者",
            "PatientZero_skill_huanzhe_info":"锁定技，每轮游戏开始时，你失去一点体力，与你距离为1的其他身份为人类的角色随机弃置一张基本牌",
            "PatientZero_skill_zhiliao":"治疗",
            "PatientZero_skill_zhiliao_info":"<li>①锁定技，游戏开始时，你获得2瓶“药”。你的回合你获得一瓶“药”。<li>②你的回合内，你可以失去一瓶“药”令一名患者或白痴回复一点体力或令其变为人类(其体力值必须为满)，或令一个病毒失去一点体力<li>③你死亡时，可以分配你剩余的“药”给其他人类，获得“药”的人类获得此技能的“②”效果",
            "PatientZero_skill_tanguan":"贪官",
            "PatientZero_skill_tanguan_info":"锁定技，你不能使用【口罩】",
            "PatientZero_skill_tanguan2":"贪官",
            "PatientZero_skill_tanguan2_info":"觉醒技，你的回合，若你的【口罩】数量大于3，你可以将其分给其他人类",
            "PatientZero_skill_tanlan":"贪婪",
            "PatientZero_skill_tanlan_info":"锁定技，若一轮内有人类被感染，你必须吃掉【穿山甲】或【蝙蝠】",
            "PatientZero_skill_kuaidi":"快递",
            "PatientZero_skill_kuaidi_info":"每轮限一次，你的回合内你可以给一名其他人类一个【口罩】",
            "PatientZero_skill_kuaidi2":"快递",
            "PatientZero_skill_kuaidi2_info":"",
            "PatientZero_skill_liuxing":"流行",
            "PatientZero_skill_liuxing_info":"一轮游戏开始时，若你因【潜伏】变为患者，则上一轮因【快递】获得口罩的角色也成为患者",
            "PatientZero_skill_csj":"穿山甲",
            "PatientZero_skill_csj_info":"吃掉你的人立即被感染",
            "PatientZero_skill_bf":"蝙蝠",
            "PatientZero_skill_bf_info":"吃掉你的人立即死亡",
            "PatientZero_skill_xinwen":"新闻",
            "PatientZero_skill_xinwen_info":"每一轮游戏开始时，你可以选择【拒绝野味】本轮使贪官技能失效，或选择【建议居家】本轮使白痴技能失效。两个选项只能交替选择",
            "PatientZero_skill_zhai":"宅",
            "PatientZero_skill_zhai_info":"",
            "PatientZero_skill_virus":"病毒",
            "PatientZero_skill_virus_info":"四个病毒的技能并不显示，需要玩家猜测，思考",
            "PatientZero_skill_RNAfz":"RNA复制",
            "PatientZero_skill_RNAfz_info":"每轮你可以指定一个病毒血量翻倍(每个病毒限两次)",
            "PatientZero_skill_baomo":"包膜",
            "PatientZero_skill_baomo_info":"病毒囊膜的主要功能是帮助病毒进入宿主细胞。<li>S亚型:你可以令一名患者失去一点体力。<li>L亚型:你可以令一名患者死亡。<li>每轮开始，你可以选择S亚型或L亚型发动(只能交替发动)",
            "PatientZero_skill_qirongjiao":"气溶胶",
            "PatientZero_skill_qirongjiao_info":"针对有【宅】技能的玩家，即使其不出门仍会起到传播效果",
            "PatientZero_skill_qirongjiao2":"气溶胶",
            "PatientZero_skill_qirongjiao2_info":"",
            "PatientZero_skill_shiweijieru":"世卫介入",
            "PatientZero_skill_shiweijieru_info":"下次摸牌后获得一张基础牌",
        },
    },
    intro:"<a target=\"_blank\" href=\"file:///storage/emulated/0/Android/data/com.widget.noname/extension/零号病人/PatientZero.html\">点击查看【零号病人】完整介绍</a>",
    author:"mathskiller，Heroza，诗笺",
    diskURL:"",
    forumURL:"",
    version:"1.1",
},files:{"character":["PatientZero_human_tg.jpg"],"card":["PatientZero_card_kuaidifugong.png"],"skill":[]}}})