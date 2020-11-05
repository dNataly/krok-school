$(function () { 
    var header = $(".fixed_button"); 
    $(window).scroll(function () { 
        var scroll = $(window).scrollTop(); 

        if (scroll >= 6450) { 
            header.removeClass('fixed_button') 
                    .addClass("hide_button"); 
        } else { 
            header.removeClass("hide_button") 
                    .addClass('fixed_button'); 
        } 
    }); 
}); 