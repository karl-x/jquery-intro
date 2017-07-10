
$(document).ready(function () {

  var image_url = `https://image.tmdb.org/t/p/w300/`
  var $input = $('input')

  $input.on('keyup', searchMovies)

  function searchMovies() {
    var $query = $(this).serializeArray()[0].value
    console.log($query)
    var movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=2bd96942788e90ed12993691383d0ee3&query='

    $.get(movie_url + $query)
    .done(function (output) {
      var movie_json = output.results
      $('.movie-list').empty()

      for (var i = 0; i < movie_json.length; i++ ) {
        var $list = $('<li>')
        var $img = $('<img>')
        $img.attr( {
          'src': image_url + movie_json[i].poster_path,
          'alt': movie_json[i].title
        })
        $list.append($img)
        $('.movie-list').append($list)
      }
    })
  }


})
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
