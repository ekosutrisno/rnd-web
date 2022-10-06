var carouselProcess = new Flickity( '.main-carousel', {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  autoPlay: 3500,
  pauseAutoPlayOnHover: true
});

var carouselDev = new Flickity( '.carousel-dev', {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  autoPlay: 3500,
  pauseAutoPlayOnHover: true
});

var carouselTeam = new Flickity( '.team-carrousel', {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  freeScroll: true
});

var prev = document.getElementById('btn-prev');
var next = document.getElementById('btn-next');

prev.addEventListener("click", function(){
  carouselTeam.previous( true, false );
});

next.addEventListener("click", function(){
  carouselTeam.next( true, false );
})