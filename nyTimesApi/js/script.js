// function loadData(){
//

// var $body = $('body');
// var $wikiElem = $('#wikipidea-links');
// var $nytHeaderElem = $('#nytime-header');
// var $nytElem = $('#nytimes-articles');
// var $greeting = $('#greeting');
//
// $wikiElem.text('');
// $nytElem.text('');
//
//
//
// $.getJSON(url, function(data){
//
//   $nytHeaderElem.text('New York Times Articles About' + cityStr);
//
//   articles = data.response.docs;
//   for (var i = 0; i < articles, length; i ++) {
//     var article = articles[i];
//     console.log(articles);
//     $nytElem.append('<div>' + articles + '</div>')
//     // $nytElem.append('<li class="article"><a href="'+article.web_url'">'+article.headline.main+'</a><p>'+article.snippit+'</p></li>');
//   };
// }).error(function(e){
//   $nytHeaderElem.text('New York Times Articles Could not Be Loaded')
// });
//
//


function loadData(){
  var city = document.getElementById('city').value;

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "42281bb0f84c4a83aa80ae4b46666c78",
    'q': city,
    'begin_date': '20000101'
  });

  $.ajax({
    url: url,
    dataType: 'JSON',
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    articles=result.response.docs;


      for (var i=0;i<articles.length;i++){
        var article=articles[i];
        $('body').append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>' + article.snippet + '</p>'+'</li>');

      };


  }).fail(function(err) {
    throw err;
  });


}
