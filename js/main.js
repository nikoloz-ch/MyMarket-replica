$(document).ready(function(){
  $('.carousel1').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });
  $('.container2').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
    }
  })
});
$('.container3').owlCarousel({
  loop:false,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})
let button = document.querySelector('.whops')
let hats = document.querySelectorAll('.hat');
let back = document.querySelector('.womp')

let butts = document.querySelectorAll('.butts');
let lilbros = document.querySelectorAll('.lilbro');

let id = 0;
lilbros.forEach(lilbro => {
  lilbro.classList.add('inactive');
  lilbros[0].classList.remove('inactive');
})

butts.forEach((butt, index) => {
  butt.addEventListener('click', function () {
    butts.forEach(element => {
      element.classList.remove('current');
    })
    butts[index].classList.add('current');

    lilbros.forEach(lilbro => {
      lilbro.classList.add('inactive');
      lilbros[index].classList.remove('inactive');
    })

  } )
});
let batters = document.querySelectorAll('.kiko')
let nerds = document.querySelectorAll('.goo')

nerds.forEach(nerd => {
  nerd.classList.add('inactive');
  nerds[0].classList.remove('inactive')
})
batters.forEach((batter, index) => {
  batter.addEventListener('click', function() {
    batters.forEach(element => {
      element.classList.remove('current');
    })
    batters[index].classList.add('current');
    nerds.forEach(nerd => {
      nerd.classList.add('inactive');
      nerds[index].classList.remove('inactive');
    })
  })
})
let up = document.querySelector('.up')
up.addEventListener('click', function () {
  window.scrollTo(0, 0)
})


