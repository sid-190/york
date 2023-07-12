(function() {

    // Messaging - PLEASE EDIT THESE VALUES!

    var title = '<strong>Protect. Respect. Be kind.</strong>';
    var message = '<p><a href="https://coronavirus.york.ac.uk/">Covid information for staff and students</a></p>';

    // Alert toggle - SET THIS TO 'true' to show the alert
    var showAlert = false;

    // Don't show on Festival of Ideas or York Concerts site
    if( window.location.href.indexOf( '//yorkfestivalofideas.com' ) != -1 ) showAlert = false;
    if( window.location.href.indexOf( '//yorkconcerts.co.uk' ) != -1 ) showAlert = false;

    // 13/12/2021 - Turn on for the homepage _only_!
    // showAlert = ( window.location.href == 'https://www.york.ac.uk/' );

    // jQuery isn't loaded
    if(typeof $ === 'undefined') {
        return;
    }

    // Variables - DO NOT EDIT!
    var $header = $('.c-main-header'),
        alertTitle = '<h2>{0}</h2>',
        alertContainer = '<div id="global-notice">{0}</div>',
        docHead = document.getElementsByTagName('head')[0],
        alertStyles = document.createElement('link');

    function getHeader() {

        var $header = $('.c-main-header');

        if($header.length <= 0) {
            // this caters for vintage pages
            // $header = $('#container');
            $header = $('body > #container');
        }

        if($header.length <= 0) {
            // this caters for 2013-style pages
            $header = $('header');
        }

        return $header;
    }

    function loadGlobalAlert() {
        var $header = getHeader();

        if($header.length > 0) {

            // format the title with heading tags
            title = alertTitle.replace('{0}', title);

            // inject the message html into the page
            $header.before(alertContainer.replace('{0}', title + message));
        }
    }

    // Uncomment this next section to test on cmstest/wwwtest
    // if(window.location.host === "wwwtest.york.ac.uk" || window.location.host === "cmstest.york.ac.uk") {
    //    showAlert = true;
    // }

    // Uncomment this next section to test by adding a `globalalert_test` query arg
    if( window.location.href.indexOf( "?globalalert_test" ) != -1 ) {
       showAlert = true;
    }

    if(showAlert) {
        // inject the global alert styles into the page
        if(typeof docHead !== 'undefined') {
            alertStyles.rel  = 'stylesheet';
            alertStyles.type = 'text/css';
            alertStyles.href = 'https://www.york.ac.uk/static/globalalert/covid19styles.css';
            alertStyles.onload = function() { loadGlobalAlert(); };
            docHead.appendChild(alertStyles);
        }
    }
})();