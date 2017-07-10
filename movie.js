

$(document).ready(function () {

  $('button').click(function() {
    location.reload()
  })

  //run ajax now
  //2 methods = GET and POST
  var discover_movie_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d1336bbd6f0ed9df555b67d3520350a8'
  //


  var image = "https://image.tmdb.org/t/p/w500/"

  $.get(discover_movie_url)
  .done(function(data) {
    $('h2').text('Popular Movies:')
    var movie_json = data.results



    for (var i = 0; i < movie_json.length; i++) {

      var $movieList = $('.movie-list')
      var $newLi = $('<li>').css({
        'display': 'inline',
        'list-style-type' : 'none',
      })

      var $newImg = $('<img>').css({
      })

      $newImg.attr('src', image + movie_json[i].poster_path)
        $newLi.append($newImg)
        $movieList.append($newLi)
    }
  })

//============================

  var $form = $('form')
  $form.on('keydown', function (event) {
    if (event.which == 13){
      event.preventDefault()
    }
    var $userInput = $(this).serializeArray()[0].value

    var search_movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=d1336bbd6f0ed9df555b67d3520350a8&query='

    $.get(search_movie_url + $userInput)
    .done(function (data) {
      $('h2').text('Search Results:')
      var movie_json = data.results
      $('.movie-list').empty()

      for (var i = 0; i < movie_json.length; i++) {
        var image = "https://image.tmdb.org/t/p/w500/"
        var $movieList = $('.movie-list')


        var $newLi = $('<li>').css({
          'display': 'inline-block',
          'list-style-type': 'none',
        })

        var $newImg = $('<img>').css({
        })
        $newImg.attr({
          src: image + movie_json[i].poster_path,
          alt: movie_json.backdrop_path
        })

        $newLi.append($newImg)
        $movieList.append($newLi)

      }
    })
  })

})
