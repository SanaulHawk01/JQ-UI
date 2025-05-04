
// Jquery start

$(document).ready(function(){});

$(function() {});

// Jquery end

// Item 1

$(function() {
	$("#dr").draggable();
});

// Item 2

$(function() {
	$("#dro_dra").draggable();
});

$(function() {
	$("#dro").droppable({
		drop: function(event, ui) {
			$(this)
			.addClass("ui-state-highlight")
			.find("p")
			.html("Dropped");
		}
	});
});

// Item 3

$(function() {
	$("#resi").resizable();
});

// Item 4

$(function() {
	$("#resia").resizable({
		animate: true
	});
});

// Item 5

$(function() {
	$("#sel").selectable();
});

// Item 6

$(function() {
	$("#sortable").sortable();
});

// Item 7

$(function() {
	$("#accordion").accordion();
});

// Item 8

$( function() {
    var data = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: data
    });
} );

// Item 9

$( function() {
    $( ".wi_ip[type=submit], .wi_a, .wi_btn" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
} );

// Item 10

$( function() {
    $( ".input_cbo" ).checkboxradio({
      icon: false
    });
} );

// Item 11

$( function() {
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
} );

// Item 12

$( function() {
    $( "#datepicker" ).datepicker();
} );

// Item 13

$( function() {
  $( "#dialog" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });
});

// Item 14

$( function() {
    $( "#menu" ).menu();
} );

// Item 15

  $( function() {
    var progressTimer,
      progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" ),
      dialogButtons = [{
        text: "Cancel Download",
        click: closeDownload
      }],
      dialog = $( "#dialog" ).dialog({
        autoOpen: false,
        closeOnEscape: false,
        resizable: false,
        buttons: dialogButtons,
        open: function() {
          progressTimer = setTimeout( progress, 2000 );
        },
        beforeClose: function() {
          downloadButton.button( "option", {
            disabled: false,
            label: "Start Download"
          });
        }
      }),
      downloadButton = $( "#downloadButton" )
        .button()
        .on( "click", function() {
          $( this ).button( "option", {
            disabled: true,
            label: "Downloading..."
          });
          dialog.dialog( "open" );
        });
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
        dialog.dialog( "option", "buttons", [{
          text: "Close",
          click: closeDownload
        }]);
        $(".ui-dialog button").last().trigger( "focus" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
 
      if ( val <= 99 ) {
        progressTimer = setTimeout( progress, 50 );
      }
    }
 
    function closeDownload() {
      clearTimeout( progressTimer );
      dialog
        .dialog( "option", "buttons", dialogButtons )
        .dialog( "close" );
      progressbar.progressbar( "value", false );
      progressLabel
        .text( "Starting download..." );
      downloadButton.trigger( "focus" );
    }
  } );
