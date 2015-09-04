$(document).ready(function() {

  function activation() {
    $('div#banner').backstretch([
      "assets/img/banner-men.jpg",
      "assets/img/banner-ladies.jpg",
      "assets/img/banner-touch.jpg"
    ], {duration: 2500, fade: 750});
  }

  function checkOnResize() {
    var status = $('div#banner').data("backstretch");
    if (checkSize() == "big" &&  status == undefined) {
      activation();
    } else if (checkSize() == "big") {
      $.noop();
    } else if (checkSize() == "small" && status == undefined) {
      $.noop();
    } else {
      activation();
    }
  }

  function switchStates() {
    if ($("i.fa", $('div#banner')).hasClass("fa-pause")) {
      $('div#banner').backstretch('pause');
      $("i.fa-pause").attr("class", "fa fa-play");
    } else {
      $('div#banner').backstretch('resume');
      $("i.fa-play").attr("class", "fa fa-pause");
    }
  }

  function checkSize(){
    if ($('#banner').width() < 768 ){
      return "small"
    } else {
      return "big"
    }
  }

  activation();
  /* Init stuff */
  /* if (checkSize() == "big") {
     activation();
     } */
  /* $(window).resize(checkOnResize); */
  /* Click on div to decide if pause or resume, navbar not included */
  $('div#banner > :not(.navbar)').click(switchStates);

});
