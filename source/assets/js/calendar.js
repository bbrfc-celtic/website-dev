//= require facebook-events.js

jQuery( document ).ready(function( $ ) {
  // Function to decide which calendar to show

  function chooseCalendar() {
    if (location.pathname.indexOf('women') != -1) {
      return womenCalendars;
    } else if (location.pathname.indexOf('men') != -1) {
      return menCalendars;
    } else if (location.pathname.indexOf('touch') != -1) {
      return touchCalendars;
    } else {
      return allCalendars;
    }
  }

  // Club calendar
  var clubCalendar = {
    events: facebookEvents,
  };

  // Men calendars
  var menCalendars = {
    googleCalendarId: '8fq7eo5a737651vubupdknf41omd44j2@import.calendar.google.com',
    color: "#00994C"
  };

  // Touch calendars
  var touchCalendars = {
    googleCalendarId: 'rqvfi5889grtqnojljp600serk@group.calendar.google.com',
    color: "#d9272d"
  };

  // Women calendars
  var womenCalendars = {
    googleCalendarId: 'kj81dj1fllc8uaduu9vi0s77kpdlmb20@import.calendar.google.com',
    color: "purple"
  };

  // School calendars
  var schoolCalendars = {};

  // All calendars
  var allCalendars = [clubCalendar, menCalendars, touchCalendars, womenCalendars, schoolCalendars];

  calendarChosen = chooseCalendar();

  $('#calendar').fullCalendar({
    // important!
    googleCalendarApiKey: 'AIzaSyD3jRcW77Y10CYpCXWLdC6WJrmCT5GXyH4',
    eventSources: calendarChosen,

    // Customisation fullCalendar
    firstDay: 1,
    eventRender: function(event, element) {
      var textToShow = event.start.format('HH:mm');
      if (event.end) {
	textToShow = textToShow.concat(' - ' + event.end.format('HH:mm'));
      }
      element.tooltip({
	title: event.title + ' - ' + textToShow,
      });
    },

    header: {
      left: "agendaWeek basicWeek month",
      center: "title",
      right: 'today prev,next',
    },
    views: {
      basic: {
	// options apply to basicWeek and basicDay views
      },
      agenda: {
	// options apply to agendaWeek and agendaDay views
      },
      week: {
	// options apply to basicWeek and agendaWeek views
      },
      day: {
	// options apply to basicDay and agendaDay views
      },
      month: {
	buttonText: "Month",
	timeFormat: "H:mm",
	displayEventEnd: false,
      },
      basicWeek: {
	buttonText: "Week",
	timeFormat: "H:mm",
	displayEventEnd: true,
      },
      agendaWeek: {
	buttonText: "Agenda",
	timeFormat: "H:mm",
	displayEventEnd: true,

      },
    },
  });
});
