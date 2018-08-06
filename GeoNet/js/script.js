

function loadTitle(){



var url = 'https://api.geonet.org.nz/news/geonet'

$.ajax({
  url: url,
  dataType: 'JSON',
  type: "GET",

  success:function(data){
    console.log(data);
    articles=data.feed;

      for (var i=0;i<articles.length;i++){
        var article=articles[i];
        $('body').append('<li class="article">'+'<a href="'+article.link+'">'+article.title+'</a>'+'<p>' + article.published + '</p>'+'</li>');
      }


  },
  error:function(error){
      console.log("ERROR");
      console.log(error);
  }

});


}
