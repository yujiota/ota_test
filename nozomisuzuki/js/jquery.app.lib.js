// JavaScript Document

function PhotoTimer()
{
	var param = [];
	
	//Closure
	var prepTimer = function (param){
		if( param.imgPrev.attr('src') == undefined || param.imgPrev.attr('src') == "" )
		{
			param.PrevUrl = $('#PhotoList').find('img').eq(0).attr('src');
		}
		else
		{
			imgCrnt = $('#PhotoList').find('img[src="' + param.imgPrev.attr('src') + '"]');
			
			if( imgCrnt.next('img').length == 0 )
				param.PrevUrl = $('#PhotoList').find('img').eq(0).attr('src');
			else
				param.PrevUrl = imgCrnt.next('img').attr('src');
		}
		return param;
	};
	
	//Initialize
	(function(){
		param = prepTimer({ 'imgPrev' : $("img#preview") })
		param.imgPrev.attr('src', param.PrevUrl);
		param.imgPrev.bind('load', function(){ 
			(setCss(param)).imgPrev.fadeIn('slow');
		});
		
	})();

	//EventDriven
	setInterval(function(){
		
		param = prepTimer({ imgPrev : $("img#preview") });
		
		param.imgPrev.fadeOut('slow', function(){
			param.imgPrev.attr('src', param.PrevUrl);
			param.imgPrev.bind('load', function(){ 
				(setCss(param)).imgPrev.fadeIn('slow'); 
			});
		});
			
	},	4000);
}


function PhotoRollover()
{
	var param = [];
	
	//Closure
	var prepRollover = function(param){
		param.imgThumb = param.Event.closest('div').find('img');
		if( param.imgPrev.attr('src') == (param.PrevUrl = getUrlById(param.imgThumb)) ) return false;
		return param;
	};

	//Initialize
	(function(){
		param = prepRollover( { 'imgPrev' : $("img#preview"), 'Event' : $('div.thumb img.preset') })
		param.imgPrev.attr('src', param.PrevUrl);
		param.imgPrev.bind('load', function(){ 
			(setCss(param)).imgPrev.fadeIn('slow'); 
			return true;
		});
		
	})();
	
	
	//EventDriven
	$('div.thumb > *').hover(function(event){
		param = { imgPrev : $("img#preview"), Event : $(event.target) };
		param.imgPrev.stop(true, true);
		if( !(param = prepRollover(param)) ) return ;
		
		param.imgPrev.fadeOut('slow', function(){
			param.imgPrev.attr('src', param.PrevUrl);
			param.imgPrev.bind('load', function(){ 
				(setCss(param)).imgPrev.fadeIn('slow'); 
			});
		});
	});
}


function PhotoRolloverRich(param)
{
	var getCrnt = function(param, event){
		var _crnt = 0;
		
		$('div.thumb > *').each(function(i, element){
			if(event.target == element ){ _crnt = i; return false; };
		});
		
		return _crnt;
	};
	
	var next = function(param)
	{
		param.crnt ++;
		if(param.crnt >= param.total - 1){ param.crnt = param.total - 1; }
		
		select(param);
		update(param);
	};
	
	var prev = function(param)
	{
		param.crnt --;
		if(param.crnt < 0){ param.crnt = 0; }
			
		select(param);
		update(param);
	};
	
	
	//
	var select = function(param){
				
		param.imgThumb = $('div.thumb > *').eq(param.crnt).closest('div').find('img');
		
		if( param.imgPrev.attr('src') == (param.PrevUrl = getUrlById(param.imgThumb)) ) return false;

		param.imgPrev.fadeOut('slow', function(){
			param.imgPrev.attr('src', param.PrevUrl);
			param.imgPrev.bind('load', function(){ 
//				setCss(param);
				setCssOver(param);
				param.imgPrev.fadeIn('slow'); 
			});
		});
		
		param.titlePrev.fadeOut('slow', function(){
			param.titlePrev.html( param.imgThumb.attr('alt') );
			param.titlePrev.fadeIn('slow'); 
		});
		
		
		$('div.thumb > *').each(function(i, element){
			$(this).stop();
			if(param.crnt == i ){
				$(this).fadeTo("slow", 1);
			}
			else{
				$(this).fadeTo("slow", 0.3);
			}
		});
		
	};
	
	var update = function(param, flg){
		
		//Update Allows
		if(param.crnt == 0){
			param.AllowLeft.css('display', 'none');
		}
		else　if(param.crnt >= param.total - 1){
			param.AllowRight.css('display', 'none');
		}
		else{
			param.AllowLeft.css('display', 'block');
			param.AllowRight.css('display', 'block');
		}
		
		//Detect Following Thumb List Update
		while(param.crnt >= param.view + param.max)
		{
			var flg = true;
			param.view ++;
			
			if (param.view > 1000 ){ param.view = 999; break;}
		}
		while(param.crnt < param.view)
		{
			var flg = true;
			param.view --;
			
			if (param.view < 0 ){ param.view = 0; break;}
		}
		
		//Update Thumbs
		if(flg){
			$('div.thumb > *').each(function(i, element){
				
				if( param.view <= i && i < param.view + param.max ){
					$(element).parent().css('display', 'inline-block');
				} else {
					$(element).parent().css('display', 'none');
				}
			});
		}
	};
	
	//Initialize
	(function(){
		select(param);
		update(param, true); //Force Update
	})();
	
	param.total = $('div.thumb > *').length;
	
	$('div.thumb > *').click(function(event){
	
		param.crnt = getCrnt(param, event);
		
		select(param);
		
	});
	

	param.OverRight.click( function(event){ next(param); });
	param.OverLeft.click( function(event){ prev(param); });
	
	param.AllowRight.click( function(event){ next(param); });
	param.AllowLeft.click( function(event){ prev(param); });
}


function getUrlById(jqObjThumb){ return './images/' + (jqObjThumb.attr('id')) + '.jpg'; }

function setCss(param){
	param.imgPrev.css({
		"margin-top" : - param.imgPrev.height() / 2, 
		"margin-left" : - param.imgPrev.width() / 2
	});
	return param;
};

function setCssOver(param){
	
	//height Centering
	var OuterConteinerHeight = param.OuterContainer.height();
	
	param.OuterContainer.css({
		"padding-top" : ( OuterConteinerHeight - param.imgPrev.height() ) / 2,
		"height" : OuterConteinerHeight - (OuterConteinerHeight - param.imgPrev.height() ) / 2,
	});
	
	//width Centering
	param.InnerContainer.css({
		"width" : param.imgPrev.width(),
		"height" : param.imgPrev.height()
	});

	return param;
}



