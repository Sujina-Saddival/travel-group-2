$(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

 /* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})
$(document).ready(function(){
   var $input = $("#txtAcrescimo");
    $input.val(0);
     $(".altera").click(function(){ 
      if ($(this).hasClass('acrescimo')) $input.val(parseInt($input.val())+1); 
       else if ($input.val()>=1) 
        $input.val(parseInt($input.val())-1); 
    });
   $("#image1").mouseenter(function() {
               $(".middel1").show();
    });
    $("#image1").mouseleave(function() {
               $(".middle1").hide();
    });
    });

