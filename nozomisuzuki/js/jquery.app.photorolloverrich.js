// JavaScript Document
$(function(){
	PhotoRolloverRich({
		'imgPrev'      : $("img#preview"),
		'OuterContainer' : $("#preview-outer-container"),
		'InnerContainer' : $("#preview-inner-container"),
		'OverBase'     : $("#over-base"),
		'OverLeft'     : $("#over-left"),
		'OverRight'    : $("#over-right"),
		'AllowLeft'    : $("#allow-left"),
		'AllowRight'   : $("#allow-right"),
		'titlePrev'    : $("#titleprev"),
		'crnt'         : 0,
		'view'         : 0,
		'max'          : 7
	});
});