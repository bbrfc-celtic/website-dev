//= require photos

var timeToAct;
timeToAct = $('#banner').outerHeight();
$(window).scroll(function() {

  if ($(window).scrollTop() > timeToAct) {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $('.fotorama').fotorama({
      data: photos,
      nav: 'thumbs',
      auto: false,
      loop: true,
      keyboard: true,
      trackpad: true,
      swipe: true,
      shuffle: true,
      width: '100%',
      maxheight: '600px'
    });
    $(this).unbind('scroll');
  }
});
