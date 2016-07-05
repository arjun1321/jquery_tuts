// script.js

$(function() {
    
//    $(selector).action();
    
    
//    $('#box').hide();
//    
//    $('.thing').fadeOut();
//    
//    $('h1').css("color","blue" );
    
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    
//    $('h2,h3,h4').css("border","solid 1px red");
//    
//    $('div#container').css('border', 'solid 1px red');
//    
//    $('p.lead').css('border', 'solid 1px red');
//    
//    $(li:first).css('border', 'solid 1px red');
//    
//    $('p:even').css('border', 'solid 1px red');
//    
//    $('div em').css('border', 'solid 1px red');
//    
//    
//    $('div > p').css('border', 'solid 1px red');
//    
//    $(':header').css('border', 'solid 1px red');
    
    $('div:contains("Arjun")').css('border', 'solid 1px red');
    
});