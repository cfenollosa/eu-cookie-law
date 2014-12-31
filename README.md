Helping webmasters comply with the EU cookie law

Why?
----

The EU passed a law some years ago that required all websites to warn about the dangers of cookies. I'm not going to comment
on it here; if you want my opinion, [please read this blogpost](http://cfenollosa.com/blog/the-ignorant-eu-cookie-law.html)

It is now being enforced and [some people are being fined](http://www.elperiodico.com/es/noticias/redes/primer-procedimiento-sancionador-espana-por-incumplimiento-ley-cookies-2610349), so it requires urgent action

What does this mean for me?
---------------------------

What this law means for developers is that some Analytics cookies can't be set unless the user grants consent. Every country has a different interpretation of the EU directive, but in Spain,
just displaying a "cookie banner" is not enough. **No cookies can be set until the user takes action**. This is a real PITA, especially for small sites.

This script helps webmasters track user action.
[Using the Spanish interpretation](http://www.agpd.es/portalwebAGPD/canaldocumentacion/publicaciones/common/Guias/Guia_Cookies.pdf) (page 22), consent is either: 

- The user scrolls the webpage, while the notice is visible
- The user clicks on any link on the page

By using this script, webmasters can add all their cookie-dependent code in just one place: `doConsent()`

Does it affect me?
------------------

The directive affects all websites which are based in the EU or have a significant amount *(vague legal term)* of 
visits coming from the EU.

The Spanish interpretation of the directive establishes that personal pages which do 
not offer commercial services are not affected by the law. I, however, prefer to include the banner nevertheless.

I am not a lawyer, so this is not legal advice.

Demo
----

1. Clone this project
2. Open `demo.html` in your browser
3. Open your javascript console
4. See how the cookie is set when the user closes the box, scrolls or clicks on a link

Tip: Chrome does not allow local files to set cookies, so this demo won't work on Chrome.

You can see an online demo [at my own page](http://cfenollosa.com), which uses this same javascript

To implement it in production
-----------------------------

- All HTML files in your site must include the `cookieBanner` div.
- All HTML files must include consent.js and jQuery, which is used to detect scrolling
and adding listeners to links:
`<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>`
`<script src="js/consent.js"></script>`
- Edit `js/consent.js` and customize code with any `XXX` comment

Optional:
- Move the `<style>` section into your production CSS file.
- Change the name of the div on the HTML files and `consent.js`
- Change the cookie expiry date, currently set to 1 year
- Remove `console.log()` function calls
- Edit `cookies.html` as the page name which is safe to browse without giving consent (read below)
- Change the banner text and links. The default is more or less safe for EU regulations, but IANAL.


How does it work?
-----------------

The cookie div is hidden by default with CSS and will be displayed, if needed, by `consent.js`. The script:

- Will first check if there is a consent cookie. Otherwise (i.e. first visit of the user) the banner will be displayed.
- If the cookie grants consent, the script will execute the `doConsent()` function.
- If the cookie denies consent, no script will be executed.

**How to grant consent?**

The law establishes the following user actions:

- Scroll the page. Feel free to edit the code and add a minimum scrolling length if it is required by your country.
- Click on a link (which does not belong to the class `noconsent`, see below)

These two actions can be derived from the former:

- Close the banner, since the user will actually click on a link.
- Clicking on a link which belongs to the class `allowConsent` will re-set the grant cookie. Useful to grant consent after denying it first.

**What does not grant consent?**

- Scrolling on a page whose name is `cookies.html`. It is not detailed in the law, but I feel that clicking on the link
which displays the cookie policy shouldn't be interpreted as granting permission. Feel free to change the name in the code.
- Clicking on a link which belongs to the class `noconsent`. You can notice that the link to `cookies.html` is one of these.


Pull requests and comments will be very welcome!


Donations
---------

If this project saved you some time, please [donate to the EFF](https://supporters.eff.org/donate) so they can fight against stupid laws.
