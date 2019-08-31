'use strict'

window.onload = function() {
  var cardSquare        = document.getElementsByClassName('card-square'),
      card              = document.getElementsByClassName('card'),
      cardWrapper       = document.getElementsByClassName('card-wrap'),
      cardPhoto         = document.getElementsByClassName('card-photo'),
      photoImage        = document.getElementsByClassName('card-photo__img'),
      namePseudo        = document.getElementsByClassName('card-photo__name-pseudo'),
      professionPseudo  = document.getElementsByClassName('card-photo__profession-pseudo'),
      cardInfo          = document.getElementsByClassName('card-info'),
      cardInfoArrow     = document.getElementsByClassName('card-info__arrow')
  
  new TimelineMax().to(cardSquare, 0.5, {
    transform: 'translateX(0)'
  })
  .to(cardSquare, 0.5, {
    transform: 'rotate(180deg)'
  })
  .to(cardSquare, 0.5, {
    width: '310px',
    height: '370px',
    ease: Elastic.easeOut
  })
  .to(cardSquare, 0, {
    display: 'none'
  })
  .to(card, 0, {
    display: 'flex'
  })
  .to(cardWrapper, 0, {
    margin: 'auto'
  })
  .to(namePseudo, 0.5, {
    width: '0',
    ease: Expo.easeOut
  })
  .to(professionPseudo, 0.5, {
    width: '0',
    ease: Expo.easeOut
  })
  .to(photoImage, 0.7, {
    opacity: '1',
    transform: 'translateY(0)',
    filter: 'grayscale(0)',
    ease: Power3.easeOut
  })
  .to(card, 1, {
    width: '800px',
    ease: Elastic.easeOut
  })
  .to(cardInfo, 0.6, {
    width: '80%',
    transform: 'translateX(0)',
    opacity: 1,
    ease: Circ.easeOut
  })
  .to(cardInfoArrow, 0.5, {
    opacity: 1
  })
}