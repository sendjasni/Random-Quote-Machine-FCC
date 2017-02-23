

/*
  Code by SENDJASNI
*/

$(document).ready(function(){  
  var author, quote, color;

  $("#getQuotes").on("click", function(){

    var index = Math.floor(Math.random() * (colors.length));
    color =  colors[index];
 
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
     function(json){
          quote = json.quoteText;
          author = json.quoteAuthor;
         
          
    var html = "<h1> " + quote + "</h1> <br>";
    html += "<h3> --" + author + "</h3>";
    $("#display").html(html);
    $('body').css('background-color', color);

    });
  });
});

  

// Js object of some colors
var colors = ['#0074D9','#7FDBFF','#39CCCC','#FFDC00','#01FF70','#2ECC40','#3D9970','#FF851B','#FF4136','#85144b','#F012BE','#B10DC9', '#001f3f'];
