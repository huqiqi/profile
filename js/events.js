
	$(document).ready(function(){
	
		
		$('.span1').click(function(){
			$('.span1').css('display', 'none');
			$('.span2').css('display', 'block');
		});
		
		$('.span2').click(function(){
			$('.span2').css('display', 'none');
			$('.span1').css('display', 'block');
		});

		
		$('#home-button').click(function(){
			

			if ($('#home').css('display')=='none') {
				$('#contant-box').animate({
				    height: '0',top: '448'
				}, 1500, function() {
					$('#contant-box').animate({
				    height: '361',top: '87'}, 1500);			    
				    $('#home').css('display', 'block');
				    $('#about').css('display', 'none');
				    $('#portfolio').css('display', 'none');
				    $('#contact').css('display', 'none');
				    $('#social').css('display', 'none');
				    $('#nav-bar').css('visibility', 'visible');
				});
			}
		});	
		
		$('#about-button').click(function(){
		
			if ($('#about').css('display')=='none') {
				$('#contant-box').animate({
				    height: '0',top: '448'
				}, 1500, function() {
					$('#contant-box').animate({
				    height: '361',top: '87'}, 1500);
				    $('#home').css('display', 'none');
				    $('#about').css('display', 'block');
				    $('#portfolio').css('display', 'none');
				    $('#social').css('display', 'none');
				    $('#contact').css('display', 'none');
				});
			}
		});	
		
		$('#portfolio-button').click(function(){
		
			if ($('#portfolio').css('display')=='none') {
				$('#contant-box').animate({
				    height: '0',top: '448'
				}, 1500, function() {
					$('#contant-box').animate({
				    height: '361',top: '87'}, 1500);
				    $('#home').css('display', 'none');
				    $('#about').css('display', 'none');
				    $('#portfolio').css('display', 'block');
				    $('#social').css('display', 'none');
				    $('#contact').css('display', 'none');
				});
			}
		});	
		
		$('#social-button').click(function(){
		 
			if ($('#social').css('display')=='none') {
				$('#contant-box').animate({
				    height: '0',top: '448'
				}, 1500, function() {
					$('#contant-box').animate({
				    height: '361',top: '87'}, 1500);
				    $('#home').css('display', 'none');
				    $('#about').css('display', 'none');
				    $('#portfolio').css('display', 'none');
				    $('#social').css('display', 'block');
				    $('#contact').css('display', 'none');
				});
			}
		});	

		$('#contact-button').click(function(){
			
			if ($('#contact').css('display')=='none') {
				$('#contant-box').animate({
				    height: '0',top: '448'
				}, 1500, function() {
					$('#contant-box').animate({
				    height: '361',top: '87'}, 1500);
				    $('#home').css('display', 'none');
				    $('#about').css('display', 'none');
				    $('#portfolio').css('display', 'none');
				    $('#social').css('display', 'none');
				    $('#contact').css('display', 'block');
				});
			}
		});	

		$('li.pro1').click(function(){		
			
			//$('div.pro1').css('display', 'block');
			$('div.pro1').fadeIn("slow");
			$('div.pro2').css('display', 'none');
			$('div.pro3').css('display', 'none');
		});
		
		$('li.pro2').click(function(){		
			$('div.pro1').css('display', 'none');
			$('div.pro2').fadeIn("slow");
			$('div.pro3').css('display', 'none');
		});
		
		$('li.pro3').click(function(){		
			$('div.pro1').css('display', 'none');
			$('div.pro2').css('display', 'none');
			$('div.pro3').fadeIn("slow");
		});
		
	});