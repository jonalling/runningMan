$( document ).ready(function() {
	
	console.log( 'go!' );

	//
	// Stop iPad from scrolling
	//
	
	$(document).bind('touchmove', false);
	
	//
	// Start/Stop animations
	//
	
	var animatedScenes = $('#newYork-ink');
	var animatedBody = $('#wholeBody,#upperBody,#rightArm,#rightLowerArm,#rightHand,#rightLeg,#rightLowerLeg,#rightFoot,#leftArm,#leftLowerArm,#leftHand,#leftLeg,#leftLowerLeg,#leftFoot');
	
	function playAnimation() {
		animatedScenes.css({'animation-play-state':'running','-webkit-animation-play-state':'running'});
        animatedBody.css({'animation-play-state':'running','-webkit-animation-play-state':'running'});
        animatedScenes.addClass('animated');
        animatedBody.addClass('animated');
	}

	function pauseAnimation() {
		animatedScenes.css({'animation-play-state':'paused','-webkit-animation-play-state':'paused'});
        animatedBody.css({'animation-play-state':'paused','-webkit-animation-play-state':'paused'});
        animatedScenes.removeClass('animated');
        animatedBody.removeClass('animated');
        setSpeed();
	}

	//
	// Delay start of animations on pageload
	//

	setTimeout(function() {
        playAnimation()
    }, 1500);

    //
    // Check if mobile
    //

    var isMobile = {
        Android: function() {
        	return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {
        	return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {
        	return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {
        	return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {
        	return navigator.userAgent.match(/IEMobile/i);},
        any: function() {
        	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
    };

	//
    // Set running cadence based on slider value (svg + css default = 174)
    //

    var stepRate

    function getSpeed() {
    	if ( !isMobile.any() ){
    		stepRate = $('.single-slider').val()
    		console.log(stepRate);
    	}else{
    		stepRate = $('a.button.active').attr("value")
    		console.log(stepRate);
    	}
    }

    function setSpeed() {
        getSpeed();
        var timing = 1 / ((stepRate / 2) / 60) // seconds per right step
        var timingHalf = timing / 2 // whole and upper body bounce each left and right step
        var timingScene = timing * 30
        var delayBody = timingHalf / 2 // starting delay for whole and upper body
        var delayOne = timing * 1 / 14 // one frame delay
        var delayThree = timing * 3 / 14 // three frame delay
        var delaySeven = timing * 7 / 14 // seven frame delay
        var delayFoot = timing / 5 // arbitrary to make the foot rotation sync with ground
        var delayOneLeft = delayOne + timingHalf // alternate left and right
        var delayThreeLeft = delayThree + timingHalf // alternate left and right
        var delaySevenLeft = delaySeven + timingHalf // alternate left and right
        var delayFootLeft = delayFoot + timingHalf // alternate left and right
       	$('#wholeBody,#upperBody').css({'animation-duration':'' + timingHalf + 's','animation-delay':'' + delayBody +'s','-webkit-animation-duration':'' + timingHalf + 's','-webkit-animation-delay':'' + delayBody +'s'});
        $('#rightArm').css({'animation-duration':'' + timing + 's','animation-delay':'' + delayOne +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delayOne +'s'});
        $('#rightLowerArm').css({'animation-duration':'' + timing + 's','animation-delay':'' + delaySeven +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delaySeven +'s'});
        $('#rightHand').css({'animation-duration':'' + timing + 's','-webkit-animation-duration':'' + timing + 's'});
        $('#rightLeg').css({'animation-duration':'' + timing + 's','-webkit-animation-duration':'' + timing + 's'});
        $('#rightLowerLeg').css({'animation-duration':'' + timing + 's','animation-delay':'' + delayThree +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delayThree +'s'});
        $('#rightFoot').css({'animation-duration':'' + timing + 's','animation-delay':'' + delayFoot +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delayFoot +'s'});
        $('#leftArm').css({'animation-duration':'' + timing + 's','animation-delay':'' + delayOneLeft +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delayOneLeft +'s'});
        $('#leftLowerArm').css({'animation-duration':'' + timing + 's','animation-delay':'' + delaySevenLeft +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delaySevenLeft +'s'});
        $('#leftHand').css({'animation-duration':'' + timing + 's','animation-delay':'' + timingHalf +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + timingHalf +'s'});
        $('#leftLeg').css({'animation-duration':'' + timing + 's','animation-delay':'' + timingHalf +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + timingHalf +'s'});
        $('#leftLowerLeg').css({'animation-duration':'' + timing + 's','animation-delay':'' + delayThreeLeft +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delayThreeLeft +'s'});
        $('#leftFoot').css({'animation-duration':'' + timing + 's','animation-delay':'' + delayFootLeft +'s','-webkit-animation-duration':'' + timing + 's','-webkit-animation-delay':'' + delayFootLeft +'s'});
        $('#newYork-ink').css({'animation-duration':'' + timingScene + 's','animation-delay':'' + delayOne +'s','-webkit-animation-duration':'' + timingScene + 's','-webkit-animation-delay':'' + delayOne +'s'});
        // console.log('stepRate: ' + stepRate);
        // console.log('timing: ' + timing);
        // console.log('timingHalf: ' + timingHalf);
        // console.log('timingScene: ' + timingScene);
        // console.log('delayBody: ' + delayBody);
        // console.log('delayOne: ' + delayOne);
        // console.log('delayThree: ' + delayThree);
        // console.log('delaySeven: ' + delaySeven);
        // console.log('delayFoot: ' + delayFoot);
        // console.log('delayOneLeft: ' + delayOneLeft);
        // console.log('delayThreeLeft: ' + delayThreeLeft);
        // console.log('delaySevenLeft: ' + delaySevenLeft);
        // console.log('delayFootLeft: ' + delayFootLeft);
    }

    function changeSpeed() {
    	pauseAnimation();
    	setTimeout(playAnimation,600);
    }

    //
    // Slider for pace adjustment
    // References jRange.js 
    //

    function addSlider() {
    	$('.single-slider').jRange({
            from: 120,
            to: 220,
            step: 1,
            scale: [120,220],
            format: '%s steps/minute',
            width: 500,
            showLabels: true,
            onstatechange: function(){
	            changeSpeed();
            }
    	});
    }

    //
    // Toggle slider and buttons for web/mobile
    //
    
    if( !isMobile.any() ){
    	addSlider()
    	$('.buttonGroup').css({'display':'none'});
    } 

    //
    // Toggle active pace button
    //

    $('.button').on({'touchstart' : function() {
    	$(this).toggleClass('active'); // toggle current clicked element  
	    $('.button').not(this).removeClass('active'); // remove active from the others
	    changeSpeed();
    }
	});

});
