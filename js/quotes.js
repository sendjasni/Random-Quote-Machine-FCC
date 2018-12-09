
/*

 Code by SENDJASNI

*/

$(document).ready(function () {
    var author, quote, color;
    
    $("#getQuotes").on("click", function () {

        var index = Math.floor(Math.random() * (colors.length));
        color = colors[index];
        $('#failedTweet').addClass('invisible');
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
            function (json) {
                quote = json.quoteText;
                author = json.quoteAuthor;


                var html = "<h1> &ldquo; " + quote + "  &rdquo;</h1> <br>";
                html += "<h3> --" + author + "</h3>";
                $("#display").html(html);
                $('body').css('background-color', color);


            });
    });

    $('#shareQuote').on('click', function () {
        //$('span p').remove();

        var textToTweet = '#TodayQuote  ' + quote + ' --' + author;
        console.log(textToTweet);
        if (textToTweet.length > 240) {
            $('#failedTweet').removeClass('invisible');
            
        } else {
            var twtLink = 'https://twitter.com/home?status=' + encodeURIComponent(textToTweet);
            window.open(twtLink, '_blank', "width=800, height=300");
        }
    });
    
    
     $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
            function (json) {
                quote = json.quoteText;
                author = json.quoteAuthor;


                var html = "<h1> &ldquo; " + quote + "  &rdquo;</h1> <br>";
                html += "<h3> --" + author + "</h3>";
                $("#display").html(html);


            });
});


// Js object of some colors
var colors = ['#0074D9', '#7FDBFF', '#39CCCC', '#FFDC00', '#01FF70', '#2ECC40', '#3D9970', '#FF851B', '#FF4136', '#85144b', '#F012BE', '#B10DC9'];
