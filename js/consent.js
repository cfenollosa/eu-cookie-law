$(document).ready(function() {
    var consentIsSet = "unknown";
    var cookieBanner = "#cookieBanner";
    var consentString = "cookieConsent=";

    // Sets a cookie granting/denying consent, and displays some text on console/banner
    function setCookie(console_log, banner_text, consent) {
        console.log(console_log);
        $(cookieBanner).text(banner_text);
        $(cookieBanner).fadeOut(5000);
        var d = new Date();
        var exdays = 30*12; //  1 year
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = consentString + consent + "; " + expires + ";path=/";
        consentIsSet = consent;
    }

    function denyConsent() {
        setCookie("Consent denied", "You disallowed the use of cookies.", "false");
    }

    function grantConsent() {
        if (consentIsSet == "true") return; // Don't grant twice
        setCookie("Consent granted", "Thank you for accepting cookies.", "true");
        doConsent();
    }

    // Run the consent code. We may be called either from grantConsent() or 
    // from the main routine
    function doConsent() {
        console.log("Consent was granted");
        // XXX edit your consent code here. As an example here's a function to
        // run Google Analytics
        analytics();
    }

    function analytics() {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-752819-15', 'cfenollosa.com');
        ga('send', 'pageview');
    }


    // main routine
    //
    // First, check if cookie is present
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i].trim();
        if (c.indexOf(consentString) == 0) {
            consentIsSet = c.substring(consentString.length, c.length);
        }
    }

    if (consentIsSet == "unknown") {    
        $(cookieBanner).fadeIn();
        // The two cases where consent is granted: scrolling the window or clicking a link
        // Don't set cookies on the "cookies page" on scroll
        var pageName = location.pathname.substr(location.pathname.lastIndexOf("/") + 1);
        if (pageName != "cookies.html") $(window).scroll(grantConsent); // XXX you may edit this name
        $("a:not(.noconsent)").click(grantConsent);
        $(".denyConsent").click(denyConsent);
        // allow re-enabling cookies
        $(".allowConsent").click(grantConsent);
    } 
    else if (consentIsSet == "true") doConsent();
});
