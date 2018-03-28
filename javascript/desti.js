$(document).ready(function(){
  $("#two").show();
  $(".asian").hide();
  $(".austra").hide();
  $(".europ").hide();
  $(".souame").hide();

	$(".show").click(function(){
      // $(".panel-body").hide();
      $("#Showpara").toggle();
 	 });
	$(".show1").click(function(){
      // $(".panel-body").hide();
      $("#Showpara1").toggle();
  	});
  	$(".show2").click(function(){
      // $(".panel-body").hide();
      $("#Showpara2").toggle();
  	});
  	$(".show3").click(function(){
      // $(".panel-body").hide();
      $("#Showpara3").toggle();
  	});
  	$(".show4").click(function(){
      // $(".panel-body").hide();
      $("#Showpara4").toggle();
  	});
  	$(".show5").click(function(){
      // $(".panel-body").hide();
      $("#Showpara5").toggle();
  	});
  	$(".show6").click(function(){
      // $(".panel-body").hide();
      $("#Showpara6").toggle();
  	});
  	$(".show7").click(function(){
      // $(".panel-body").hide();
      $("#Showpara7").toggle();
  	});
  	$(".show8").click(function(){
      // $(".panel-body").hide();
      $("#Showpara8").toggle();
  	});
  	$(".show9").click(function(){
      // $(".panel-body").hide();
      $("#Showpara9").toggle();
  	});
  	$(".show10").click(function(){
      // $(".panel-body").hide();
      $("#Showpara10").toggle();
  	});
  	$(".show11").click(function(){
      // $(".panel-body").hide();
    
      $("#Showpara11").toggle();
  	});

    $("#asia").click(function(){
      
      $(".austra").hide();
      $(".europ").hide();
      $(".souame").hide();
      $(".asian").show();
      $(".centered").text("asia");
    });
    $("#austr").click(function(){
      
      $(".asian").hide();
      $(".europ").hide();
      $(".souame").hide();
      $(".austra").show();
      $(".centered").text("Australia");
    });
    $("#euro").click(function(){
      
      $(".asian").hide();
      $(".austra").hide();
      $(".souame").hide();
      $(".europ").show();
      $(".centered").text("Europe");
    });
    $("#soame").click(function(){
      
      $(".asian").hide();
      $(".austra").hide();
      $(".europ").hide();
      $(".souame").show();
      $(".centered").text("South America");
    });
});