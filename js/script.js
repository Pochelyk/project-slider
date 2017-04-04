$(document).ready(function () {
    $('#clickme').click(function(){
        $('.item').fadeOut('slow');
    });
    $('#clickme1').click(function(){
        $('.item').fadeIn('slow');
    });
    $('#clickme2').click(function(){
        $('.item').slideUp('slow');
    });
    $('#clickme3').click(function(){
        $('.item').slideDown('slow');
    });
    $('#clickme4').click(function(){
        $('.item').slideToggle('slow');
    });
});



