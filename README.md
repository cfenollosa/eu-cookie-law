eu-cookie-law
=============

Helping webmasters comply with the EU cookie law

Why?
----

The EU passed a law some years ago that required all websites to warn about the dangers of cookies. I'm not going to comment
on it here; if you want my opinion, [please read this blogpost](http://www.agpd.es/portalwebAGPD/canaldocumentacion/publicaciones/common/Guias/Guia_Cookies.pdf)

It is now being enforced and [some people are being fined](http://www.agpd.es/portalwebAGPD/canaldocumentacion/publicaciones/common/Guias/Guia_Cookies.pdf), so it requires urgent action

In summary, Analytics cookies can't be set unless the user grants consent. Every country has a different interpretation of the EU directive, but in Spain,
just displaying a "cookie banner" is not enough. **No cookies can be set until the user takes action**

This script helps webmasters track user action.
[Using the Spanish interpretation](http://www.agpd.es/portalwebAGPD/canaldocumentacion/publicaciones/common/Guias/Guia_Cookies.pdf) (page 22), consent is either: 

- The user scrolls the webpage, while the notice is visible
- The user clicks on any link on the page

By using this script, webmasters can handle scrolling and clicks.


Quick start
-----------

1. Clone this project
2. Open `demo.html` in your browser
3. Open your javascript console
4. See how the cookie is set when the user closes the box, scrolls or clicks on a link

Tip: Chrome does not allow local files to set cookies, so this demo won't work on Chrome.

How does it work?
-----------------

- All HTML files in your site must include the `cookieBanner` div
- This div is hidden by default with CSS and will be displayed, if needed, by [consent.js](js/consent.js#L64)
- `js/consent.js` (which requires jQuery) will first check if there is a consent cookie.
- If the cookie is present and grants consent, the banner will stay hidden and the script will execute the `doConsent()` function.
- If the cookie is present and denies consent, the banner will stay hidden and no script will be executed
- If there is no cookie, the banner will be displayed


Disclaimer
----------

I am not a lawyer, so take this code with a grain of salt and not as legal advice.
