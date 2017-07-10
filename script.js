$(document).ready(function () {
  var h1 = document.querySelector('h1')
  var $h1 = $('h1')

  // console.log('h1', h1) // returns html node
  // console.log('$h1', $h1) // return jQ object

   // target the odd element of li
  var allLi = document.querySelectorAll('.list-item')
  var $allLi = $('.list-item-jq')

  for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener('click', clickDom)
  }

  function clickDom (event) {
    alert(event.target.innerText)
  }

  // add event listener with jQuery
  $allLi.on('click', clickJq)

  function clickJq () {
    // this here is html node that's being clicked

    // this == event.target
    // native dom manipulation way
    // console.log(this.innerText)

    // getter of innerText of html node
    // this.innerText

    // setter of innerText
    // this.innerText = 'sth'

    if ($(this).text() === 'clicked') {
      $(this).text('unclicked')
    } else {
      $(this).text('clicked')
    }

    $(this).toggleClass('shade')
  }

// target the button -ADD TO LUNCH
  var $addtolunch = $('#addtolunch')
  var $lunch = $('.lunch')

  $addtolunch.on('click', function () {
    var $firstBrekkie = $('.breakfast li').first()

    // old way
    var lunch = document.querySelector('.lunch')

    // new way, no need to create one by one
    $lunch.prepend($firstBrekkie)
  })

  // target the button - ADD TO EAT
    var $addtoeat = $('#eat')
    var $eatList = $('.eat')

    $addtoeat.on('click', function () {
      var $grab = $('.lunch li').first()

    // new way, no need to create one by one
      $eatList.prepend($grab)
    })

    // target the button - BACK TO BREKKIE
      var $backToBrekkie = $('#back')
      var $brekkieList = $('.breakfast')

      $backToBrekkie.on('click', function () {
        var $grab = $('.eat li').last()

        $brekkieList.prepend($grab)
      })


  var $traverse =$('#traverse')
  var $tuesday = $('.breakfast').find('.tuesday')

  $traverse.on('click', function () {
  console.log($tuesday.find('li').first()
  )
  })
})

})
