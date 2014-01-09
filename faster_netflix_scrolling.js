// ==UserScript==
//
// @name           Faster NetFlix Scrolling
// @description    Speeds up the annoyingly slow Netflix scrolling speed 
// @namespace      http://github.com/fsosa
// @author         fsosa 
// @version        0.1
// @include        http://movies.netflix.com/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
// @history        0.1 First version, only one scroll speed available
//
// ==/UserScript==

var SPEEDS = {
	FAST: 1, 
	MEDIUM: 2.5,
	DEFAULT: 4, 
}

function setScrollSpeed(speed) {
	jQuery("div.mrow").each(function(){
		jQuery(this).data().sliderManager.slider.speed = speed;
	}); 

	console.log("Set scroll speed to " + speed);
}

setScrollSpeed(SPEEDS.FAST); 