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
    
    
    
    // jQuery Selectors 
    
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
    
//    $('div:contains("Arjun")').css('border', 'solid 1px red');
    
    
    /* --------------------
       jQuery event methods
       -------------------- */
    
    $('#box').click(function() {
        alert("you just clicked the box");
    });
    
    
    $("input").blur(function() {
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
    });
    
    
    $('input').keydown(function() {
        
        if($(this).val() !== ""){
            $(this).css('border', 'solid 1px #777');
            $('#box').text('thanks for that!');
        }
        
    });
    
    
    $('#box').hover(function() {
       $(this).text('you hovered in!'); 
    }, function() {
        $(this).text('you hovered out!');
    });
    
    
    /* ---------------
       JQUERY CHAINING
       --------------- */
    
    $('.notification-bar').delay(1000).slideDown().delay(3000).fadeOut();
    
    
    /* ----------------
       JQUERY HIDE/SHOW
       ---------------- */
    
//    $('h1').hide();
//    $('div.hidden').show();
    $('div.hidden').fadeIn(8000);
    
    $('#box1').click(function() {
        $(this).fadeTo(1000, 0.25, function() {
            //animation is complete
            
            
            $(this).slideUp();
        });
    });
    
    $('div.hidden').slideDown();
    
    $('button').click(function() {
        $('#box1').slideToggle();
    })
    
    
    
    
    
    
    
    
    
    
});