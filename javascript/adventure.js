
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

