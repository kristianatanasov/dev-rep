"use strict"

$(document).ready(function() {
    $('#menu').bind('click',function(event){
        $('#mainnav ul').slideToggle();
    });

    $(window).resize(function(){  
        var w = $(window).width();  
        if(w > 768) {  
            $('#mainnav ul').removeAttr('style');  
        }  
    });
  
});