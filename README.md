<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Goal of the project</a></li>
<li><a href="#sec-2">2. Tools used / dependencies</a>
<ul>
<li><a href="#sec-2-1">2.1. Content generation and template system, building the website</a></li>
<li><a href="#sec-2-2">2.2. Responsiveness</a></li>
<li><a href="#sec-2-3">2.3. Dependency manager</a></li>
<li><a href="#sec-2-4">2.4. Stylesheets</a></li>
<li><a href="#sec-2-5">2.5. Documentation</a></li>
</ul>
</li>
<li><a href="#sec-3">3. Previewing, simple install</a></li>
<li><a href="#sec-4">4. "<i>Dynamic content</i>"</a></li>
<li><a href="#sec-5">5. Other "patches"</a></li>
<li><a href="#sec-6">6. Known issues</a></li>
<li><a href="#sec-7">7. Possible problems</a></li>
<li><a href="#sec-8">8. Improvements</a></li>
</ul>
</div>
</div>


# Goal of the project<a id="sec-1" name="sec-1"></a>

To create a no-bullshit-attractive-static-HTML-website and give the
impression there is some "dynamic" content in it. Cleanliness and
clarity are important.

# Tools used / dependencies<a id="sec-2" name="sec-2"></a>

## Content generation and template system, building the website<a id="sec-2-1" name="sec-2-1"></a>

[Middleman](<https://middlemanapp.com/>) (a Ruby static site
generator) using [Slim](<http://slim-lang.com/>) as a template
engine.

There are some helpers defined in `config.rb` like `nav_link`,
`file_link`, `create_heading` and `page_title` that help when
writing the markup.

Others are provided by the [Padrino
framework](<http://www.padrinorb.com/>).

## Responsiveness<a id="sec-2-2" name="sec-2-2"></a>

Bootstrap framework (v3.3.5) - <http://getbootstrap.com>. CSS (grid,
panel, forms, nav, navbar&#x2026;) and JS (scrollspy.js, affix.js).

## Dependency manager<a id="sec-2-3" name="sec-2-3"></a>

RubyGems are all provided in the Gemfile to use with Bundler.

Rakefile to execute simple tasks is available too.

## Stylesheets<a id="sec-2-4" name="sec-2-4"></a>

Sass files are automatically generated, the main Sass file is
located at: `assets/css/style.sass`, and it uses partials (with
`@import`) from the same folder and other gems (like
bootstrap). Compiles to `assets/css/style.css`, which is
compressed.

Another stylesheet - `assets/css/delayed.sass` - is loaded after
the document is ready, to reduce the amount of unnecessary data for
the above-the-fold content

## Documentation<a id="sec-2-5" name="sec-2-5"></a>

OPTIONAL: Emacs Org mode - to generate docs
(`README.md`). Otherwise just edit markdown.

# Previewing, simple install<a id="sec-3" name="sec-3"></a>

First two things are bundler and rake. Install all dependencies with
`bundle install`.

Then run:

`rake preview` or `middleman server`.

The site should be available at:

`localhost:4567/`

# "*Dynamic content*"<a id="sec-4" name="sec-4"></a>

Files in the partials folder mainly. Generated with PHP scripts
(using Facebook Graph API) elsewhere and pushed with a Machine User
every X minutes using cron.

It will generate:

1.  A number of `<img>` tags (10) with random pictures, to use with a
    gallery in the landing page.
2.  A JSON object containing all Facebook events, stored in a
    variable in a `.js` file (for simplicity and so Sprockets can
    require it)
3.  Updated league tables with scores, to include in the different
    sections.

Events that Fullcalendar shows that are not on Facebook are updated
on the fly with Ajax.

A Facebook page plugin is also used in the landing page. This is a
simplified version of the original one, which was built from scratch
using the Facebook Graph API, and is more convenient. This one, and
the fotorama gallery are loaded only when the user scrolls past a
certain point, to avoid having to load it at the beginning.

# Other "patches"<a id="sec-5" name="sec-5"></a>

Contact forms supported by Formspree - although a good idea - are
dropped for the moment due to the lack of a clear Privacy Policy. A
contact list is provided instead.

# Known issues<a id="sec-6" name="sec-6"></a>

# Possible problems<a id="sec-7" name="sec-7"></a>

Automatically pushing "dynamic content" with the Machine User could
break the page or have unintended results.

# Improvements<a id="sec-8" name="sec-8"></a>

-   Include PHP scripts in this repo or submodule.
-   Using the Google Maps API, create a nice map showing where all
    members come from, extracting info using the Facebook Graph
    API. Then link it to string: "most international rugby club".
-   Middleman multi lang plugin
-   Related to above: user `data` folder more. Read middleman docs on
    it.