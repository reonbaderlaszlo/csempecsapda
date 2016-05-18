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

});
