$(function(){

      $("#root").load("header.html", function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#root" ).html( msg + xhr.status + " " + xhr.statusText );
      }
    });


});
