$(document).ready(function(){
  $("#two").show();
  $(".asian").hide();
  $(".austra").hide();
  $(".europ").hide();
  $(".souame").hide();
  $(".show").click(function(){
    $("#Showpara").toggle();
  });
  $(".show1").click(function(){
    $("#Showpara1").toggle();
  });
  $(".show2").click(function(){
    $("#Showpara2").toggle();
  });
  $(".show3").click(function(){
    $("#Showpara3").toggle();
  });
  $(".show4").click(function(){
    $("#Showpara4").toggle();
  });
  $(".show5").click(function(){
    $("#Showpara5").toggle();
  });
  $(".show6").click(function(){
    $("#Showpara6").toggle();
  });
  $(".show7").click(function(){
    $("#Showpara7").toggle();
  });
  $(".show8").click(function(){
    $("#Showpara8").toggle();
  });
  $(".show9").click(function(){
    $("#Showpara9").toggle();
  });
  $(".show10").click(function(){
    $("#Showpara10").toggle();
  });
  $(".show11").click(function(){
    $("#Showpara11").toggle();
  });
  $(".show12").click(function(){
    $("#Showpara12").toggle();
  });
  $(".show13").click(function(){
    $("#Showpara13").toggle();
  });
  $(".show14").click(function(){
    $("#Showpara14").toggle();
  });
  $(".show15").click(function(){
    $("#Showpara15").toggle();
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