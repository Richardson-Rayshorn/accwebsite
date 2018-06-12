$(function(){
  //home page body
      $("#area").load("home.html", function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#area" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });


    //the main navigation
    $("#home").click(function(){
      $("#home").fadeOut(500);
      $("#area").load("home.html", function(response, status, xhr){
        $("#home").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });

    $("#about").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("about.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });

    $("#features").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("feature.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });

    $("#prices").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("price.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });

    $("#contact").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("contact.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });

    //the side bar
    $("#spanFeature").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("feature.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });
    $("#spanHome").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("home.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });
    $("#spanAbout").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("about.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });
    $("#spanPrice").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("price.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });
    $("#spanContact").click(function(){
      $("#area").fadeOut(500);
      $("#area").load("contact.html", function(response, status, xhr){
        $("#area").fadeIn(800);
          if(status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#area").html(msg + xhr.status + " " + xhr.statusText);
          }
      });
    });
});
