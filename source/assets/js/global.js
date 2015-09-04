//= require jquery2
//= require bootstrap
//= require jquery.backstretch
//= require moment
//= require fullcalendar
//= require fullcalendar/gcal
//= require fotorama

var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
