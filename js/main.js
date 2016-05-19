$(function(){
    
	$('.panel.agreement button').on('click', function() {

        $('.panel.agreement').fadeOut('fast', function() {

            $('.panel.description').fadeIn('fast');

        });

    });

    $('.panel.description button').on('click', function() {

        $('.panel.description').fadeOut('fast', function() {

            $('.panel.game').fadeIn('fast');

        });

    });

    $('.panel.winners .tabs button').on('click', function(){

    	$('.panel.winners .tabs button').removeClass('active');

    	$(this).addClass('active');

    	var id = $(this).attr('class').split(' ')[0];

    	$('.names div').hide();

    	$('.names .' + id).fadeIn('fast');

    });

    var setWidth = $('.panel.game .game-box').width() / 4;

    $('.panel.game .game-box').css('left', - setWidth);

});
