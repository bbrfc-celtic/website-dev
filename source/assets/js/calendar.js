//= require facebook-events

jQuery( document ).ready(function( $ ) {
  // Function to decide which calendar to show

  function chooseCalendar() {
    if (location.pathname.indexOf('women') != -1) {
      return womenCalendars;
    } else if (location.pathname.indexOf('men') != -1) {
      return menCalendars;
    } else if (location.pathname.indexOf('touch') != -1) {
      return touchCalendars;
    } else if (location.pathname.indexOf('school') != -1) {
      return schoolCalendars
    } else {
      return allCalendars;
    }
  }

  // Club calendar
  var clubCalendar = {
    events: facebookEvents,
    color: "#fa6900"
  };

  // Men calendars
  var menCalendars = {
    googleCalendarId: '8fq7eo5a737651vubupdknf41omd44j2@import.calendar.google.com',
    color: "#00994c"
  };

  // Touch calendars
  var touchCalendars = {
    googleCalendarId: 'rqvfi5889grtqnojljp600serk@group.calendar.google.com',
    color: "#ce0000"
  };

  // Women calendars
  var womenCalendars = {
    googleCalendarId: '8nj23co4raufc6eti6db8ujj7vb4ke3v@import.calendar.google.com',
    color: "purple"
  };

  // School calendars
  var schoolCalendars = {
    googleCalendarId: 'rugbyschool@brusselsceltic.com',
    color: "#3a87ad"
  };

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
      var textToShow = " : " + event.start.format('HH:mm');
      /* Women calendars on Teamer have fake end times so excluded
      from end times formatting below */
      if (event.end && event.source.googleCalendarId != womenCalendars.googleCalendarId) {
	textToShow = textToShow.concat(' - ' + event.end.format('HH:mm'));
      }
      element.tooltip({
	title: event.title + textToShow,
	/* Setting container makes the tooltip display on top of other
	elements/overlapping divs */
	container: 'body'
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

  $(".rotation").tooltip({
    title: "Rotation every 2 weeks"
  });
});
